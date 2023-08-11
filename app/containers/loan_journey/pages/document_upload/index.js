import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const DocumentUpload = ({ route, navigation }) => {
    const page_code = 'DOCUMENT_UPLOAD_V2'
    const { data, setData, loanJourneyNavigation } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>

        </PatternI>
    )
}

export default DocumentUpload