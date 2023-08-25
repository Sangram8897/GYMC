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
//import { NavigationActions } from 'react-navigation';

const onSubmitVerifyPageCodes = ['MOBILE_VERIFY']
const PatternI = ({ navigation, page_code, children }) => {
    const { loan_journey_state, dispatchContextState, moveFromPage } = useContext(LoanJourneyDataContext);
    const { onVerify, onSubmit } = useContext(PageFormContext);
    const [stepperData, setstepperData] = useState([]);

    const onNextButtonPress = async () => {
        const isVerificationRequired = onSubmitVerifyPageCodes.some(page => page == page_code)
        if (isVerificationRequired == true) {
            onVerify()
        } else {
            moveFromPage()
        }
    }

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
                    await dispatchContextState({ type: 'CLEAR_CONTEXT' })
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
                    <FormFieldsRendererView />
                </KeyboardAvoidingView>

            </View>

        </Container>
    )
}

export default PatternI

const styles = StyleSheet.create({})