const MY_DATA = [
    {
        "componentType": "CONTAINER",
        "mandatory": false,
        "validateSection": false,
        "className": "mb-10",
        "fields": [
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
                "componentType": "TITLE",
                "mandatory": false,
                "validateSection": false,
                "className": "mb-10",
                "sectionContent": {
                    "isShow": true,
                    "titleData": "Employment Details"
                }
            },
        ]
    },
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
            "paragraphData": `As designers, we are frequently and incorrectly reminded that our job is to “make things pretty.” We are indeed designers — not artists — and there is no place for formalism in good design. Web design has a function, and that function is to communicate the message for which the Web page was conceived. The medium is not the message. Never is this principle more pertinent than when dealing with type, the bread and butter of Web-borne communication. A well-set paragraph of text is not supposed to wow the reader; the wowing should be left to the idea or observation for which the paragraph is a vehicle. In fact, the perfect paragraph is unassuming to the point of near invisibility. That is not to say that the appearance of your text should have no appeal at all. On the contrary: well-balanced, comfortably read typography is a thing of beauty; it’s just not the arresting sort of beauty that might distract you from reading.`
        }
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
        "journeyEventCode": "EMAIL_PASS",
        "verifyDisable": true
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
        "journeyEventCode": "EMAIL_PASS",
        "verifyDisable": true
    },
    {
        "fieldDataType": "MULTI_INPUT",
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
]

export default MY_DATA;