import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LoanJourneyDataContext } from '../context';
import Container from '../../../components/Container';
import Header from '../../../components/header';
import StepIndicator from '../../../components/step_indicator';
import NextPreviosButton from '../../../components/next_previos_button';
import { PAGECODES } from '../config/page_codes';
import LoanProducts from '../../../config/LoanProducts';
import FormFieldsRendererView from '../form_fields_renderer';
import { PageFormContext } from '../context/page_form';
import PageRendererView from '../page_renderer';
import ACTIONS from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
//import { NavigationActions } from 'react-navigation';

const onSubmitVerifyPageCodes = []//MOBILE_VERIFY
const PatternI = ({ navigation, page_code, children }) => {
    const dispatch = useDispatch()
    const loan_journey_data = useSelector(state => state.LoanJourney);

    const { loan_journey_state, dispatchContextState, moveFromPage } = useContext(LoanJourneyDataContext);
    const { onVerify, clearForm } = useContext(PageFormContext);
    const [stepperData, setstepperData] = useState([]);

    const onNextButtonPress = async () => {
        moveFromPage()
        // const isVerificationRequired = onSubmitVerifyPageCodes.some(page => page == page_code)
        // if (isVerificationRequired == true) {
        //     onVerify()
        // } else {
        //     clearForm()
        //     dispatch(ACTIONS.moveToNextPage())
        //     moveFromPage()
        // }
    }
console.log('loan_journey_data?.current_active_page',loan_journey_state,loan_journey_data?.current_active_page);
    return (
        <Container isLoading={false}>
            <Header headerTitle={loan_journey_state?.current_active_page?.pageName}
                activeColor={'red'}
                inActiveColor={'blue'}
                hasBackButton={true}
                onBackbuttonPress={() => navigation.goBack()}
                showPlusButton={true}
                onPlusButtonPress={() => { }}
                showRightIcon={true}
                onRightIconPress={async () => {
                    await dispatch({ type: 'CLEAR_LOAN_JOURNEY_DATA' })
                    await dispatch({ type: "CLEAR_ACTIVE_PAGE" })
                    navigation.popToTop('Dashboard')
                }}
            />
            <View style={{ flex: 1 }}>

                {loan_journey_state?.stepper_data && <StepIndicator data={loan_journey_state.stepper_data} />}
                <NextPreviosButton onNext={onNextButtonPress} />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <PageRendererView />
                </KeyboardAvoidingView>

            </View>

        </Container>
    )
}

export default PatternI

const styles = StyleSheet.create({})