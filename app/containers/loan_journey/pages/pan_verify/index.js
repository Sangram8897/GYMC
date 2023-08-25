import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const PanVerify = ({ route, navigation }) => {
    const page_code = 'PAN_VERIFY'
    const { loan_journey_state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default PanVerify