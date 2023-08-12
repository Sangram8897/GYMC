import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './containers/dashboard';
import Account from './containers/account';
import MobileVerify from './containers/loan_journey/pages/mobile_verify';
import PersonalDetails from './containers/loan_journey/pages/personal_details';
import LoanJourneyDataProvider from './containers/loan_journey/context';
import LoanJourney from './containers/loan_journey';
import MoreInfo from './containers/loan_journey/pages/more_info';
import StatusCheck from './containers/loan_journey/pages/status_check';
import EmploymentDetails from './containers/loan_journey/pages/employment_details';
import DocumentUpload from './containers/loan_journey/pages/document_upload';
import SanctionDetails from './containers/loan_journey/pages/sanction_details';
import KeyFactDetails from './containers/loan_journey/pages/key_fact_details';
import LoanSummary from './containers/loan_journey/pages/loan_summery';
import ESign from './containers/loan_journey/pages/esign';
import EKycVerify from './containers/loan_journey/pages/ekyc_verify';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <LoanJourneyDataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="LoanJourney" component={LoanJourney} options={{ headerShown: false }} />
          <Stack.Screen name="MobileVerify" component={MobileVerify} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} />
          <Stack.Screen name="MoreInfo" component={MoreInfo} options={{ headerShown: false }} />
          <Stack.Screen name="StatusCheck" component={StatusCheck} options={{ headerShown: false }} />
          <Stack.Screen name="EmploymentDetails" component={EmploymentDetails} options={{ headerShown: false }} />
          <Stack.Screen name="DocumentUpload" component={DocumentUpload} options={{ headerShown: false }} />
          <Stack.Screen name="SanctionDetails" component={SanctionDetails} options={{ headerShown: false }} />
          <Stack.Screen name="KeyFactDetails" component={KeyFactDetails} options={{ headerShown: false }} />
          <Stack.Screen name="LoanSummary" component={LoanSummary} options={{ headerShown: false }} />
          <Stack.Screen name="ESign" component={ESign} options={{ headerShown: false }} />
          <Stack.Screen name="EKycVerify" component={EKycVerify} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoanJourneyDataProvider>
  )
}

export default App

const LoanJourneyStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoanJourney" component={LoanJourney} options={{ headerShown: false }} />
      <Stack.Screen name="MobileVerify" component={MobileVerify} options={{ headerShown: false }} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} />
      <Stack.Screen name="MoreInfo" component={MoreInfo} options={{ headerShown: false }} />
      <Stack.Screen name="StatusCheck" component={StatusCheck} options={{ headerShown: false }} />
      <Stack.Screen name="EmploymentDetails" component={EmploymentDetails} options={{ headerShown: false }} />
      <Stack.Screen name="DocumentUpload" component={DocumentUpload} options={{ headerShown: false }} />
      <Stack.Screen name="SanctionDetails" component={SanctionDetails} options={{ headerShown: false }} />
      <Stack.Screen name="KeyFactDetails" component={KeyFactDetails} options={{ headerShown: false }} />
      <Stack.Screen name="LoanSummary" component={LoanSummary} options={{ headerShown: false }} />
      <Stack.Screen name="ESign" component={ESign} options={{ headerShown: false }} />
      <Stack.Screen name="EKycVerify" component={EKycVerify} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// import { StyleSheet, Text, View, Button } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import FormFieldsRendererView from './form_fields_renderer'
// import Dropdown from './components/dropdown'
// import Title from './components/title'
// import CusDatePicker from './components/date_picker'
// import RadioButtonRN from './components/RadioButtonRN'
// import MY_DATA from './form_fields_renderer/configs/loan_config_dt_test'
// import Cus_Switch from './components/switch'
// import { values } from 'lodash'
// import RadioButton from './components/radio_button'
// import { axiosInstance } from './config/service/axios_instance'
// import { HTTP_REST_URLS } from './config/urls'
// import { ActiveEnv } from './config/env'
// import { getCommonData, getData } from './config/api'
// // import DatePicker from 'react-native-date-picker'

// const data = [
//   {
//     label: 'data 1'
//   },
//   {
//     label: 'data 2'
//   }
// ];

// const App = () => {
//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)

//   const updateChildrenIds = (childrenData = [], index) => {
//     const newData = childrenData.map(value => {
//       const { id, children } = value; // no default value for children
//       // removed the recursive call from here
//       const splitIds = id.split('.');
//       splitIds[0] = index;
//       const newId = splitIds.join('.');

