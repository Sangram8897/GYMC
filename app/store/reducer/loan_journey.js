
const initialState = {
  data: {},
  profile: {}
};

const LoanJourneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOAN_JOURNEY_DATA':
      return {
        ...state,
        data: action.payload
      };
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}

export default LoanJourneyReducer;