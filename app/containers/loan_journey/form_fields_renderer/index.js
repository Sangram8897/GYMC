import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useCallback, useReducer, useContext, useMemo } from 'react'
import AddSubModuleInfo from './AddSubModuleInfo';
import { LoanJourneyDataContext } from '../context';
import IsEmpty from '../../../utils/IsEmpty';

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
    PERSONAL_DETAILS: [
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
    }, [])

    const initialDataSetUp = async (data) => {
        const array = await [...data]
        console.log('grouped_data initialDataSetUp calling', state?.current_active_page?.pageCode, data);
        try {
            if (MannualModifications[state?.current_active_page?.pageCode]) {
                let page_code_data = await [...MannualModifications[state?.current_active_page?.pageCode]]

                let mannual_modified_data = await page_code_data.reduce((curr, item) => {
                    return setDataBasedOnKeyValues(array, item.key, item.value, item.additionalProperties)
                }, array)
                const grouped_data = await formatDataBasedOnGroup(mannual_modified_data)
                set_page_fields(grouped_data)
            } else {
                const grouped_data = await formatDataBasedOnGroup(array)
                set_page_fields(grouped_data)
            }
            // console.log('grouped_data input data', array);
            // const grouped_data = await formatDataBasedOnGroup(array)
            // console.log('grouped_data90', grouped_data);
        } catch (err) {
            console.log('grouped_data error', err);
        }
    }

    console.log('FormFieldsRendererView page_fields', page_fields);
    return (
        <View style={{ flex: 1, width: '95%', alignSelf: 'center' }}>
            {(page_fields && page_fields.length > 0) && <AddSubModuleInfo data={page_fields} />}
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

function formatDataBasedOnGroup(data) {
    // console.log('grouped_data formatDataBasedOnGroup calling');
    function sortDataByGroup(group_sorting_data) {
        //    console.log('grouped_data sortDataByGroup calling');
        const groupedData = [[]];
        group_sorting_data.forEach((item) => {
            if (IsEmpty(item?.groupIndex)) {
                groupedData[0].push(item);
            } else {
                if (!groupedData[item?.groupIndex]) {
                    groupedData[item?.groupIndex] = [];
                }
                groupedData[item.groupIndex].push(item);
            }
        });
        console.log(groupedData);
        const validated_data = removeEmptyElements(groupedData)
        const modified_data = modifyInSectionListFormat(validated_data)
        return modified_data
    }
    function removeEmptyElements(array) {
        //console.log('grouped_data removeEmptyElements calling');
        return array.filter(function (el) {
            return !IsEmpty(el);
        });
    }
    function modifyInSectionListFormat(array) {
        return array.map((i) => {
            let new_item = { group_name: i[0]?.groupName ? i[0]?.groupName : 'page', data: [...i] }
            return new_item
        });
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
            if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
                data[i].sectionContent.fields = sortDataByGroup(data[i]?.sectionContent?.fields)
            }
        }
    }
    return data
}

