import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import PatternI from '../../page_patterns/patternI'
import { LoanJourneyDataContext } from '../../context'

const MoreInfo = ({ route, navigation }) => {
    const page_code = 'MORE_INFO'
    const {  loan_journey_state } = useContext(LoanJourneyDataContext);
 
    return (
        <PatternI navigation={navigation} page_code={page_code}>

        </PatternI>
    )
}

export default MoreInfo