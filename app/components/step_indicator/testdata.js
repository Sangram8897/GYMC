const MyData = [
    {
        "name": "Basic Information",
        "info": "10MinVerifyYou",
        "isActive": false,
        "isCompleted": true,
        "pageCode": "MOBILE_VERIFY"
    },
    {
        "name": "Application details,Documents",
        "info": "10MinVerifyYou",
        "isActive": true,
        "isCompleted": false,
        "subStep": [
            {
                "id": "001",
                "pageCode": "MORE_INFO",
                "isActive": false,
                "name": "More Information",
                "isCompleted": true
            },
            {
                "id": "002",
                "pageCode": "PERSONAL_DETAILS",
                "isActive": false,
                "name": "Personal Information",
                "isCompleted": true
            },
            {
                "id": "003",
                "pageCode": "EMPLOYMENT_DETAILS",
                "isActive": true,
                "name": "Account Number",
                "isCompleted": false
            },
            {
                "id": "004",
                "pageCode": "DOCUMENT_UPLOAD_PTLEX",
                "isActive": false,
                "name": "Account Number",
                "isCompleted": false
            }
        ]
    },
    {
        "name": "Sanction details, E-sign",
        "info": "10MinVerifyYou",
        "isActive": false,
        "isCompleted": false,
        "pageCode": "SANCTION",
        "subStep": [
            {
                "id": "001",
                "pageCode": "SANCTION_DETAILS",
                "isActive": false,
                "name": "Sanction Details",
                "isCompleted": false
            },
            {
                "id": "002",
                "pageCode": "KEY_FACT_DETAILS",
                "isActive": false,
                "name": "Key Fact  Information",
                "isCompleted": false
            },
            {
                "id": "003",
                "pageCode": "LOAN_SUMMARY",
                "isActive": false,
                "name": "Account Number",
                "isCompleted": false
            }
        ]
    }
]
  export default MyData;