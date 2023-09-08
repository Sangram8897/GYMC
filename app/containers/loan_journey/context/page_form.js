import React, { useEffect, useReducer, useCallback, useMemo, useContext } from 'react'
import { LoanJourneyDataContext } from './index';
import { PAGECODES } from '../config/page_codes';
import ACTIONS from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../store/confugure_store';
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
        case 'SET_ACTIVE_OTP':
            return {
                ...state,
                active_otp: action.data
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

const onSubmitVerifyPageCodes = []//'MOBILE_VERIFY'

const PageFormContextProvider = ({ data, children }) => {
    const dispatch = useDispatch()
    const [formState, dispatchFormState] = useReducer(formReducer, {
        data: [],
        index_array: null,
        form_rendered: false,
        show_consent: true,
        active_otp: null,
    });
    const { loan_journey_state, moveFromPage, setPrpfileData } = useContext(LoanJourneyDataContext);
    let profile_data = useSelector(state => state.LoanJourneyReducer?.profile);

    useEffect(() => {
        dispatchFormState({ type: 'SET_FORM_RENDERED' })
    }, [])

    const setInitialData = (data) => {
        dispatchFormState({ type: 'SET_FORM_FIELDS', data: data })
    }

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
        async (fieldName, keyProperty, value, index_history, submitPageOnVerify = false) => {
            // const submitPageOnVerify = onSubmitVerifyPageCodes.some(page => page == page_code)
            await setActiveOTP(null)
            //ACTIONS
            if (submitPageOnVerify == true) {
                moveFromPage()
            }
        }


    const onSubmit = () => {
        return true
    }

    const setActiveOTP = (field_name, state = false) => {
        dispatchFormState({
            type: 'SET_ACTIVE_OTP', data: field_name
        })
    }

    const onVerify = async (fieldName, input_value) => {
        const access_token = store.getState()?.LoanJourneyReducer?.profile?.access_token;

        setActiveOTP('accountNo')
        dispatchFormState({ type: 'MANAGE_FORM_FIELDS_ON_SUBMIT' })
        let otp_res = await ACTIONS.generateOtpUsingPhone()
        console.log('otp_res', otp_res);
        let otp_res2 = await ACTIONS.validateOtpOfPhone()
        console.log('otp_res2', otp_res2?.data?.loanDetailsWithAccessToken[0]);
        await setPrpfileData(otp_res2?.data?.loanDetailsWithAccessToken[0])
        await dispatch({ type: 'SET_PROFILE_DATA', payload: otp_res2?.data?.loanDetailsWithAccessToken[0] });

        console.log('otp_res context profile', access_token);

        console.log('otp_res redux profile', profile_data);

        let otp_res3 = await ACTIONS.applyLoanApplication()
        console.log('otp_res3', otp_res3);

        let otp_res4 = await ACTIONS.fetchPanProfileDetails()
        console.log('otp_res4', otp_res4);

        let otp_res5 = await ACTIONS.sendAadharOTPToRegisteredMobile()
        console.log('otp_res5', otp_res5);

        let otp_res6 = await ACTIONS.aadharValidationUsingOtpOrBioMetric()
        console.log('otp_res6', otp_res6);

        let otp_res7 = await ACTIONS.personalProfileUpdate()
        console.log('otp_res7', otp_res7);

        let otp_res8 = await ACTIONS.createSubStatusActivity()
        console.log('otp_res8', otp_res8);

        let otp_res9 = await ACTIONS.dedupeCheck()
        console.log('otp_res9', otp_res9);

        let otp_res10 = await ACTIONS.updateExtraPropertyForBorrowerProfile()
        console.log('otp_res10', otp_res10);

        let otp_res11 = await ACTIONS.npaCheck()
        console.log('otp_res11', otp_res11);

        let otp_res12 = await ACTIONS.fetchPersonalDetails()
        console.log('otp_res12', otp_res12);

        let otp_res13 = await ACTIONS.nameMatch()
        console.log('otp_res13', otp_res13);

        let otp_res14 = await ACTIONS.loanDetailsWithoutBorrowerDetails()
        console.log('otp_res14', otp_res14);

        let otp_res15 = await ACTIONS.borrowerDetail()
        console.log('otp_res15', otp_res15);

        let otp_res16 = await ACTIONS.consentList()
        console.log('otp_res16', otp_res16);

        let otp_res17 = await ACTIONS.commonPropertySuggest()
        console.log('otp_res17', otp_res17);

        let otp_res18 = await ACTIONS.showAllRequiredDocuments()
        console.log('otp_res18', otp_res18);
    }

    const value = useMemo(
        () => ({
            page_form_state: formState,
            setInitialData: setInitialData,
            dispatch: inputChangeHandler,
            onVerifyHandler: onVerifyHandler,
            onVerify: onVerify,
            onSubmit: onSubmit,
            setActiveOTP
        }),
        [
            formState,
            setInitialData,
            inputChangeHandler,
            onVerifyHandler,
            onVerify,
            onSubmit,
            setActiveOTP

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