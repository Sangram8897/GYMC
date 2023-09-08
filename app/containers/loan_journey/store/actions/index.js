import { axiosInstance } from "../../../../config/service/axios_instance";
import { axiosInstanceTest } from "../../../../config/service/axios_instance_test";

//MOBILE VERIFY
export const generateOtpUsingPhone = (subject_id) => {
    let api_url = 'api-v3/restApi/generateOtpUsingPhoneForExistingAndNonExistingUser'
    let data = {
        "usernameOrPhoneNumber": "7898989898",
        "notificationType": "COMMON_OTP_TWO",
        "applicationSource": "WEB_JOURNEY"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const validateOtpOfPhone = (subject_id) => {
    let api_url = 'api-v3/restApi/validateOtpOfPhoneAndReturnAccessToken'
    let data = {
        "usernameOrPhoneNumber": "7898989898",
        "otp": "111111",
        "createBorrower": true,
        "productCode": "PTL",
        "applicationSource": "WEB_JOURNEY",
        "loanPurposeUuid": "36d77d01-dfd3-4a4d-90ad-f3572413963d"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const applyLoanApplication = (subject_id) => {
    let api_url = 'api/v1/loanApplication/apply'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "borrowerUuid": "69c3fbf2-9b1b-4690-9156-749df600218b",
        "loanPurposeUuid": "36d77d01-dfd3-4a4d-90ad-f3572413963d",
        "loanAmount": 10000,
        "applicationSource": "WEB_JOURNEY",
        "loanApplicationTextVariable4": "Web Portal",
        "loanApplicationTextVariable21": "Monthly",
        "loanApplicationTextVariable7": "Floating",
        "loanApplicationTextVariable23": "Unsecured",
        "loanApplicationTextVariable13": "Any other Personal Expenses",
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const fetchPanProfileDetails = (subject_id) => {
    let api_url = 'api/v1/perfiosServices/fetchPanProfileDetails'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "applicationSource": "WEB_JOURNEY",
        "requestFor": "BORROWER",
        "identityNumberTwo": "AKFPJ3313G",
        "objectUuid": "69c3fbf2-9b1b-4690-9156-749df600218b",
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const sendAadharOTPToRegisteredMobile = (subject_id) => {
    let api_url = 'api/v1/admin/sendAadharOTPToRegisteredMobile'
    let data = {
        "aadharNumber": "999999999991",
        "requestFor": "BORROWER",
        "isPhysicallyVerified": false,
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const aadharValidationUsingOtpOrBioMetric = (subject_id) => {
    let api_url = 'api/v1/admin/aadharValidationUsingOtpOrBioMetric'
    let data = {
        "aadharNumber": "999999999991",
        "otp": "111111",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "txn": "437531",
        "onboardingVerificationType": "EKYC_OTP_VERIFICATION",
        "requestFor": "BORROWER",
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const personalProfileUpdate = (subject_id) => {
    let api_url = 'api-v3/borrower/personalProfileUpdate'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "identityNumberOne": "999999999991",
        "identityNumberOneVerified": true,
        "identityNumberTwo": "AKFPJ3313G",
        "identityNumberTwoVerified": true
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const createSubStatusActivity = (subject_id) => {
    let api_url = 'api/v1/loanApplication/createSubStatusActivity'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "newSubStatus": "SUB_STATUS_7",
        "subStatusChangeDescription": "CRM Lead Id generation Successfull"
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const dedupeCheck = (subject_id) => {
    let api_url = 'finacle/iso/dedupeCheck'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "aadhaarNumber": "999999999991",
        "panNumber": "AKFPJ3313G",
        "applicantType": "BORROWER",
        "applicationSource": "WEB_JOURNEY",
        "finacleRequest": "PERSONAL_LOAN"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const updateExtraPropertyForBorrowerProfile = (subject_id) => {
    let api_url = 'api/v1/profile/updateExtraPropertyForBorrowerProfile'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "borrowerProfileTextVariable1": "300450906",
        "isExistingUser": true
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const npaCheck = (subject_id) => {
    let api_url = 'finacle/npaCheck'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "custId": "300450906",
        "finacleRequest": "PERSONAL_LOAN",
        "applicationSource": "WEB_JOURNEY"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const fetchPersonalDetails = (subject_id) => {
    let api_url = 'finacle/fetchPersonalDetails'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "requestFor": "BORROWER",
        "finacleRequest": "PERSONAL_LOAN",
        "applicationSource": "WEB_JOURNEY",
        "custId": "300450906"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const nameMatch = (subject_id) => {
    let api_url = 'perfios/name/match'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2",
        "finacleRequest": "PERSONAL_LOAN",
        "applicationSource": "WEB_JOURNEY",
        "preset": "G",
        "type": "Individual",
        "allowPartialMatch": true,
        "name1": "",
        "name2": ""
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const loanDetailsWithoutBorrowerDetails = (subject_id) => {
    let api_url = 'api-v3/loanApplication/loanDetailsWithoutBorrowerDetails'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const borrowerDetail = (subject_id) => {
    let api_url = 'api/v1/borrower/borrowerDetail'
    let data = {
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e",
        "loanUuid": "55dd53f4-62b8-4d0a-ac83-bd57c1f57aa2"
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const consentList = (subject_id) => {
    let api_url = 'api/v2/consent/list?consentCode=BUREAU_CONSENT_PL'
    let data = {
        "consentCode": "BUREAU_CONSENT_PL"
    }
    try {
        const responce = axiosInstance.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const commonPropertySuggest = (subject_id) => {
    let api_url = 'api-v3/config/commonPropertySuggest?propertyType=EDUCATION_TYPE&loanPurposeUuid=36d77d01-dfd3-4a4d-90ad-f3572413963d'
    let data = {
        "propertyType": "EDUCATION_TYPE",
        "loanPurposeUuid": "36d77d01-dfd3-4a4d-90ad-f3572413963d"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};

export const showAllRequiredDocuments = (subject_id) => {
    let api_url = 'api-v3/supportingDocument/showAllRequiredDocuments'
    let data = {
        "loanPurposeUuid": "36d77d01-dfd3-4a4d-90ad-f3572413963d",
        "access_token": "4de5059b-b66c-42b7-8db5-189f0874dd7e"
    }
    try {
        const responce = axiosInstanceTest.post(api_url, data)
        return responce;
    } catch (err) {
        console.log(err)
    }
};