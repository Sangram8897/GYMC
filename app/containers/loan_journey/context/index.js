import React, { createContext, useState, useMemo, useReducer } from "react";
import * as RootNavigation from './../../../RootNavigation';
import { PAGECODES } from "../config/page_codes";

export const LoanJourneyDataContext = createContext();

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
const inintialState = {
    product: {},
    loan_product_config: {},
    current_active_page: null,
    stepper_data: [],
    profile_data: null
}

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOAN_JOURNEY_INITIAL_STATE':
            return action.data
        case 'CLEAR_CONTEXT':
            return inintialState
        case 'UPDATE_STEPPER_DATA':
            return {
                ...state,
                stepper_data: action.data,
                current_active_page: action.page_data
            }
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                profile_data: action.payload,
            }
        default:
            return state;
    }
}

function LoanJourneyDataProvider({ children }) {
    const [data, setData] = useState({});
    const [state, dispatchContextState] = useReducer(contextReducer, inintialState);

    const value = useMemo(
        () => ({
            data,
            loan_journey_state: state,
            setData,
            moveFromPage,
            loanJourneyNavigation,
            dispatchContextState,
            updateActiveStepInStepper,
            setPrpfileData,
        }),
        [
            data,
            state,
            setData,
            moveFromPage,
            loanJourneyNavigation,
            dispatchContextState,
            updateActiveStepInStepper,
            setPrpfileData,
        ]
    );

    function setPrpfileData(data) {
        if (data) {
            dispatchContextState({ type: 'SET_PROFILE_DATA', payload: data })
        }
    }

    function updateActiveStepInStepper(pagedata) {
        if (pagedata && pagedata?.pageCode) {
            const updated_stepper_data = setActiveStepInData(state.stepper_data, pagedata.pageCode)
            dispatchContextState({ type: 'UPDATE_STEPPER_DATA', data: updated_stepper_data, page_data: pagedata })
        }
    }

    function loanJourneyNavigation(current_page, action) {
        if (state?.loan_product_config?.pageSequenceData) {
            const { journeyPages, otherPages } = state?.loan_product_config?.pageSequenceData

            const pageSequence = journeyPages['individual']
            console.log('loanJourneyNavigation', pageSequence);
            const current_page_index = pageSequence.findIndex((item) => item?.pageCode == current_page)
            if (current_page_index == -1) {
                console.error('given Pagecode not found in the page sequence');
                return
            }
            let next_step_data = '';

            if (action == 'NEXT') {
                if (current_page_index < pageSequence.length) {
                    next_step_data = pageSequence[current_page_index + 1]
                    return next_step_data
                } else {
                    console.log('pagesequence limit reached');
                    return
                }
            } else if (action == 'BACK') {
                if (current_page_index > 0) {
                    next_step_data = pageSequence[current_page_index - 1]
                    return next_step_data
                } else {
                    console.log('pagesequence limit reached');
                    return
                }
            }
        } else {
            console.error('Unable to attach/find selected loan configuration');
        }
        // productConfig.pageSequenceData['journeyPages'][journey.productUserType]
    }

    function moveFromPage(action = 'NEXT') {
        const current_active_page_code = state?.current_active_page?.pageCode
        let action_page_code = loanJourneyNavigation(current_active_page_code, 'NEXT')
        // if (action_page_code.pageCode != 'STATUS_CHECK') {
        updateActiveStepInStepper(action_page_code)
        // }
        RootNavigation.navigate(PAGECODES[action_page_code.pageCode]);
    }

    return (
        <LoanJourneyDataContext.Provider value={value}>
            {children}
        </LoanJourneyDataContext.Provider>
    );
}
export default LoanJourneyDataProvider;