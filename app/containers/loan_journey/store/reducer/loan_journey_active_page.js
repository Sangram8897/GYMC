
const initialState = {
    data: [],
    consents: [],
    show_consent: true,
    active_otp: null,
};

const LoanJourneyActivePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_CONSENT_DATA':
            return {
                ...state,
                consents: action.payload
            };
        default:
            return state;
    }
}

export default LoanJourneyActivePageReducer;