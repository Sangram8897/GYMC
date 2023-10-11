import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    // let updated_data = setDataBasedOnKeyValues(mydata, 'componentType', 'PARAGRAPH', 'my_name', 'sangram')

    //  let updated_data = setDataBasedOnKeyValues(mydata, 'componentType', 'PARAGRAPH', 'my_name', 'sangram', newUpdateForInput)
    //  console.log('updated_data', updated_data);

    const trysa = newUpdateForInput.reduce((curr, item) => {
      return setDataBasedOnKeyValues(mydata, item.key, item.value, item.addOnKey, item.addOnValue)
    }, mydata)
    console.log('updated_data trysa', trysa);
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

function setDataBasedOnKeyValues(data, key, value, addOnKey, addOnValue) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][key] && data[i][key] == value) {
      console.log('matched here');
      data[i][addOnKey] = addOnValue
    }

    if (data[i]?.fields && data[i]?.fields?.length > 0) {
      data[i].fields = setDataBasedOnKeyValues(data[i].fields, key, value, addOnKey, addOnValue)
    }

    if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
      if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
        data[i].sectionContent.fields = setDataBasedOnKeyValues(data[i]?.sectionContent?.fields, key, value, addOnKey, addOnValue)
      } else if (data[i]?.sectionContent?.fields[key] && data[i]?.sectionContent?.fields[key] == value) {
        data[i].sectionContent.fields[addOnKey] = addOnValue
      }
    }
  }
  return data
}

function setDataBasedOnKeyValues2(data, key, value, addOnKey, addOnValue) {

  for (let i = 0; i < data.length; i++) {
    //console.log('data[i]', key, data[i])
    if (data[i][key] && data[i][key] == value) {
      console.log('matched here');
      data[i][addOnKey] = addOnValue
    }

    if (data[i]?.fields && data[i]?.fields?.length > 0) {
      data[i].fields = setDataBasedOnKeyValues(data[i].fields, key, value, addOnKey, addOnValue)
    }

    if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
      //const oodata = data[i]?.sectionContent?.fields
      if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
        data[i].sectionContent.fields = setDataBasedOnKeyValues(data[i]?.sectionContent?.fields, key, value, addOnKey, addOnValue)
      } else if (data[i]?.sectionContent?.fields[key] && data[i]?.sectionContent?.fields[key] == value) {
        console.log('matched here');
        data[i].sectionContent.fields[addOnKey] = addOnValue
      }
    }
  }
  return data
}

function setDataBasedOnKeyValuesNavneet(data, key, value, addOnKey, addOnValue, newUpdateForInput) {
  let magicLength = newUpdateForInput.length;
  let magicLengthAdjust = magicLength - 1;
  for (let i = 0; i < data.length; i++) {
    console.log("hello magic lenght is ", magicLengthAdjust);
    console.log("hello i of magic lenght  ", i);
    if (magicLengthAdjust < i) {
      console.log("breaking the loop because my newUpdateForInput over.")
      break;
    }
    key = newUpdateForInput[i].key;
    value = newUpdateForInput[i].value;
    addOnKey = newUpdateForInput[i].addOnKey;
    addOnValue = newUpdateForInput[i].addOnValue;
    if (data[i][key] && data[i][key] == value) {
      console.log('matched here');
      data[i][addOnKey] = addOnValue
    }
    if (data[i]?.fields && data[i]?.fields?.length > 0) {
      data[i].fields = setDataBasedOnKeyValues(data[i].fields, key, value, addOnKey, addOnValue)
    }
    if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
      if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
        data[i].sectionContent.fields = setDataBasedOnKeyValues(data[i]?.sectionContent?.fields, key, value, addOnKey, addOnValue)
      }
    }
  }
  return data
}

const newUpdateForInput = [
  {
    key: 'fieldName',
    value: 'accountNo',
    addOnKey: 'showField',
    addOnValue: false
  },
  {
    key: 'fieldName',
    value: 'mobileNumber',
    addOnKey: 'verificationFieldName',
    addOnValue: 'accountNo'
  }
]

/**
 * const { fields, id, sectionContent } = data[currentIndex];
        if (fields && index_history) {
            newData.fields = modifyDataByIndex(fields, text, index_history);
        }
        else if (sectionContent?.fields && index_history) {
            newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, text, index_history);
        }
        else if (sectionContent?.config?.options && index_history) {
            newData.sectionContent.config.options = modifyDataByIndex(sectionContent.config.options, text, index_history);
        }
 */
const custom_property = {
  //   'MOBILE_VERIFY': {
  //     key: 'mobileNumber',
  //     property: { verificationkey: 'accountNo' },
  //   }

  fieldName: 'mobileNumber',
  property: { verificationFieldName: 'accountNo' },
}

const mydata = [
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
          "value": "",
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

