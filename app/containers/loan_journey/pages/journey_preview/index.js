import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const JourneyPreview = ({ route, navigation }) => {
    const page_code = 'JOURNEY_PREVIEW'
    const { state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default JourneyPreview