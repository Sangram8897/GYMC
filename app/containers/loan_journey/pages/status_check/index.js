import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const StatusCheck = ({ route, navigation }) => {
    const page_code = 'STATUS_CHECK'
    const { data } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>

        </PatternI>
    )
}

export default StatusCheck