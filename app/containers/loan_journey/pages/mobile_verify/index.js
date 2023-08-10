import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../../../components/header'
import StepIndicator from '../../../../components/step_indicator'
import { LoanJourneyDataContext } from '../../context'
import NextPreviosButton from '../../../../components/next_previos_button'

const MobileVerify = ({ route, navigation }) => {
    const page_code = 'SANCTION'
    const { data, setData, setActiveStepInStepper } = useContext(LoanJourneyDataContext);
   
    const [stepperData, setstepperData] = useState([]);
    useEffect(() => {
      //  setActiveStepInStepper(page_code)
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    }, [])

    useEffect(() => {
        const stepperData_context = data?.loan_product_config?.stepperData?.individual;
        setstepperData(stepperData_context)
    }, [data])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                activeColor={'red'}
                inActiveColor={'blue'}
                hasBackButton={true}
                onBackbuttonPress={() => navigation.goBack()}
                showPlusButton={true}
                onPlusButtonPress={() => { }}
            />
            <View style={{ flex: 1 }}>
                {stepperData && <StepIndicator data={stepperData} />}
                <NextPreviosButton />
            </View>
        </SafeAreaView>
    )
}

export default MobileVerify