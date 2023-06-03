const initialState = {
    loading: false,
    sub_modules_list: [],
    module_ID: null,
};

const SubModuleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUB_MODULE_LIST_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'SET_MODULE_ID':
            return {
                ...state,
                module_ID: action.payload,
            };
        case 'SUB_MODULE_LIST_SUCCESS':
            return {
                ...state,
                sub_modules_list: action.payload,
                sub_module_ID: action.id,
                loading: false,
            };

        default:
            return state;
    }
}
export default SubModuleListReducer;
