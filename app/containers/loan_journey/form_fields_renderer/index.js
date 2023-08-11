import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useCallback, useReducer, useContext, useMemo } from 'react'
import AddSubModuleInfo from './AddSubModuleInfo';
import { LoanJourneyDataContext } from '../context';

const FormFieldsRendererView = () => {
  const { state } = useContext(LoanJourneyDataContext);
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
  console.log('calculation', calculation);

  return (
    <View style={{ flex: 1 }}>

      <AddSubModuleInfo data={calculation} />
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

const _myData = [
  {
    "componentType": "TITLE",
    "className": "mb-5",
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
    "validateSection": false,
    "className": "consent-text",
    "sectionContent": {
      "config": {
        "options": [
          {
            "consentType": "APIFETCH",
            "consentCode": "DND_Consent",
            "submitConsentCodes": [
              "DND_Consent",
              "Privacy_Policy_SBA"
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
        "generateOtp": true,
        "journeyEventCode": "EMAIL_VERIFY"
      },
      "isShow": false
    }
  }
]