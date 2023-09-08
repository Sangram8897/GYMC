import React, {  useContext } from 'react'
import { LoanJourneyDataContext } from '../../context';


const ProductDescription = ({ route, navigation }) => {
    const page_code = 'AADHAR_VERIFY'
    const { loan_journey_state } = useContext(LoanJourneyDataContext);

    return (
        <PatternI navigation={navigation} page_code={page_code}>
           
        </PatternI>
    )
}

export default ProductDescription

