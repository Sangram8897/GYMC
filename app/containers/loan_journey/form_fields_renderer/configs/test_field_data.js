const pageSectionConfig = {
    "individual": {
        "MOBILE_VERIFY": [
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
        ],
        "MORE_INFO": [
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
        ],
        "ADDITIONAL_INFORMATION": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "validationJson": {
                    "content": {
                        "cat": [
                            "Hello, ",
                            {
                                "var": "$scope.borrowerDetails.borrowerDetail.fullNameWithTitle"
                            },
                            "!"
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
                "className": "text-info mt-20"
            },
            {
                "componentType": "TITLE",
                "validateSection": false,
                "sectionContent": {
                    "titleData": "Personal Details",
                    "isShow": true
                },
                "className": "f-15 mt-3"
            },
            {
                "componentType": "PARAGRAPH",
                "validateSection": false,
                "sectionContent": {
                    "paragraphData": "Pre-filled from UIDAI Aadhar Database",
                    "isShow": true
                },
                "className": "text-info mt-3 mb-20"
            },
            {
                "componentType": "FORM",
                "validateSection": true,
                "sectionContent": {
                    "isShow": true,
                    "options": {
                        "columnSize": 3,
                        "mapSupplyData": true,
                        "mapAndDisable": true,
                        "autoVerifyMappedFields": true
                    },
                    "fields": [
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "First Name",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 100,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter First Name",
                            "fieldName": "firstName",
                            "labelInfo": null,
                            "showLabel": true,
                            "groupName": "",
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Middle Name",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 100,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Middle Name",
                            "fieldName": "middleName",
                            "labelInfo": null,
                            "showLabel": true,
                            "groupName": "",
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Last Name",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 100,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "placeholderText": "Enter Last Name",
                            "fieldName": "lastName",
                            "labelInfo": null,
                            "showLabel": true,
                            "groupName": "",
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DATE",
                            "isMandatory": true,
                            "fieldLabel": "Date of Birth",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
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
                            "placeholderText": "Enter Date of Birth",
                            "fieldName": "dateOfBirth",
                            "labelInfo": null,
                            "showLabel": true,
                            "groupName": "",
                            "groupIndex": 1,
                            "showField": true
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
                            "journeyEventCode": "EMAIL_PASS"
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
                            "groupIndex": 1,
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
                            "groupIndex": 1,
                            "placeholderText": "Applicant Marital Status",
                            "fieldName": "maritalStatus",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        },
                        {
                            "fieldDataType": "SECTION",
                            "isMandatory": true,
                            "fieldLabel": "Permanent Address (as Per aadhar Card)",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": 1,
                            "columnNo": 2,
                            "placeholderText": "Enter Address Line2",
                            "fieldName": "personalAddress",
                            "labelInfo": null,
                            "showLabel": false,
                            "rows": 3,
                            "groupIndex": 3,
                            "groupName": "Permanent Address (as Per aadhar Card)"
                        },
                        {
                            "fieldDataType": "BOOLEAN",
                            "fieldLabel": "Use a different communication address for this Loan",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": "",
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
                            "value": "asdsfdsfsd",
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
                                    "fieldDataType": "DROPDOWN",
                                    "isMandatory": true,
                                    "fieldLabel": "Pincode",
                                    "commonpropertyType": "PINCODE",
                                    "fieldAccessModifier": "EDITABLE",
                                    "minLength": null,
                                    "maxLength": 999999,
                                    "error": null,
                                    "value": null,
                                    "validationJson": null,
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
                                    "showField": true
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
                                        "calculation": {
                                            "findPinMasterObject": [
                                                "PINBRANCH",
                                                "pincode",
                                                {
                                                    "var": "zipCode"
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
                                        "calculation": {
                                            "findPinMasterObject": [
                                                "PINBRANCH",
                                                "pincode",
                                                {
                                                    "var": "zipCode"
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
                                    "dependentField": null,
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
                                    "documentData": {
                                        "documentCategoryCode": "IND_PAP"
                                    },
                                    "validationJson": null,
                                    "value": null,
                                    "visibleInAdminSection": true,
                                    "visibleInBorrowerSection": true,
                                    "visibleInDsaSection": true,
                                    "placeholderText": "Address Type",
                                    "visibleInInvestorSection": false,
                                    "showLabel": true
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "PERSONAL_DETAILS": [
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
                            "value": "asdsfdsfsd",
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
                                    "fieldName": "addressOneLivingSince",
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
                                    "uploadTypeInputfieldName": "addressTwoDocument",
                                    "documentCategorycode": "IND_PAP"
                                },
                                {
                                    "columnNo": 2,
                                    "dependentField": null,
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
                                    "documentData": {
                                        "documentCategoryCode": "IND_PAP"
                                    },
                                    "validationJson": null,
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
                            "groupIndex": 7
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
        ],
        "BRANCH_DETAILS": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "className": "common-title mb-10",
                "sectionContent": {
                    "titleData": "Please Select the branch",
                    "isShow": true
                }
            },
            {
                "componentType": "PARAGRAPH",
                "validateSection": false,
                "className": "common-info mb-10",
                "sectionContent": {
                    "paragraphData": "Select a branch where you want your loan Application to be Processed",
                    "isShow": true
                }
            },
            {
                "componentType": "FORM",
                "validateSection": true,
                "className": "mb-10",
                "sectionContent": {
                    "isShow": true,
                    "options": {
                        "columnSize": 3,
                        "sendOptionKeyForDropDowns": true
                    },
                    "fields": [
                        {
                            "fieldDataType": "AUTO_COMPLETE",
                            "dependentField": null,
                            "isMandatory": true,
                            "commonpropertyType": "HOME_BRANCH_STATE",
                            "fieldLabel": "Home Branch State",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": null,
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
                            "groupName": "Choose your branch",
                            "groupIndex": 2,
                            "showField": true
                        },
                        {
                            "fieldDataType": "AUTO_COMPLETE",
                            "dependentField": "homeBranchState",
                            "commonpropertyType": "HOME_BRANCH_DISTRICT",
                            "isMandatory": true,
                            "fieldLabel": "Home Branch District",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": null,
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
                            "groupName": "Choose your branch",
                            "groupIndex": 2,
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
                            "validationJson": null,
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
                            "groupName": "Choose your branch",
                            "groupIndex": 2,
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
                            "validationJson": null,
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
                            "groupName": "Choose your branch",
                            "groupIndex": 2,
                            "showField": true
                        },
                        {
                            "fieldDataType": "TEXT_AREA",
                            "isMandatory": false,
                            "fieldLabel": "Branch Address",
                            "fieldAccessModifier": "READ_ONLY",
                            "minLength": 6,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "calculation": {
                                    "findMasterObject": [
                                        "BRANCH",
                                        "branchCode",
                                        {
                                            "var": "branchCode"
                                        },
                                        "address"
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
                            "groupName": "Choose your branch",
                            "groupIndex": 2,
                            "showLabel": true,
                            "rows": 3
                        }
                    ]
                }
            }
        ],
        "EMPLOYMENT_DETAILS": [
            {
                "componentType": "TITLE",
                "mandatory": false,
                "validateSection": false,
                "className": "mb-10",
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Employment Details"
                }
            },
            {
                "componentType": "PARAGRAPH",
                "mandatory": false,
                "validateSection": false,
                "className": "text-info mb-20",
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Please Share Your Details About Your Current Employment"
                }
            },
            {
                "componentType": "FORM",
                "validateSection": true,
                "mandatory": false,
                "className": "mb-10 x-large coapplicant-padding",
                "sectionContent": {
                    "options": {
                        "mapSupplyData": true,
                        "sendOptionKeyForDropDowns": true,
                        "columnSize": 3
                    },
                    "isShow": true,
                    "fields": [
                        {
                            "fieldDataType": "DROPDOWN",
                            "isMandatory": true,
                            "commonpropertyType": "BORROWER_EMPLOYMENT_TYPE",
                            "fieldLabel": "Employment Type",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": null,
                            "rulesFor": [
                                "textVariable6",
                                "borrowerEmploymentHistoryTextVariable11",
                                "borrowerEmploymentHistoryTextVariable15",
                                "emailId",
                                "borrowerEmploymentHistoryTextVariable4",
                                "officialEmailId",
                                "employedSince",
                                "textVariable35",
                                "textVariable36",
                                "textVariable5",
                                "textVariable3",
                                "dateVariable2",
                                "dateVariable1",
                                "textVariable11",
                                "emiPaid",
                                "borrowerEmploymentHistoryTextVariable24",
                                "numberVariable3",
                                "organizationName",
                                "buisnessEmail"
                            ],
                            "regex": null,
                            "options": [],
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Employment Type",
                            "fieldName": "borrowerEmploymentType",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DROPDOWN",
                            "isMandatory": true,
                            "fieldLabel": "Organisation Type",
                            "commonpropertyType": "BORROWER_EMPLOYMENT_VARIABLE11",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 6,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SALARIED"
                                            ]
                                        }
                                    ]
                                }
                            },
                            "regex": null,
                            "options": [],
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "Organisation Type",
                            "fieldName": "borrowerEmploymentHistoryTextVariable11",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DROPDOWN",
                            "isMandatory": true,
                            "commonpropertyType": "BORROWER_EMPLOYMENT_VARIABLE15",
                            "fieldLabel": "Profession",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SALARIED"
                                            ]
                                        }
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
                            "placeholderText": "Profession",
                            "fieldName": "borrowerEmploymentHistoryTextVariable15",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DATE",
                            "isMandatory": true,
                            "commonpropertyType": "BORROWER_EMPLOYMENT_VARIABLE15",
                            "fieldLabel": "Date of joining",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SALARIED"
                                            ]
                                        }
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
                            "placeholderText": "Profession",
                            "fieldName": "borrowerEmploymentHistoryTextVariable15",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": false,
                            "fieldLabel": "Office Email ID",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SALARIED"
                                            ]
                                        }
                                    ]
                                }
                            },
                            "rulesFor": null,
                            "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": 1,
                            "columnNo": 1,
                            "placeholderText": "Enter your Email ID",
                            "fieldName": "officialEmailId",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true,
                            "verificationType": "EMAIL",
                            "verificationFieldName": "emailOtp",
                            "journeyEventCode": "ORGANISATION_VERIFY"
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
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
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
                                "className": "w-100",
                                "extraValidateParams": {
                                    "saveEmail": false
                                }
                            }
                        },
                        {
                            "fieldDataType": "TEXT",
                            "dependentField": null,
                            "isMandatory": true,
                            "commonpropertyType": "",
                            "fieldLabel": "Employer Name",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": "",
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SALARIED"
                                            ]
                                        }
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
                            "placeholderText": "",
                            "fieldName": "organizationName",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true,
                            "autoSuggest": true,
                            "autosuggestCode": "employerSearch",
                            "autoSuggestSelectDisable": false
                        },
                        {
                            "fieldDataType": "NUMBER",
                            "isMandatory": true,
                            "fieldLabel": "Total Monthly Deductions",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 999999,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "and": [
                                                {
                                                    "!=": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        null
                                                    ]
                                                },
                                                {
                                                    "==": [
                                                        {
                                                            "var": "borrowerEmploymentType"
                                                        },
                                                        "SALARIED"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            },
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "placeholderText": "",
                            "fieldName": "borrowerEmploymentHistoryTextVariable24",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DROPDOWN",
                            "isMandatory": true,
                            "commonpropertyType": "BORROWER_SELF_EMPLOYMENT_TEXT_VARIABLE11",
                            "fieldLabel": "Professionals and Self employed persons",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
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
                            "placeholderText": "Professionals and Self employed persons",
                            "fieldName": "textVariable11",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true
                        },
                        {
                            "verificationType": "UDYAM",
                            "fieldDataType": "TEXT",
                            "dependentField": null,
                            "isMandatory": false,
                            "commonpropertyType": "",
                            "fieldLabel": "Udyam Number",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 19,
                            "maxLength": 19,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
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
                            "placeholderText": "UDYAM-XX-XX-XXXXXXX",
                            "fieldName": "textVariable3",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true,
                            "upperCase": true
                        },
                        {
                            "verificationType": "GST",
                            "fieldDataType": "DROPDOWN",
                            "autoSuggest": true,
                            "dependentField": null,
                            "isMandatory": true,
                            "commonpropertyType": "GST_SEARCH",
                            "autosuggestCode": "GST_SEARCH",
                            "fieldLabel": "GST Number",
                            "upperCase": true,
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 15,
                            "maxLength": 15,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
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
                            "placeholderText": "",
                            "fieldName": "textVariable5",
                            "showLabel": true,
                            "labelInfo": "kindly provide the GST Number of business for verification",
                            "groupName": null,
                            "groupIndex": 1,
                            "showField": true,
                            "verifyDisable": false
                        },
                        {
                            "fieldDataType": "TEXT",
                            "dependentField": null,
                            "isMandatory": true,
                            "autoSuggest": true,
                            "commonpropertyType": "",
                            "fieldLabel": "Business Name",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": 3,
                            "maxLength": 20,
                            "error": null,
                            "value": "",
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
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
                            "placeholderText": "",
                            "fieldName": "textVariable6",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 2,
                            "showField": true
                        },
                        {
                            "fieldDataType": "DATE",
                            "dependentField": null,
                            "isMandatory": false,
                            "commonpropertyType": "",
                            "fieldLabel": "Business Started On",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 0,
                            "error": null,
                            "value": null,
                            "minDate": null,
                            "maxDate": "new Date()",
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
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
                            "placeholderText": "",
                            "fieldName": "dateVariable2",
                            "showLabel": true,
                            "labelInfo": null,
                            "groupName": null,
                            "groupIndex": 2,
                            "showField": true
                        },
                        {
                            "fieldDataType": "TEXT",
                            "isMandatory": true,
                            "fieldLabel": "Buisness Email ID",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": null,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
                                    ]
                                }
                            },
                            "rulesFor": null,
                            "regex": "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
                            "countryCode": "+91",
                            "regexErrorMessage": null,
                            "rowNo": 1,
                            "columnNo": 1,
                            "placeholderText": "Enter your Email ID",
                            "fieldName": "buisnessEmail",
                            "showLabel": true,
                            "groupName": null,
                            "groupIndex": 2,
                            "showField": true
                        },
                        {
                            "fieldDataType": "NUMBER",
                            "isMandatory": true,
                            "fieldLabel": "Total Annual Deductions",
                            "fieldAccessModifier": "EDITABLE",
                            "minLength": null,
                            "maxLength": 999999,
                            "error": null,
                            "value": null,
                            "validationJson": {
                                "showField": {
                                    "if": [
                                        {
                                            "==": [
                                                {
                                                    "var": "borrowerEmploymentType"
                                                },
                                                "SELF_EMPLOYED"
                                            ]
                                        }
                                    ]
                                }
                            },
                            "rulesFor": null,
                            "regex": null,
                            "regexErrorMessage": null,
                            "rowNo": null,
                            "columnNo": null,
                            "groupName": null,
                            "groupIndex": 2,
                            "placeholderText": "",
                            "fieldName": "numberVariable3",
                            "labelInfo": null,
                            "showLabel": true,
                            "showField": true
                        }
                    ]
                }
            }
        ],
        "CONTACT_BRANCH": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "validationJson": {
                    "content": {
                        "cat": [
                            "Dear, ",
                            {
                                "or": [
                                    {
                                        "var": "$scope.loanDetails.loanDetails.borrowerDisplayName"
                                    },
                                    "Applicant"
                                ]
                            }
                        ]
                    }
                },
                "className": " mb-0 mt-5 d-flex align-items-center",
                "sectionContent": {
                    "titleData": "Dear,",
                    "isShow": true,
                    "endContent": [
                        {
                            "componentType": "ICON",
                            "className": "ml-10",
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": "/assets/icons/sad.png"
                            }
                        }
                    ]
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "text-info mt-3 f-17",
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "We have received your Personal Loan application and\n                    look forward to seeing you at the bank soon to complete the process. Please visit nearest BOI bank branch for further assistance\n                    Having trouble? Get help"
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "form-label-lg mt-4",
                "validationJson": {
                    "content": {
                        "cat": [
                            "Your Lead Reference ID #",
                            {
                                "or": [
                                    {
                                        "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                    },
                                    {
                                        "var": "$scope.loanDetails.loanDetails.loanId"
                                    }
                                ]
                            }
                        ]
                    },
                    "showSection": {
                        "if": [
                            {
                                "==": [
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    },
                                    null
                                ]
                            },
                            false,
                            true
                        ]
                    }
                },
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Your Lead Reference ID #"
                }
            }
        ],
        "PRODUCT_ERROR": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "validationJson": {
                    "content": {
                        "cat": [
                            "Dear, ",
                            {
                                "or": [
                                    {
                                        "var": "$scope.loanDetails.loanDetails.borrowerDisplayName"
                                    },
                                    "Applicant"
                                ]
                            }
                        ]
                    }
                },
                "className": " mb-0 mt-5 d-flex align-items-center",
                "sectionContent": {
                    "titleData": "Dear,",
                    "isShow": true,
                    "endContent": [
                        {
                            "componentType": "ICON",
                            "className": "ml-10",
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": "/assets/icons/sad.png"
                            }
                        }
                    ]
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "text-info mt-3 f-17",
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Sorry! We are unable to process your application. We apologize for the Inconvenience. Please visit nearest BOI bank branch for further assistance\n                Having trouble? Get help"
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "form-label-lg mt-4",
                "validateSection": false,
                "validationJson": {
                    "content": {
                        "cat": [
                            "Your Lead Reference ID # ",
                            {
                                "or": [
                                    {
                                        "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                    },
                                    {
                                        "var": "$scope.loanDetails.loanDetails.loanId"
                                    }
                                ]
                            }
                        ]
                    },
                    "showSection": {
                        "if": [
                            {
                                "==": [
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    },
                                    null
                                ]
                            },
                            false,
                            true
                        ]
                    }
                },
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Your Lead Reference ID #"
                }
            }
        ],
        "DOCUMENT_UPLOAD_V2": [
            {
                "componentType": "TITLE",
                "className": "mb-10",
                "mandatory": false,
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Supporting Documents"
                }
            },
            {
                "componentType": "PARAGRAPH",
                "mandatory": false,
                "validateSection": false,
                "className": "mb-10 common-info",
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Please share document online or upload .pdf files less than 5 Mb each. All documents are mandatory."
                }
            }
        ],
        "SANCTION_DETAILS": [
            {
                "componentType": "TITLE",
                "className": "mb-10",
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Sanction Details"
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "f-16 clr-lt-grey col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-20 common-info",
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Please Customise Your Loan Details to Suit your Best Needs"
                }
            }
        ],
        "ESIGN": [
            {
                "componentType": "TITLE",
                "className": "mb-10",
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Esign Details"
                }
            }
        ],
        "KEY_FACT_DETAILS": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "parentclassName": "display-flex j-c-sb a-i-c",
                "className": "common-title download-ref-key-fact",
                "sectionContent": {
                    "titleData": "Key Fact Statement",
                    "isShow": true
                }
            },
            {
                "componentType": "PARAGRAPH",
                "validateSection": false,
                "className": "common-info mb-20",
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Please, Read and Declare before Submitting"
                }
            },
            {
                "componentType": "TITLE",
                "validateSection": false,
                "className": "f-15 common-title",
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Applicant Details"
                }
            }
        ],
        "STATUS_CHECK": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "className": "common-title",
                "sectionContent": {
                    "titleData": "Please Wait For Few Minutes we are setting up something",
                    "isShow": true
                }
            },
            {
                "componentType": "PARAGRAPH",
                "validateSection": false,
                "className": "common-info",
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Note: Please Dont Refresh The page, Page Will automatically Redirect"
                }
            }
        ],
        "LOAN_SUMMARY": [
            {
                "componentType": "TITLE",
                "validateSection": false,
                "className": "mt-5 d-flex align-items-center congradulation-text mb-20",
                "validationJson": {
                    "content": {
                        "cat": [
                            "Congratulations, ",
                            {
                                "var": "$scope.borrowerDetails.borrowerDetail.fullName"
                            }
                        ]
                    }
                },
                "sectionContent": {
                    "titleData": "Congratulations,",
                    "isShow": true,
                    "endContent": [
                        {
                            "componentType": "ICON",
                            "className": "ml-10",
                            "sectionContent": {
                                "isShow": true,
                                "iconPath": "/assets/icons/gift.png"
                            }
                        }
                    ]
                }
            },
            {
                "componentType": "HTML_CONTENT",
                "className": "common-info display-flex a-i-c",
                "validationJson": {
                    "content": {
                        "cat": [
                            "Your loan has been successfully processed for an amount of <div class='redirectAction ml-5'>₹ ",
                            {
                                "var": "$scope.loanDetails.loanDetails.loanAmount"
                            },
                            "&nbsp;</div>  "
                        ]
                    }
                },
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "htmlData": "Your loan has been successfully processed for an amount of <div class='redirectAction ml-5'>₹ "
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "common-info mt-5",
                "validateSection": false,
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Full Amount Would Be Deposited To Your Account to next 3-5 working days Visit The branch For Further Details."
                }
            },
            {
                "componentType": "PARAGRAPH",
                "className": "form-label-lg mt-4",
                "validateSection": false,
                "validationJson": {
                    "content": {
                        "cat": [
                            "Your Application Reference  # ",
                            {
                                "or": [
                                    {
                                        "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                    },
                                    {
                                        "var": "$scope.loanDetails.loanDetails.loanId"
                                    }
                                ]
                            }
                        ]
                    },
                    "showSection": {
                        "if": [
                            {
                                "==": [
                                    {
                                        "or": [
                                            {
                                                "var": "$scope.loanDetails.loanDetails.crmLeadId"
                                            },
                                            {
                                                "var": "$scope.loanDetails.loanDetails.loanId"
                                            }
                                        ]
                                    },
                                    null
                                ]
                            },
                            false,
                            true
                        ]
                    }
                },
                "sectionContent": {
                    "isShow": true,
                    "paragraphData": "Your Application Reference #"
                }
            }
        ]
    }
}