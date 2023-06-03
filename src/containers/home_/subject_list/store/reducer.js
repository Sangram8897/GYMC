const initialState = {
    loading: false,
    subjects_list: [],
};

const SubjectListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBJECT_LIST_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'SUBJECT_LIST_SUCCESS':
            return {
                ...state,
                subjects_list: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}
export default SubjectListReducer;
