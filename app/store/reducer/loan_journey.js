
const initialState = {
  data: {},
};

const LoanJourneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOAN_JOURNEY_DATA':
      return {
        data: action.payload
      };
    default:
      return state;
  }
}

export default LoanJourneyReducer;