const initialState = {
    loading: false,
    module_ID: null,
    modules_list: [],
};

const ModuleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODULE_LIST_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'SET_SUBJECT_ID':
            return {
                ...state,
                subject_ID: action.payload,
            };
        case 'MODULE_LIST_SUCCESS':
            return {
                ...state,
                modules_list: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}
export default ModuleListReducer;
