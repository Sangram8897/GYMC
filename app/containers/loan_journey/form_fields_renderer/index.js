import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useCallback, useReducer, useContext, useMemo } from 'react'
import AddSubModuleInfo from './AddSubModuleInfo';
import { LoanJourneyDataContext } from '../context';

const MannualModifications = {
    MOBILE_VERIFY: [{
        key: 'fieldName',
        value: 'mobileNumber',
        additionalProperties: {
            verificationFieldName: 'accountNo'
            //regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    {
        key: 'fieldName',
        value: 'accountNo',
        additionalProperties: {
            showField: false
            //regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },],
    PERSONAL_DETAILS:[
        {
            key: 'fieldName',
            value: 'alternativeUsername',
            additionalProperties: {
                regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        } 
    ],

}

const FormFieldsRendererView = () => {
    const { state } = useContext(LoanJourneyDataContext);
    const [page_fields, set_page_fields] = useState([])

    // const getPageConfig = () => {
    //     if (state?.current_active_page?.pageCode) {
    //         const current_page_config = state?.loan_product_config?.pageSectionConfig?.individual[state?.current_active_page?.pageCode]
    //         return current_page_config
    //     }
    //     return []
    // }
    // const calculation = useMemo(() => getPageConfig(), [state?.current_active_page?.pageCode]);

    // useEffect(() => {
    //     initialDataSetUp(calculation ? calculation : [])
    // }, [calculation])

    // const initialDataSetUp = async (array) => {
    //     if (MannualModifications[state?.current_active_page?.pageCode]) {
    //         const trysa = await MannualModifications[state?.current_active_page?.pageCode].reduce((curr, item) => {
    //             return setDataBasedOnKeyValues(array, item.key, item.value, item.additionalProperties)
    //         }, array)
    //         set_page_fields(trysa)
    //     } else {
    //         set_page_fields(array)
    //     }
    // }

    console.log('state', state?.loan_product_config?.pageSectionConfig?.individual);
    console.log('pagecode', state?.current_active_page?.pageCode);

    // useEffect(() => {

    // }, [state?.current_active_page?.pageCode])

    const getPageConfig = () => {
        if (state?.current_active_page?.pageCode) {
            const current_page_config = state?.loan_product_config?.pageSectionConfig?.individual[state?.current_active_page?.pageCode]
            console.log('current_page_config', current_page_config);
            return current_page_config
        }
        return []
    }

    const calculation = useMemo(() => getPageConfig(), [state?.current_active_page?.pageCode]);
    

    useEffect(() => {
        initialDataSetUp(calculation ? calculation : [])
    }, [calculation])

    const initialDataSetUp = async (array) => {
        if (MannualModifications[state?.current_active_page?.pageCode]) {
            const trysa = await MannualModifications[state?.current_active_page?.pageCode].reduce((curr, item) => {
                return setDataBasedOnKeyValues(array, item.key, item.value, item.additionalProperties)
            }, array)
            set_page_fields(trysa)
        } else {
            set_page_fields(array)
        }
    }
    console.log('FormFieldsRendererView page_fields', page_fields);
    return (
        <View style={{ flex: 1 ,width:'95%',alignSelf:'center'}}>
            {(page_fields && page_fields.length>0) && <AddSubModuleInfo data={page_fields} />}
        </View>
    )
}

export default FormFieldsRendererView

const styles = StyleSheet.create({})

function modifyDataByIndex(array, text, index_history) {
    let data = [...array]
    const currentIndex = index_history.shift();
    if (data[currentIndex]) {
        const newData = data[currentIndex]
        if (index_history?.length == 0) {
            // newData.value = text
        }
        const { fields, id, sectionContent } = data[currentIndex];
        if (fields && index_history) {
            newData.fields = modifyDataByIndex(fields, text, index_history);
        }
        else if (sectionContent?.fields && index_history) {
            newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, text, index_history);
        }
        else if (sectionContent?.config?.options && index_history) {
            newData.sectionContent.config.options = modifyDataByIndex(sectionContent.config.options, text, index_history);
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

const _myData = [
    {
        "componentType": "TITLE",
        "className": "mb-1",
        "sectionContent": {
            "isShow": true,
            "titleData": "Mobile Number Verification"
        }
    },
    {
        "componentType": "PARAGRAPH",
        "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
        "sectionContent": {
            "isShow": true,
            "paragraphData": "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application"
        }
    },
    {
        "componentType": "FORM",
        "className": "medium",
        "validateSection": true,
        "sectionContent": {
            "options": {
                "columnSize": 1
            },
            "isShow": true,
            "fields": [
                {
                    "fieldDataType": "MOBILE_NO",
                    "isMandatory": true,
                    "fieldLabel": "Enter Mobile number",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 10,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": "^[1-9][0-9]{9}$",
                    "countryCode": "+91",
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Enter 10 digit Mobile Number",
                    "fieldName": "mobileNumber",
                    "labelInfo": null,
                    "showLabel": true,
                    "groupName": null,
                    "groupIndex": null,
                    "showField": true
                }
            ]
        }
    },
    {
        "componentType": "CONSENT",
        "validateSection": true,
        "className": "consent-text",
        "sectionContent": {
            "config": {
                "options": [
                    {
                        "consentType": "APIFETCH",
                        "consentCode": "DND_CONSENT_PL",
                        "submitConsentCodes": [
                            "DND_CONSENT_PL",
                            "PRIVACY_POLICY_PL"
                        ],
                        "label": null,
                        "className": "check-container",
                        "completed": null
                    }
                ]
            },
            "isShow": true,
            "showField": true
        }
    },
    {
        "componentType": "OTP",
        "sectionContent": {
            "fields": {
                "fieldDataType": "OTP",
                "otpType": "MOBILE",
                "isMandatory": true,
                "fieldLabel": "Enter Mobile OTP",
                "fieldAccessModifier": "EDITABLE",
                "minLength": 6,
                "maxLength": 15,
                "length": 6,
                "error": null,
                "value": null,
                "validationJson": null,
                "rulesFor": null,
                "regex": null,
                "regexErrorMessage": null,
                "rowNo": null,
                "columnNo": null,
                "groupName": null,
                "groupIndex": null,
                "placeholderText": "xx x  xxxxx",
                "fieldName": "accountNo",
                "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
                "showLabel": true,
                "showField": true,
                "OtpMasking": true,
                "otpDataType": "NUMBER",
                "otpAttempts": 3,
                "waitTimeInSeconds": 120,
                "infoText": "A 6 digit OTP has been sent to the above number"
            },
            "options": {
                "value": null,
                "notificationType": "COMMON_OTP_TWO",
                "loanProduct": null,
                "createBorrower": true,
                "generateOtp": true
            },
            "isShow": false
        }
    }
]