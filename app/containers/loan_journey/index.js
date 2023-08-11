import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Header from '../../components/header';
import StepIndicator from '../../components/step_indicator';
import { LoanJourneyDataContext } from './context';
import LoanProducts from '../../config/LoanProducts';
import { PAGECODES } from './config/page_codes';

const LoanJourney = ({ route, navigation }) => {
    const { loan_product } = route.params;
    const { state, dispatchContextState } = useContext(LoanJourneyDataContext);

    useEffect(() => {
        handleInitialSetup()
    }, [])

    useEffect(() => {
        if (state && state?.current_active_page?.pageCode) {
            if (state?.current_active_page?.pageCode && PAGECODES[state?.current_active_page?.pageCode]) {
                navigation.replace(PAGECODES[state?.current_active_page?.pageCode])
            } else {
                console.error('LoanJourney : selected page is not configured currently');
            }
        }
    }, [state])


    function createnewArrayReference(data) {
        return data.map(({ ...args }) => {
            if (args?.subStep && args?.subStep?.length > 0) {
                args.subStep = createnewArrayReference(args.subStep)
            }
            return args
        })
    }

    const handleInitialSetup = async () => {
        const page_sequence = LoanProducts[loan_product?.productConfiguration]?.pageSequenceData?.journeyPages?.individual
        const copy_stepperData = LoanProducts[loan_product?.productConfiguration]?.stepperData?.individual
        let new_ref_stepperData = await createnewArrayReference(copy_stepperData)

        let loan_product_config_data = {
            product: loan_product,
            loan_product_config: LoanProducts[loan_product?.productConfiguration],
            current_active_page: page_sequence[0],
            stepper_data: new_ref_stepperData
        }
        dispatchContextState({ type: 'SET_LOAN_JOURNEY_INITIAL_STATE', data: loan_product_config_data })
    }

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
                <StepIndicator />
            </View>
        </SafeAreaView>
    )
}

export default LoanJourney

const styles = StyleSheet.create({})