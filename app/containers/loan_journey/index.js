import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Header from '../../components/header';
import StepIndicator from '../../components/step_indicator';
import { LoanJourneyDataContext } from './context';
import LoanProducts from '../../config/LoanProducts';
import { PAGECODES } from './config/page_codes';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from '../../store/actions';

const LoanJourney = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { loan_product } = route.params;
    const { loan_journey_state, dispatchContextState } = useContext(LoanJourneyDataContext);
    const loan_journey_data = useSelector(state => state.LoanJourneyReducer.data);

    useEffect(() => {
        handleInitialSetup()
    }, [])

    useEffect(() => {
        if (loan_journey_state && loan_journey_state?.current_active_page?.pageCode) {
            if (loan_journey_state?.current_active_page?.pageCode && PAGECODES[loan_journey_state?.current_active_page?.pageCode]) {
                navigation.replace(PAGECODES[loan_journey_state?.current_active_page?.pageCode])
            } else {
                console.error('LoanJourney : selected page is not configured currently');
            }
        }
    }, [loan_journey_state])


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
        console.log('loan_product_config_data', loan_product_config_data);

        dispatch({ type: 'SET_LOAN_JOURNEY_DATA', payload: loan_product_config_data });
        dispatchContextState({ type: 'SET_LOAN_JOURNEY_INITIAL_STATE', data: loan_product_config_data })
    }
    console.log('loan_journey_data', loan_journey_data);
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