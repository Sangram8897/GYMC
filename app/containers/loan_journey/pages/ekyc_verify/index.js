import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const EKycVerify = ({ route, navigation }) => {
    const page_code = 'EKYC_VERIFY'
    const { loan_journey_state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>

        </PatternI>
    )
}

export default EKycVerify