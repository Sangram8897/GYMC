export const set_loan_journey_data = (data) => async dispatch => {
    dispatch({ type: 'SET_LOAN_JOURNEY_DATA', payload: data });
};