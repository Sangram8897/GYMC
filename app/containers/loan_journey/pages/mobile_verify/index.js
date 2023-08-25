import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const MobileVerify = ({ route, navigation }) => {
    const page_code = 'MOBILE_VERIFY'
    const { loan_journey_state } = useContext(LoanJourneyDataContext);
    console.log('loanJourney state',loan_journey_state);
    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default MobileVerify