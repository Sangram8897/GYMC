import React, { useEffect, useReducer, useCallback, useMemo, useContext } from 'react'
import { LoanJourneyDataContext } from './index';
import { PAGECODES } from '../config/page_codes';
export const PageFormContext = React.createContext();

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_CHANGE = 'INPUT_CHANGE';

function modifyDataByIndex(array, keyProperty = 'value', value, index_history) {
    let data = [...array]
    const currentIndex = index_history.shift();
    if (data[currentIndex]) {
        const newData = data[currentIndex]
        if (index_history?.length == 0) {
            newData[keyProperty] = value
        }
        const { fields, id, sectionContent } = data[currentIndex];
        if (fields && index_history) {
            newData.fields = modifyDataByIndex(fields, keyProperty, value, index_history);
        }
        else if (sectionContent?.fields && index_history) {
            newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, keyProperty, value, index_history);
        }
        else if (sectionContent?.config?.options && index_history) {
            newData.sectionContent.config.options = modifyDataByIndex(sectionContent.config.options, keyProperty, value, index_history);
        }
    }
    return data
}

function setDataBasedOnKeyValues(data, key, value, additionalProperties) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][key] && data[i][key] == value) {
            console.log('matched here');

            data[i] = {
                ...data[i],
                ...additionalProperties
            }
        }

        if (data[i]?.fields && data[i]?.fields?.length > 0) {
            data[i].fields = setDataBasedOnKeyValues(data[i].fields, key, value, additionalProperties)
        }

        if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
            if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
                data[i].sectionContent.fields = setDataBasedOnKeyValues(data[i]?.sectionContent?.fields, key, value, additionalProperties)
            } else if (data[i]?.sectionContent?.fields[key] && data[i]?.sectionContent?.fields[key] == value) {
                data[i].sectionContent.fields = {
                    ...data[i].sectionContent.fields,
                    ...additionalProperties
                }
            }
        }
    }
    return data
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_INPUT_UPDATE':
            let fields_state_data = [...state.data]
            let index_history_ = [...action.index_array]
            let updated_fields_state_data = modifyDataByIndex(fields_state_data, action.key, action.value, index_history_)
            return {
                ...state,
                data: updated_fields_state_data
            }

        case INPUT_CHANGE:
            let fields_state_data_ = [...state.data]
            let updated_fields_state_data_ = setDataBasedOnKeyValues(fields_state_data_, action.key, action.value, action.additionalProperties)
            // console.log('FormFieldsRendererView bg hotay ka', updated_fields_state_data_);
            return {
                ...state,
                data: updated_fields_state_data_
            }

        case 'SET_FORM_FIELDS':
            return {
                ...state,
                data: action.data
            }

        case 'SET_FORM_RENDERED':
            return {
                ...state,
                form_rendered: true
            }
        case 'MANAGE_FORM_FIELDS_ON_SUBMIT':
            return {
                ...state,
                show_consent: false
            }
        default:
            return state;
    }
}

const onSubmitVerifyPageCodes = ['MOBILE_VERIFY']

const PageFormContextProvider = ({ data, children }) => {
    const [formState, dispatchFormState] = useReducer(formReducer, {
        data: [],
        index_array: null,
        form_rendered: false,
        show_consent: true,
    });
    const { loan_journey_state, moveFromPage } = useContext(LoanJourneyDataContext);

    useEffect(() => {
        dispatchFormState({ type: 'SET_FORM_RENDERED' })
    }, [])

    const inputChangeHandler = useCallback(
        (inputKey, inputValue, index_array) => {

            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                key: inputKey,
                value: inputValue,
                index_array: index_array,
            })
        }, [dispatchFormState]);

    const onVerifyHandler = 
        async(fieldName, keyProperty, value, index_history, submitPageOnVerify = false) => {

            // const submitPageOnVerify = onSubmitVerifyPageCodes.some(page => page == page_code)
           await dispatchFormState({
                type: INPUT_CHANGE,
                key: 'fieldName',//'fieldName',
                value: fieldName,
                additionalProperties: { showField: false }
            })
            if (submitPageOnVerify == true) {
                moveFromPage()
            }
        }

    const setInitialData = (data) => {
        dispatchFormState({ type: 'SET_FORM_FIELDS', data: data })
    }
    const onSubmit = () => {
        return true
    }

    const onVerify = (fieldName, input_value) => {
        console.log('input_value', fieldName, input_value);
        dispatchFormState({
            type: INPUT_CHANGE,
            key: 'fieldName',//'fieldName',
            value: 'accountNo',
            additionalProperties: { showField: true }
        })
        dispatchFormState({ type: 'MANAGE_FORM_FIELDS_ON_SUBMIT' })
    }

    const value = useMemo(
        () => ({
            page_form_state: formState,
            setInitialData: setInitialData,
            dispatch: inputChangeHandler,
            onVerifyHandler: onVerifyHandler,
            onVerify: onVerify,
            onSubmit: onSubmit,
        }),
        [
            formState,
            setInitialData,
            inputChangeHandler,
            onVerifyHandler,
            onVerify,
            onSubmit
        ]
    );

    console.log('page_form_state', formState);
    return (
        <PageFormContext.Provider value={value}>
            {children}
        </PageFormContext.Provider>
    )
}

export default PageFormContextProvider


/**
 *         const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("foo");
            }, 300);
        });
        myPromise
            .then((value) => `${value} and bar`)
            .catch((err) => {
                console.error(err);
            });
 */