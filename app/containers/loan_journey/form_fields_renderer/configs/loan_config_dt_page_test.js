const MY_DATA = [
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
    "groupIndex": 4,
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
        "fieldName": "line1",
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
        "fieldName": "line2",
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
        "fieldName": "line3",
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
        "fieldName": "subDistrict",
        "labelInfo": null,
        "showLabel": true,
        "rows": 3
      },
      {
        "fieldDataType": "TEXT",
        "isMandatory": true,
        "fieldLabel": "Pincode",
        "commonpropertyType": "PINCODE",
        "fieldAccessModifier": "EDITABLE",
        "minLength": null,
        "maxLength": 999999,
        "error": null,
        "value": null,
        "validationJson": { "fetchPinCodeDetails": "/api/v2/businessPatner/fetchConcessionRateAndCRP" },
        "rulesFor": [
          "state",
          "city"
        ],
        "regex": null,
        "regexErrorMessage": null,
        "rowNo": null,
        "columnNo": null,
        "groupName": null,
        "groupIndex": null,
        "placeholderText": "Enter Pincode",
        "fieldName": "zipCode",
        "labelInfo": null,
        "showLabel": true,
        "showField": true,
        "options": []
      },
      {
        "columnNo": 2,
        "dependentField": "state",
        "fieldDataType": "TEXT",
        "fieldLabel": "City",
        "fieldName": "city",
        "groupName": "Communication Detail",
        "fieldAccessModifier": "READ_ONLY",
        "isMandatory": true,
        "isMasking": false,
        "maxLength": null,
        "minLength": null,
        "regex": null,
        "regexForJS": null,
        "regexErrorMessage": null,
        "rowNo": 4,
        "rulesFor": null,
        "showField": true,
        "sortIndex": 5,
        "validationJson": {
          "copy_Value": { "var": "rawActiveFieldList.zipCode.selectedDetails.city" }
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
        "fieldName": "state",
        "groupName": "Communication Detail",
        "fieldAccessModifier": "READ_ONLY",
        "isMandatory": true,
        "isMasking": false,
        "maxLength": null,
        "minLength": null,
        "regex": null,
        "regexForJS": null,
        "regexErrorMessage": null,
        "rowNo": 4,
        "rulesFor": null,
        "showField": true,
        "sortIndex": 6,
        "validationJson": {
          "copy_Value": { "var": "rawActiveFieldList.zipCode.selectedDetails.state" }
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
        "fieldName": "typeOfAddress",
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
        "isMandatory": true,
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
        "fieldName": "livingSince",
        "labelInfo": null,
        "showLabel": true,
        "showField": true
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
        "documentCategorycode": "IND_PAP",
        "uploadTypeInputfieldName": "addressTwoDocument"
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
        "documentCategorycode": "IND_PAP",
        "uploadTypeInputfieldName": "addressTwoDocument"
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
                      null
                    ]
                  }
                ]
              },
              {
                "and": [
                  {
                    "!=": [
                      {
                        "var": "scope.addressTwoDocumentType.optionSelected.alias"
                      },
                      null
                    ]
                  },
                  {
                    "!=": [
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
    "fieldDataType": "RADIO",
    "isMandatory": true,
    "fieldLabel": "Gender",
    "fieldAccessModifier": "EDITABLE",
    "minLength": null,
    "maxLength": null,
    "error": null,
    "value": null,
    "validationJson": null,
    "rulesFor": null,
    "regex": null,
    "options": [
      {
        "optionCode": "MALE",
        "optionKey": "Male",
        "optionName": "Male",
        "icon": "male",
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": "Male",
        "sortIndex": 0
      },
      {
        "optionCode": "FEMALE",
        "optionKey": "Female",
        "optionName": "Female",
        "icon": "female",
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": "Female",
        "sortIndex": 0
      },
      {
        "optionCode": "TRANSGENDER",
        "optionKey": "Transgender",
        "optionName": "Transgender",
        "icon": "trans",
        "optionParentCode": null,
        "optionParentProperty": null,
        "optionValue": "Transgender",
        "sortIndex": 0
      }
    ],
    "regexErrorMessage": null,
    "rowNo": null,
    "columnNo": null,
    "groupName": "",
    "groupIndex": 1,
    "placeholderText": "Applicant Education Qualification",
    "fieldName": "gender",
    "labelInfo": null,
    "showLabel": true,
    "showField": true
  },
  {
    "componentType": "FORM",
    "className": "medium ml-20 mobile-medium mobile-product-margin",
    "validateSection": true,
    "sectionContent": {
      "options": {
        "columnSize": 1,
        "journeyEventCode": "PRODUCT_SELECTION"
      },
      "isShow": true,
      "fields": [
        {
          "fieldDataType": "BOOLEAN",
          "fieldLabel": "Transactional alerts",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": {
            "default": true
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "enableSmsAlerts",
          "showLabel": false,
          "groupName": "I Choose",
          "groupIndex": 1,
          "isMandatory": false
        },
        {
          "fieldDataType": "BOOLEAN",
          "fieldLabel": "E-Statement",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": {
            "default": true
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "enableEStatement",
          "showLabel": false,
          "groupName": "I Choose",
          "groupIndex": 1,
          "isMandatory": false
        },
        {
          "fieldDataType": "BOOLEAN",
          "fieldLabel": "Internet Banking",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": {
            "default": true
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "enableInternetBanking",
          "showLabel": false,
          "groupName": "I Choose",
          "groupIndex": 1,
          "isMandatory": false
        },
        {
          "fieldDataType": "BOOLEAN",
          "fieldLabel": "Mobile Banking",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": {
            "default": true
          },
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "enablePhoneBanking",
          "showLabel": false,
          "groupName": "I Choose",
          "groupIndex": 1,
          "isMandatory": false
        },
        {
          "fieldDataType": "BOOLEAN",
          "fieldLabel": "Check Book",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "issueChequeBook",
          "showLabel": false,
          "groupName": "I Choose",
          "groupIndex": 1,
          "isMandatory": false
        },
        {
          "fieldDataType": "TEXT",
          "isMandatory": true,
          "fieldLabel": "Enter Name on Your Debit Card",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": "",
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": null,
          "columnNo": null,
          "placeholderText": "",
          "fieldName": "typeOfDebitCard",
          "showLabel": true,
          "groupName": "Enter Name on Your Debit Card",
          "groupIndex": 1
        }
      ]
    }
  },
  {
    "componentType": "TITLE",
    "classname": "mb-10",
    "validateSection": false,
    "sectionContent": {
      "titleData": "Applicant Details",
      "isShow": true
    }
  },
  {
    "componentType": "PARAGRAPH",
    "className": "text-info col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 w-70",
    "validateSection": false,
    "sectionContent": {
      "paragraphData": "Please, * fill the mandatory details",
      "isShow": true
    }
  },
  {
    "componentType": "FORM",
    "className": "mb-10",
    "validateSection": true,
    "mandatory": true,
    "sectionContent": {
      "options": {
        "columnSize": 2,
        "mapSupplyData": true
      },
      "isShow": true,
      "fields": [
        {
          "verificationType": "PAN_V2",
          "fieldDataType": "PAN_CARD",
          "isMandatory": true,
          "fieldLabel": "PAN",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 12,
          "error": null,
          "value": null,
          "validationJson": null,
          "className": "w-50 mob-w-100",
          "rulesFor": null,
          "regex": "^[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$",
          "regexErrorMessage": "Entered Pan Number is Invalid",
          "rowNo": 1,
          "columnNo": 1,
          "placeholderText": "Enter Valid Email ID",
          "fieldName": "identityNumberTwo",
          "labelInfo": null,
          "showLabel": true,
          "groupName": null,
          "groupIndex": 1,
          "showField": true,
          "journeyEventCode": "PAN_VERIFY"
        },
        {
          "verificationType": "AADHAR",
          "fieldDataType": "AADHAR",
          "isMandatory": true,
          "fieldLabel": "KYC Aadhaar Verification",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 12,
          "maxLength": null,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": 1,
          "columnNo": 2,
          "placeholderText": "xx x  xxxxx",
          "fieldName": "identityNumberOne",
          "labelInfo": null,
          "showLabel": true,
          "Masking": true,
          "groupName": null,
          "groupIndex": 1,
          "showField": true,
          "verificationFieldName": "aadharOtp",
          "journeyEventCode": "AADHAR_VERIFY",
          "verificationSuccessMessage": "KYC Aadhar Verification Successfull!!",
          "externalValidate": true,
          "externalVerificationTrigger": true
        },
        {
          "fieldDataType": "SECTION",
          "isMandatory": false,
          "fieldLabel": "",
          "fieldAccessModifier": "EDITABLE",
          "minLength": 6,
          "maxLength": 15,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": 1,
          "columnNo": 2,
          "placeholderText": "xx x  xxxxx",
          "fieldName": "filler",
          "labelInfo": null,
          "showLabel": false,
          "Masking": true,
          "groupName": null,
          "groupIndex": 2,
          "showField": true
        },
        {
          "fieldDataType": "OTP",
          "otpType": "AADHAR",
          "isMandatory": true,
          "fieldLabel": "Enter Aadhaar OTP",
          "fieldAccessModifier": "EDITABLE",
          "className": "w-50 mob-w-100",
          "minLength": 6,
          "maxLength": 15,
          "length": 6,
          "error": null,
          "value": null,
          "validationJson": null,
          "rulesFor": null,
          "regex": null,
          "regexErrorMessage": null,
          "rowNo": 1,
          "columnNo": 2,
          "groupName": null,
          "groupIndex": 2,
          "placeholderText": "xx x  xxxxx",
          "fieldName": "aadharOtp",
          "labelInfo": null,
          "showLabel": false,
          "showField": false,
          "OtpMasking": true,
          "otpDataType": "NUMBER",
          "otpAttempts": 3,
          "excludeToFormValue": true,
          "waitTimeInSeconds": 120,
          "options": {
            "value": null,
            "notificationType": "COMMON_OTP_TWO",
            "loanProduct": null,
            "createBorrower": true,
            "generateOtp": true,
            "className": "w-100",
            "requestFor": "BORROWER",
            "extraParams": {
              "isPhysicallyVerified": false
            }
          }
        }
      ]
    }
  },
  {
    "componentType": "CONSENT",
    "validateSection": true,
    "className": "consent-text mb-20",
    "mandatory": true,
    "sectionContent": {
      "config": {
        "options": [
          {
            "consentType": "STATIC",
            "consentCode": null,
            "submitConsentCodes": [
              "AADHAR_CONSENT_PL"
            ],
            "label": " Click here to agree",
            "isMultiLabel": false,
            "completed": null,
            "endLinks": [
              {
                "label": "Aadhaar consent.",
                "height": "70%",
                "width": "70%",
                "linkType": "POPUP",
                "consentCode": "AADHAR_CONSENT_PL",
                "popupContent": []
              }
            ]
          }
        ]
      },
      "isShow": true,
      "showField": true
    }
  }
]

export default MY_DATA;