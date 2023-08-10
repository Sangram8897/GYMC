import React, { createContext, useState, useMemo } from "react";

export const LoanJourneyDataContext = createContext();

function LoanJourneyDataProvider({ children }) {
    const [data, setData] = useState({}); //setting light theme as default

    const value = useMemo(
        () => ({
            data,
            setData,
            setActiveStepInStepper
        }),
        [data, setData, setActiveStepInStepper]
    );

    function setActiveStepInDataOLD(data, code, sub_step) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].pageCode == code) {
                data[i].isActive = true;
            } else {
                data[i].isActive = false;
            }
            if (data[i]?.subStep && data[i]?.subStep?.length > 0) {
                data[i].subStep = setActiveStepInData(data[i].subStep, code, i)
            }
        }
        return data
    }

    function setActiveStepInData(data_, code) {
        let pagecode_matched = false;
        let pagecode_matched_in_child_steps = false

        function findActiveStepInData(data, code, step) {
            for (let i = 0; i < data.length; i++) {
                // below if statement is unreal condition, but for default behavior its applied (Optional)
                if (data[i].pageCode == code && data[i]?.subStep?.length > 0) {
                    data[i].isActive = true;
                    data[i].isCompleted = false;
                    for (let j = 0; j < data[i]?.subStep?.length; j++) {
                        if (j == 0) {
                            data[i].subStep[j].isActive = true
                            data[i].subStep[j].isCompleted = false
                        } else {
                            data[i].subStep[j].isActive = false
                            data[i].subStep[j].isCompleted = false
                        }
                    }
                    return data
                } else {
                    if (data[i].pageCode == code) {
                        pagecode_matched = true;
                        pagecode_matched_in_child_steps = true;
                    }
                    data[i].isActive = data[i].pageCode == code ? true : false
                    if (data[i]?.subStep && data[i]?.subStep?.length > 0) {
                        data[i].subStep = findActiveStepInData(data[i].subStep, code, i)
                        data[i].isActive = pagecode_matched_in_child_steps
                        pagecode_matched_in_child_steps = false
                    }
                    data[i].isCompleted = !pagecode_matched
                }
            }
            return data
        }
        findActiveStepInData(data_, code)
        return data_
    }

    function setActiveStepInStepper(code) {
        const stepperData = data?.loan_product_config?.stepperData?.individual;
        let updated_stepper_data= setActiveStepInData(stepperData, code)
        let newData = {
            ...data,
            loan_product_config: {
                ...data.loan_product_config,
                stepperData: {
                    individual: updated_stepper_data
                }

            }
        }
       
          setData(newData)
        console.log('updated_stepper_data',code, updated_stepper_data);
    }



    return (
        <LoanJourneyDataContext.Provider value={value}>
            {children}
        </LoanJourneyDataContext.Provider>
    );
}
export default LoanJourneyDataProvider;