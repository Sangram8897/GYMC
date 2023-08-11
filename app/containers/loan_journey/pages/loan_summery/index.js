import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const LoanSummary = ({ route, navigation }) => {
    const page_code = 'LOAN_SUMMARY'
    const { data } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>

        </PatternI>
    )
}

export default LoanSummary