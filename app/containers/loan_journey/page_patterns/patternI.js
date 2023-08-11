import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LoanJourneyDataContext } from '../context';
import Container from '../../../components/Container';
import Header from '../../../components/header';
import StepIndicator from '../../../components/step_indicator';
import NextPreviosButton from '../../../components/next_previos_button';
import { PAGECODES } from '../config/page_codes';
import LoanProducts from '../../../config/LoanProducts';
import FormFieldsRendererView from '../form_fields_renderer';
//import { NavigationActions } from 'react-navigation';

const PatternI = ({ navigation, page_code, children }) => {
    const { state, dispatchContextState, loanJourneyNavigation, updateActiveStepInStepper } = useContext(LoanJourneyDataContext);
    const [stepperData, setstepperData] = useState([]);

    const onNextButtonPress = () => {
        let action_page_code = loanJourneyNavigation(page_code, 'NEXT')
        if (action_page_code.pageCode != 'STATUS_CHECK') {
            updateActiveStepInStepper(action_page_code)
        }
        navigation.navigate(PAGECODES[action_page_code.pageCode])
    }

    return (
        <Container isLoading={false}>
            <Header headerTitle={state?.current_active_page?.pageName}
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
                {state?.stepper_data && <StepIndicator data={state.stepper_data} />}
                <NextPreviosButton onNext={onNextButtonPress} />
                {/* {children} */}
                <FormFieldsRendererView />
            </View>
           
        </Container>
    )
}

export default PatternI

const styles = StyleSheet.create({})