//       const newValue = { ...value, id: newId }
//       if (children) {  // moved here
//         newValue.children = updateChildrenIds(children, index)
//       }

//       return newValue;
//     });

//     return newData;
//   };

//   const testFunc4 = async () => {
//     let myData = await modifyDataByIndex(MY_DATA, 'sangram', [2, 6])
//     console.log('myData9', myData);
//     console.log('myData9', MY_DATA);
//     // const result = getValueByIndexHistory(sample_data, [0, 0, 1]);
//     // console.log(result); // Output: "abc"
//   }

//   function modifyDataByIndex(array, text, index_history) {
//     let data = [...array]
//     const currentIndex = index_history.shift();
//     if (data[currentIndex]) {
//       const newData = data[currentIndex]
//       if (index_history?.length == 0) {
//         newData.value = text
//       }
//       const { fields, id, sectionContent } = data[currentIndex];
//       if (fields && index_history) {
//         newData.fields = modifyDataByIndex(fields, text, index_history);
//       }
//       else if (sectionContent?.fields && index_history) {
//         newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, text, index_history);
//       }
//     }
//     return data
//   }

//   function modifyDataByMap(array, text = 'abc', index_history) {
//     const newData = array.map((value, index_) => {
//       const { fields, id } = value;
//       let index_history_index = index_history[0]
//       console.log('myData9', id, index_, index_history);
//       let newValue;
//       if (index_history_index == index_ && index_history.length == 1) {
//         newValue = { ...value, value: text }
//       } else {
//         newValue = { ...value }
//       }

//       if (fields && index_history) {
//         let new_index_history = [...index_history]
//         new_index_history.shift()
//         // console.log(new_index_history);
//         // index_history.shift()
//         newValue.fields = modifyData(fields, text, new_index_history)
//       }
//       return newValue
//     })
//     return newData;
//   }

//   useEffect(() => {
//     getCommonData(HTTP_REST_URLS.fetchPanProfileDetails, {
//       loanUuid: 'e6798c31-2eb8-4fe3-a649-5e107e09595a',
//       applicationSource: 'WEB_JOURNEY',
//       requestFor: 'BORROWER',
//       identityNumberTwo: 'AKFPJ3313G',
//       objectUuid: 'facbc170-118d-4830-83ad-882c0174efe8'
//     })
//     // try {
//     //   axiosInstance.post(HTTP_REST_URLS.borrowerDetail, {
//     //     access_token: 'c539e31d-319d-4e3c-a91c-392708d10eda'
//     //   }).then(function (response) {
//     //     console.log(response);
//     //   })
//     //     .catch(function (error) {
//     //       console.log(ActiveEnv,error);
//     //     });
//     // } catch (error) {
//     //   console.log(ActiveEnv, 'error', error);
//     // }
//   }, [])

//   const testFunc2 = async () => {
//     let iio = await findIndexHistoryByKeyValue(real_data, 'fieldName', 'accountNo')
//     console.log('index_history22', iio);
//   }// "fieldName": "accountNo",
//   let sample_data = [
//     {
//       id: '1',
//       value: '',
//       fields: []
//     },
//     {
//       id: '2',
//       value: '',
//       fields: []
//     },
//     {
//       id: '3',
//       value: '',
//       fields: []
//     },
//     {
//       id: '4',
//       value: '',
//       sectionContent: {
//         fields: [
//           {
//             id: '41',
//             fields: [
//               {
//                 id: '401',
//                 fields: {
//                   id: '4001', fields: [],
//                   sectionContent: { id: '90', value: 'ith gavala' },
//                 }

//               },
//               { id: '402', fields: [] }
//             ]
//           },
//           {
//             id: '42', fields: [
//               {
//                 id: '421',
//                 fields: {
//                   id: '4201',
//                   fields: { id: '4290', value: 'ith gavala' },
//                 }

//               },
//               { id: '422', fields: [] }
//             ]
//           },
//           { id: '43', fields: [] }
//         ]
//       }
//     },
//   ]

//   function findIndexHistoryByKeyValue(data, field_key, fieldvalue) {
//     let matched = false
//     let item_path = {};

//     const testFunc = (data, field_key, fieldvalue, prev_indexs = []) => {
//       for (let i = 0; i < data.length; i++) {
//         console.log('data[i]', data[i]);

