import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const DocumentList = ({ route, navigation }) => {
    const page_code = 'DOCUMENT_LIST'
    const { state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default DocumentList