const _myData = [
    {
        "componentType": "TITLE",
        "validateSection": false,
        "validationJson": {
            "content": {
                "cat": [
                    "Hello, ",
                    {
                        "var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle"
                    }
                ]
            }
        },
        "sectionContent": {
            "titleData": "Hello",
            "isShow": true
        }
    },
    {
        "componentType": "TITLE",
        "validateSection": false,
        "sectionContent": {
            "titleData": "Let us help you find the best loan offer",
            "isShow": true
        },
        "className": "text-info mt-10 mb-20"
    },
    {
        "componentType": "FORM",
        "validateSection": true,
        "sectionContent": {
            "options": {
                "columnSize": 3,
                "mapSupplyData": true,
                "autoVerifyMappedFields": true,
                "mapAndDisable": true,
                "sendOptionKeyForDropDowns": true
            },
            "isShow": true,
            "fields": [
                {
                    "fieldDataType": "TEXT",
                    "isMandatory": true,
                    "fieldLabel": "Personal Email Id",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": 100,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                    "regexErrorMessage": "Invalid Email id",
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Enter Valid Email ID",
                    "fieldName": "alternativeUsername",
                    "labelInfo": "Enter Borrower Email Id for further Communication",
                    "showLabel": true,
                    "groupName": "",
                    "groupIndex": 1,
                    "showField": true,
                    "verificationType": "EMAIL",
                    "verificationFieldName": "emailOtp",
                    "journeyEventCode": "EMAIL_PASS",
                    "verifyDisable": true
                },
                {
                    "fieldDataType": "OTP",
                    "otpType": "EMAIL",
                    "isMandatory": true,
                    "fieldLabel": "Enter Email OTP",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "length": 6,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": "Invalid Email id",
                    "rowNo": null,
                    "columnNo": null,
                    "groupName": "",
                    "groupIndex": 1,
                    "placeholderText": "xx x  xxxxx",
                    "fieldName": "emailOtp",
                    "labelInfo": null,
                    "showLabel": false,
                    "showField": false,
                    "OtpMasking": true,
                    "otpDataType": "NUMBER",
                    "otpAttempts": 3,
                    "excludeToFormValue": true,
                    "waitTimeInSeconds": 60,
                    "options": {
                        "value": null,
                        "notificationType": "COMMON_OTP_TWO",
                        "loanProduct": null,
                        "createBorrower": true,
                        "generateOtp": true,
                        "className": "w-100"
                    }
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "commonpropertyType": "EDUCATION_TYPE",
                    "fieldLabel": "Highest Education",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": 1,
                    "columnNo": 1,
                    "groupName": "",
                    "groupIndex": 2,
                    "placeholderText": "Applicant Education Qualification",
                    "fieldName": "educationType",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "isMandatory": true,
                    "commonpropertyType": "MARITAL_STATUS",
                    "fieldLabel": "Applicant Marital Status",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "rowNo": 1,
                    "columnNo": 2,
                    "groupName": "",
                    "groupIndex": 2,
                    "placeholderText": "Applicant Marital Status",
                    "fieldName": "maritalStatus",
                    "labelInfo": null,
                    "showLabel": true,
                    "showField": true
                },
                {
                    "fieldDataType": "SECTION",
                    "isMandatory": false,
                    "showField": true,
                    "fieldLabel": "Communication Address",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": 6,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "WrapperclassName": "fieldlabel-f-16",
                    "validationJson": {
                        "property": {
                            "fieldLabel": {
                                "if": [
                                    {
                                        "==": [
                                            {
                                                "var": "borrowerDetails.borrowerDetail.isReKyc"
                                            },
                                            false
                                        ]
                                    },
                                    "Communication Address (As Per Bank Records)",
                                    "Communication Address (Details As per Aadhar Card)"
                                ]
                            }
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": 1,
                    "columnNo": 2,
                    "placeholderText": "Enter Address Line2",
                    "fieldName": "communicationAddress",
                    "labelInfo": null,
                    "showLabel": true,
                    "rows": 3,
                    "groupIndex": 3,
                    "groupName": ""
                },
                {
                    "fieldDataType": "BOOLEAN",
                    "className": "mt15",
                    "fieldLabel": "Use a different communication address for this Loan",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": "",
                    "showField": true,
                    "validationJson": {
                        "default": false
                    },
                    "rulesFor": [
                        "addressOne"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "differenceCommunicationAddress",
                    "showLabel": false,
                    "groupName": "",
                    "groupIndex": 4
                },
                {
                    "fieldDataType": "ADDRESS",
                    "fieldLabel": "Address as per Aadhaar",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": "",
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differenceCommunicationAddress"
                                },
                                true
                            ]
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "xx x  xxxxx",
                    "fieldName": "addressOne",
                    "showLabel": false,
                    "showField": true,
                    "groupName": null,
                    "groupIndex": 5,
                    "addressFields": [
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Address Line 1",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 3,
                            "maxLength": 20,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Address Line1",
                            "fieldName": "addressOneLine1",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Address Line 2",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 3,
                            "maxLength": 20,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Address Line2",
                            "fieldName": "addressOneLine2",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Address Line 3",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 3,
                            "maxLength": 20,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Address Line3",
                            "fieldName": "addressOneLine3",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Landmark",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 3,
                            "maxLength": 20,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Landmark",
                            "fieldName": "addressOneSubDistrict",
                            "labelInfo": null,
                            "showLabel": true,
                            "rows": 3
                        },
                        {
                            "fieldDataType": "DROPDOWN",
                            "isMandatory": true,
                            "fieldLabel": "Pincode",
                            "fieldAccessModifier": "EDITABLE",
                            "commonpropertyType": "PINCODE",
                            "minLength": null,
                            "maxLength": 999999,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": [
                                "addressOneState",
                                "addressOneDistrict"
                            ],
                            "options": [],
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": null,
                            "placeholderText": "Enter Pincode",
                            "fieldName": "addressOneZipCode",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        },
                        {
                            "columnNo": 2,
                            "dependentField": null,
                            "fieldDataType": "TEXT",
                            "fieldAccessModifier": "READ_ONLY",
                            "fieldLabel": "City",
                            "fieldName": "addressOneDistrict",
                            "groupName": "Communication Detail",
                            "commonpropertyType": "PINCODE_CITY",
                            "isMandatory": false,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 5,
                            "validationJson": {
                                "calculation": {
                                    "findPinMasterObject": [
                                        "PINBRANCH",
                                        "pincode",
                                        {
                                            "var": "addressOneZipCode"
                                        },
                                        "city"
                                    ]
                                }
                            },
                            "value": null,
                            "placeholderText": "Select City",
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true
                        },
                        {
                            "columnNo": 1,
                            "dependentField": null,
                            "fieldDataType": "TEXT",
                            "fieldLabel": "State",
                            "fieldName": "addressOneState",
                            "groupName": "Communication Detail",
                            "commonpropertyType": "PINCODE_STATE",
                            "fieldAccessModifier": "READ_ONLY",
                            "isMandatory": false,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 6,
                            "validationJson": {
                                "calculation": {
                                    "findPinMasterObject": [
                                        "PINBRANCH",
                                        "pincode",
                                        {
                                            "var": "addressOneZipCode"
                                        },
                                        "state"
                                    ]
                                }
                            },
                            "value": null,
                            "placeholderText": "Select State",
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "visibleInInvestorSection": false,
                            "showLabel": true
                        },
                        {
                            "columnNo": 2,
                            "dependentField": null,
                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                            "fieldDataType": "DROPDOWN",
                            "fieldLabel": "Address Type",
                            "fieldName": "addressOneOwnershipType",
                            "groupName": "Communication Detail",
                            "isMandatory": true,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 5,
                            "validationJson": null,
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "placeholderText": "Address Type",
                            "visibleInInvestorSection": false,
                            "showLabel": true
                        },
                        {
                            "fieldDataType": "DATE",
                            "isMandatory": false,
                            "fieldLabel": "Resident Since",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 0,
                            "minDate": null,
                            "maxDate": "new Date()",
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": "ProductDeclaration",
                            "groupIndex": null,
                            "placeholderText": "",
                            "fieldName": "addressOneLivingSince",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": false
                        },
                        {
                            "columnNo": 2,
                            "dependentField": null,
                            "commonpropertyType": "DOCUMENT_TYPE",
                            "fieldDataType": "DROPDOWN",
                            "fieldLabel": "Address Proof Document Type",
                            "fieldName": "addressTwoDocumentType",
                            "groupName": "Communication Detail",
                            "isMandatory": true,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 5,
                            "validationJson": null,
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "placeholderText": "Address Type",
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "uploadTypeInputfieldName": "addressTwoDocument",
                            "documentCategorycode": "IND_PAP"
                        },
                        {
                            "columnNo": 2,
                            "dependentField": "addressTwoDocumentType",
                            "commonpropertyType": "",
                            "fieldDataType": "DROPDOWN",
                            "fieldLabel": "Address Proof Alias Type",
                            "fieldName": "addressTwoDocumentAliasType",
                            "groupName": "Communication Detail",
                            "isMandatory": true,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 5,
                            "validationJson": {
                                "showField": {
                                    ">": [
                                        {
                                            "var": "scope.addressTwoDocumentType.optionSelected.alias.length"
                                        },
                                        0
                                    ]
                                }
                            },
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "placeholderText": "Address Alias Type",
                            "visibleInInvestorSection": false,
                            "showLabel": true,
                            "uploadTypeInputfieldName": "addressTwoDocument",
                            "documentCategorycode": ""
                        },
                        {
                            "columnNo": 2,
                            "dependentField": "addressTwoDocumentType",
                            "commonpropertyType": "ADDRESS_OWNERSHIP_TYPE",
                            "fieldDataType": "DOCUMENT",
                            "fieldLabel": "Address Proof Document",
                            "fieldName": "addressTwoDocument",
                            "groupName": "Communication Detail",
                            "isMandatory": true,
                            "isMasking": false,
                            "maxLength": null,
                            "minLength": null,
                            "options": [],
                            "regex": null,
                            "regexForJS": null,
                            "regexErrorMessage": null,
                            "rowNo": 4,
                            "rulesFor": null,
                            "showField": true,
                            "sortIndex": 5,
                            "fileDependentField": "addressTwoDocumentType",
                            "fileDependentFieldAliasType": "addressTwoDocumentAliasType",
                            "documentData": {
                                "documentCategoryCode": "IND_PAP"
                            },
                            "validationJson": {
                                "showField": {
                                    "or": [
                                        {
                                            "and": [
                                                {
                                                    ">": [
                                                        {
                                                            "var": "scope.addressTwoDocumentType.optionSelected.alias.length"
                                                        },
                                                        0
                                                    ]
                                                },
                                                {
                                                    "!=": [
                                                        {
                                                            "var": "addressTwoDocumentAliasType"
                                                        },
                                                        0
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "and": [
                                                {
                                                    "==": [
                                                        {
                                                            "var": "scope.addressTwoDocumentType.optionSelected.alias"
                                                        },
                                                        null
                                                    ]
                                                },
                                                {
                                                    "==": [
                                                        {
                                                            "var": "addressTwoDocumentAliasType"
                                                        },
                                                        null
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            "value": null,
                            "visibleInAdminSection": true,
                            "visibleInBorrowerSection": true,
                            "visibleInDsaSection": true,
                            "placeholderText": "Address Type",
                            "visibleInInvestorSection": false,
                            "showLabel": true
                        }
                    ]
                },
                {
                    "fieldDataType": "SECTION",
                    "isMandatory": false,
                    "showField": true,
                    "fieldLabel": "Assigned Branch",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": 6,
                    "maxLength": null,
                    "className": "w-100",
                    "error": null,
                    "value": null,
                    "pageSectionValidationJson": {
                        "value": {
                            "cat": [
                                "<div class='bank-detail-status back-clr-white medium m-override-0 p-0verride-0'><div class='mb-0 form-label-lg d-flex align-items-start'><img src='../../../assets/icons/building.png' alt=''><div class='details-content'>Bank of India ",
                                {
                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue"
                                },
                                " Branch<div class='address-content'><span class='common-info'>",
                                {
                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.line1Value"
                                },
                                {
                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.cityValue"
                                },
                                ",",
                                {
                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.stateValue"
                                },
                                ",",
                                {
                                    "var": "$scope.loanDetails.userHierarchyUnit.addressAssigned.zipCodeValue"
                                },
                                "</span></div></div></div>"
                            ]
                        }
                    },
                    "validationJson": null,
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": 1,
                    "columnNo": 2,
                    "placeholderText": "Enter assigned Branch",
                    "fieldName": "assignedBranch",
                    "labelInfo": null,
                    "showLabel": false,
                    "rows": 3,
                    "groupName": "Assigned Branch",
                    "groupIndex": 6
                },
                {
                    "fieldDataType": "BOOLEAN",
                    "className": "mt15",
                    "fieldLabel": "Use a different branch for this Loan",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": "",
                    "validationJson": {
                        "default": false
                    },
                    "rulesFor": [
                        "homeBranchState",
                        "homeBranchDistrict",
                        "homeBranchCity",
                        "branchCode",
                        "branchAddress"
                    ],
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "differencebranch",
                    "showLabel": false,
                    "groupName": "",
                    "groupIndex": 4
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": null,
                    "isMandatory": true,
                    "commonpropertyType": "HOME_BRANCH_STATE",
                    "fieldLabel": "Home Branch State",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differencebranch"
                                },
                                true
                            ]
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Home Branch State",
                    "fieldName": "homeBranchState",
                    "showLabel": true,
                    "labelInfo": "This will be your Bank Branch State where your case will be initiated",
                    "groupName": "Choose Your branch",
                    "groupIndex": 8,
                    "showField": true
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": "homeBranchState",
                    "commonpropertyType": "HOME_BRANCH_DISTRICT",
                    "isMandatory": true,
                    "fieldLabel": "Home Branch District",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differencebranch"
                                },
                                true
                            ]
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Home Branch District",
                    "fieldName": "homeBranchDistrict",
                    "showLabel": true,
                    "labelInfo": "This will be your Bank Branch District where your case will be initiated",
                    "groupName": "Choose Your branch",
                    "groupIndex": 8,
                    "showField": true
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "dependentField": "homeBranchDistrict",
                    "commonpropertyType": "HOME_BRANCH_CITY",
                    "isMandatory": true,
                    "fieldLabel": "Home Branch City",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differencebranch"
                                },
                                true
                            ]
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Home Branch City",
                    "fieldName": "homeBranchCity",
                    "showLabel": true,
                    "labelInfo": "This will be your Bank Branch City where your case will be initiated",
                    "groupName": "Choose Your branch",
                    "groupIndex": 8,
                    "showField": true
                },
                {
                    "fieldDataType": "DROPDOWN",
                    "commonpropertyType": "HOME_BRANCH_NAME",
                    "dependentField": "homeBranchCity",
                    "isMandatory": true,
                    "fieldLabel": "Home Branch",
                    "fieldAccessModifier": "EDITABLE",
                    "minLength": 6,
                    "maxLength": 15,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differencebranch"
                                },
                                true
                            ]
                        }
                    },
                    "rulesFor": [
                        "branchAddress"
                    ],
                    "regex": null,
                    "options": [],
                    "regexErrorMessage": null,
                    "errorIconPath": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "Home Branch",
                    "fieldName": "branchCode",
                    "showLabel": true,
                    "labelInfo": "This will be your Bank Branch where your case will be initiated",
                    "groupName": "Choose Your branch",
                    "groupIndex": 8,
                    "showField": true
                },
                {
                    "fieldDataType": "TEXT_AREA",
                    "isMandatory": true,
                    "fieldLabel": "Branch Address",
                    "fieldAccessModifier": "READ_ONLY",
                    "minLength": null,
                    "maxLength": null,
                    "error": null,
                    "value": null,
                    "validationJson": {
                        "showField": {
                            "==": [
                                {
                                    "var": "differencebranch"
                                },
                                true
                            ]
                        },
                        "calculation": {
                            "if": [
                                {
                                    "!=": [
                                        {
                                            "var": "branchCode"
                                        },
                                        null
                                    ]
                                },
                                {
                                    "findMasterObject": [
                                        "BRANCH",
                                        "branchCode",
                                        {
                                            "var": "branchCode"
                                        },
                                        "address"
                                    ]
                                },
                                " "
                            ]
                        }
                    },
                    "rulesFor": null,
                    "regex": null,
                    "regexErrorMessage": null,
                    "rowNo": null,
                    "columnNo": null,
                    "placeholderText": "",
                    "fieldName": "branchAddress",
                    "labelInfo": null,
                    "groupName": "Choose Your branch",
                    "groupIndex": 8,
                    "showLabel": true,
                    "rows": 3
                }
            ]
        }
    },
    {
        "componentType": "CONSENT",
        "validateSection": true,
        "className": "consent-text mb-20",
        "sectionContent": {
            "config": {
                "options": [
                    {
                        "consentType": "APIFETCH",
                        "consentCode": "BUREAU_CONSENT_PL",
                        "submitConsentCodes": [
                            "BUREAU_CONSENT_PL"
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
    }
]