//         if (data[i]?.fields && data[i]?.fields[field_key]) {
//           console.log('data[i]?.fields', data[i]?.fields);
//           if (data[i]?.fields[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//             item_path.item_index_history = [...prev_indexs, i]
//             item_path.properties_depth = ['fields', `${field_key}`]
//             break;
//           }
//         }
//         if (data[i]?.fields?.sectionContent && data[i]?.fields?.sectionContent[field_key]) {
//           console.log('data[i]?.sectionContent', data[i]?.fields?.sectionContent);
//           if (data[i]?.fields?.sectionContent[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//             item_path.item_index_history = [...prev_indexs, i]
//             item_path.properties_depth = ['fields', 'sectionContent', `${field_key}`]
//             break;
//           }
//         }
//         if (data[i]?.fields?.fields && data[i]?.fields?.fields[field_key]) {
//           console.log('data[i]?.fields?.fields', data[i]?.fields?.fields);
//           if (data[i]?.fields?.fields[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//             item_path.item_index_history = [...prev_indexs, i]
//             item_path.properties_depth = ['fields', 'fields', `${field_key}`]
//             break;
//           }
//         }
//         if (data[i]?.sectionContent && data[i]?.sectionContent[field_key]) {
//           console.log('data[i]?.sectionContent', data[i]?.sectionContent);
//           if (data[i]?.sectionContent[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//           }
//         }
//         if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields[field_key]) {
//           console.log('data[i]?.sectionContent', data[i]?.sectionContent?.fields);
//           if (data[i]?.sectionContent?.fields[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//           }
//         }
//         if (data[i]?.sectionContent?.sectionContent && data[i]?.sectionContent?.sectionContent[field_key]) {
//           console.log('data[i]?.sectionContent?.sectionContent', data[i]?.sectionContent?.sectionContent);
//           if (data[i]?.sectionContent?.sectionContent[field_key] == fieldvalue) {
//             console.log('fieldvalue matched');
//           }
//         }

//         if (data[i][field_key] == fieldvalue) {
//           matched = true;
//           item_path.item_index_history = [...prev_indexs, i]
//           item_path.properties_depth = [`${field_key}`]
//           console.log('fieldvalue matched');
//         }

//         else if (matched != true && data[i]?.fields && data[i]?.fields.length > 0) {
//           testFunc(data[i]?.fields, field_key, fieldvalue, [...prev_indexs, i])
//         }
//         else if (matched != true && data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
//           testFunc(data[i]?.sectionContent?.fields, field_key, fieldvalue, [...prev_indexs, i])
//         }
//         else {
//           continue;
//         }
//       }
//     }

//     testFunc(data, field_key, fieldvalue)
//     return item_path
//   }


