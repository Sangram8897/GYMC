import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Header from '../../components/header';
import StepIndicator from '../../components/step_indicator';
import { LoanJourneyDataContext } from './context';
import LoanProducts from '../../config/LoanProducts';

const LoanJourney = ({ route, navigation }) => {
    const { loan_product } = route.params;
    const { data, setData } = useContext(LoanJourneyDataContext);

    useEffect(() => {
        handleInitialSetup()
    }, [])

    const handleInitialSetup = async () => {
        const loan_product_config_data = {
            product: loan_product,
            loan_product_config: LoanProducts[loan_product?.productConfiguration]
        }
        await setData(loan_product_config_data)
        navigation.replace('MobileVerify')
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