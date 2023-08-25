import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const UdyamVerify = ({ route, navigation }) => {
    const page_code = 'UDYAM_VERIFY'
    const { loan_journey_state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default UdyamVerify