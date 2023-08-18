import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context'
import PatternI from '../../page_patterns/patternI'

const CustomerType = ({ route, navigation }) => {
    const page_code = 'CUSTOMER_TYPE'
    const { state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default CustomerType