//   return (
//     <View style={{ flex: 1 }}>
//       {/* <FormFieldsRendererView /> */}
//       {/* <RadioButton /> */}
//       {/* <Cus_Switch label={'my switch'} value={true} onSwitch={() => { }} /> */}
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
// let real_data = [
//   {
//     "componentType": "TITLE",
//     "className": "mb-1",
//     "sectionContent": {
//       "isShow": true,
//       "titleData": "Mobile Number Verification"
//     }
//   },
//   {
//     "componentType": "PARAGRAPH",
//     "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3",
//     "sectionContent": {
//       "isShow": true,
//       "paragraphData": "Please provide your mobile number to get started. We recommend providing mobile no registered with Aadhaar for quicker processing of your application"
//     }
//   },
//   {
//     "componentType": "FORM",
//     "className": "medium",
//     "validateSection": true,
//     "sectionContent": {
//       "options": {
//         "columnSize": 1
//       },
//       "isShow": true,
//       "fields": [
//         {
//           "fieldDataType": "MOBILE_NO",
//           "isMandatory": true,
//           "fieldLabel": "Enter Mobile number",
//           "fieldAccessModifier": "EDITABLE",
//           "minLength": null,
//           "maxLength": 10,
//           "error": null,
//           "value": null,
//           "validationJson": null,
//           "rulesFor": null,
//           "regex": "^[1-9][0-9]{9}$",
//           "countryCode": "+91",
//           "regexErrorMessage": null,
//           "rowNo": null,
//           "columnNo": null,
//           "placeholderText": "Enter 10 digit Mobile Number",
//           "fieldName": "mobileNumber",
//           "labelInfo": null,
//           "showLabel": true,
//           "groupName": null,
//           "groupIndex": null,
//           "showField": true
//         }
//       ]
//     }
//   },
//   {
//     "componentType": "CONSENT",
//     "validateSection": true,
//     "className": "consent-text",
//     "sectionContent": {
//       "config": {
//         "options": [
//           {
//             "consentType": "APIFETCH",
//             "consentCode": "DND_CONSENT_PL",
//             "submitConsentCodes": [
//               "DND_CONSENT_PL",
//               "PRIVACY_POLICY_PL"
//             ],
//             "label": null,
//             "className": "check-container",
//             "completed": null
//           }
//         ]
//       },
//       "isShow": true,
//       "showField": true
//     }
//   },
//   {
//     "componentType": "OTP",
//     "sectionContent": {
//       "fields": {
//         "id": 90,
//         "fieldDataType": "OTP",
//         "otpType": "MOBILE",
//         "isMandatory": true,
//         "fieldLabel": "Enter Mobile OTP",
//         "fieldAccessModifier": "EDITABLE",
//         "minLength": 6,
//         "maxLength": 15,
//         "length": 6,
//         "error": null,
//         "value": null,
//         "validationJson": null,
//         "rulesFor": null,
//         "regex": null,
//         "regexErrorMessage": null,
//         "rowNo": null,
//         "columnNo": null,
//         "groupName": null,
//         "groupIndex": null,
//         "placeholderText": "xx x  xxxxx",
//         "fieldName": "accountNo",
//         "labelInfo": "loakjsdnakjd akjdnakdnakjd askdjnadkjnad",
//         "showLabel": true,
//         "showField": true,
//         "OtpMasking": true,
//         "otpDataType": "NUMBER",
//         "otpAttempts": 3,
//         "waitTimeInSeconds": 120,
//         "infoText": "A 6 digit OTP has been sent to the above number"
//       },
//       "options": {
//         "value": null,
//         "notificationType": "COMMON_OTP_TWO",
//         "loanProduct": null,
//         "createBorrower": true,
//         "generateOtp": true
//       },

//       "isShow": false
//     }
//   }
// ]

// let sample_data1 = [
//   {
//     id: '1',
//     value: '',
//     fields: [
//       {
//         id: '11',
//         value: 'kk',
//         fields: [
//           { id: '101', fields: [], value: '' },
//           {
//             id: '102', value: 'kkm', fields: [
//               { id: '1001', fields: [] },
//               { id: '1002', fields: [] }
//             ]
//           },
//           { id: '103', fields: [] },
//           { id: '104', fields: [] }
//         ]
//       },
//       { id: '12', fields: [], value: 'oom', }
//     ]
//   },
//   {
//     id: '2',
//     value: '',
//     sectionContent: {
//       fields: [
//         { id: '21', fields: [] },
//         { id: '22', fields: [] }
//       ]
//     }
//   },
//   {
//     id: '3',
//     value: '',
//     sectionContent: {
//       fields: [
//         {
//           sectionContent: { id: '30', fields: [] },
//           id: '31', fields: [
//             { id: '301', fields: [] },
//             { id: '302', fields: [] }
//           ]
//         },
//         { id: '32', fields: [] }
//       ]
//     }
//   },
//   {
//     id: '4',
//     value: '',
//     sectionContent: {
//       fields: [
//         {
//           id: '41', fields: [
//             {
//               id: '401',
//               sectionContent: {
//                 fields: {
//                   id: '4001',
//                   sectionContent: { id: '90', value: 'ith gavala' },
//                 }
//               }
//             },
//             { id: '402', fields: [] }
//           ]
//         },
//         { id: '42', fields: [] }
//       ]
//     }
//   },//
//   {
//     id: '5',
//     value: '',
//     sectionContent: {
//       fields: [
//         {
//           id: '51', fields: [
//             { id: '501', fields: [] },
//             { id: '502', fields: [] }
//           ]
//         },
//         { id: '52', fields: [] }
//       ]
//     }
//   },

// ]

// /**
//  *  fields: [
//       {
//         id: '31', fields: [
//           { id: '301', fields: [] },
//           { id: '302', fields: [] }
//         ]
//       },
//       { id: '32', fields: [] }
//     ]
//  */