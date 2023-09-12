import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { PageFormContext } from '../context/page_form';
import {
    Input, Dropdown, Title, Paragraph, CusDatePicker, RadioButtonRN,
    OTPComp, MultiInputField, FieldStateNotifier, Consent, OrderedList,
    Popup, StaticConsent, ApiFetchConsent, OtpPopup, Cus_Switch, RadioButton,
    VerifyInput, DocumentInput
} from '../../../components/index';

const RenderFields = ({ data, index_history }) => {
    const { page_form_state, inputChangeHandler, onVerifyHandler, setActiveOTP } = useContext(PageFormContext);

    const renderComponents = () => {
        switch (data?.fieldDataType) {
            case 'TEXT':
                return <>
                    <Input
                        id='short_desc'
                        data={data}
                        label={data?.fieldLabel}
                        index_history={index_history}
                        //  regex={data?.regex}
                        errorText='Wrong Password'
                        placeHolder={data?.placeholderText || data?.labelInfo
                        }
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onInputChange={inputChangeHandler}
                        onVerify={() => {
                            if (data?.verificationFieldName)
                                setActiveOTP(data?.verificationFieldName)
                        }}
                        setActiveOTP={setActiveOTP}
                    //required
                    />
                </>
            case 'MOBILE_NO':
                return <>
                    <Input
                        id='short_desc'
                        data={data}
                        label={data?.fieldLabel}
                        index_history={index_history}
                        maxLength={10}
                        keyboardType={'number-pad'}
                        errorText='Wrong Password'
                        placeHolder={data?.placeHolder}
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onInputChange={inputChangeHandler}
                        onVerify={() => {
                            if (data?.verificationFieldName)
                                setActiveOTP(data?.verificationFieldName)
                        }}
                        required

                    />
                </>
        case 'PAN_CARD':
            return <>
                <DocumentInput
                    data={data}
                    fieldLabel={data?.fieldLabel}
                    index_history={index_history}
                    onInputChange={inputChangeHandler}
                    fieldDataType={'PAN_CARD'}
                    value={'FYJPP4545D'}
                    onPress={(code) => {
                        // setModalVisible(onboardingVerificationType, code, fieldName)
                    }}
                    disabled={false}
                />
            </>
        case 'AADHAR':
            return <>
                <DocumentInput
                    data={data}
                    fieldLabel={data?.fieldLabel}
                    index_history={index_history}
                    onInputChange={inputChangeHandler}
                    fieldDataType={'AADHAR'}
                    value={''}
                    onPress={(code) => {
                        // setModalVisible(onboardingVerificationType, code, fieldName)
                    }}
                    disabled={false}
                    onVerify={() => {
                        if (data?.verificationFieldName)
                            setActiveOTP(data?.verificationFieldName)
                    }}
                    setActiveOTP={setActiveOTP}
                />
            </>

            case 'OTP':
                data = data?.sectionContent?.fields ? data?.sectionContent?.fields : data

                return <>
                    {(page_form_state?.active_otp && page_form_state?.active_otp == data?.fieldName) &&
                        <OtpPopup
                            popup_state={(page_form_state?.active_otp == data?.fieldName) ? true : false}
                            index_history={index_history}
                            data={data}
                            onCancel={() => { setActiveOTP(null) }}
                            setActiveOTP={setActiveOTP}
                            onVerify={(value) => onVerifyHandler(data.fieldName, 'value', value, index_history, data?.submitPageOnVerify)}
                        // onValidate={}
                        />
                    }

                </>

            case 'DROPDOWN':
                return <>
                    <Dropdown
                        id='short_desc'
                        data={data}
                        title={data?.fieldLabel}
                        submitButtonText={'Submit'}
                        cancelButtonText={'Cancel'}
                        closeOnItemSelection={true}
                        onChange={(value) => inputChangeHandler('dropdown', value, index_history)}
                        index_history={index_history}
                        errorText='Wrong Password'
                        placeHolder={data?.placeHolder}
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onInputChange={inputChangeHandler}
                        required
                    />
                </>

            case 'BOOLEAN':
                return <>
                    <Cus_Switch
                        label={data?.fieldLabel}
                        value={data?.value}
                        onSwitch={(value) => inputChangeHandler('dropdown', value, index_history)}
                    />
                </>

            case 'RADIO':
                return <>
                    <RadioButton
                        options={data?.options}
                        label={data?.fieldLabel}
                        value={data?.value}
                        onChange={(value) => inputChangeHandler('dropdown', value, index_history)}
                    />
                </>

            case 'DATE':
                return <>
                    <CusDatePicker
                        id='short_desc'
                        title={data?.fieldLabel}
                        index_history={index_history}
                        errorText='Wrong Password'
                        placeHolder={data?.placeHolder}
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onDateChange={(value) => inputChangeHandler('date', value, index_history)}
                        required
                    />
                </>

            case 'NUMBER':
                return <>
                    <Input
                        id='short_desc'
                        data={data}
                        label={data?.fieldLabel}
                        index_history={index_history}
                        //  regex={data?.regex}
                        errorText='Wrong Password'
                        placeHolder={data?.placeholderText || data?.labelInfo
                        }
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onInputChange={inputChangeHandler}
                        onVerify={() => {
                            if (data?.verificationFieldName)
                                setActiveOTP(data?.verificationFieldName)
                        }}
                    //required
                    />
                </>

            case 'ADDRESS':
                return (
                    <View>
                        {
                            data?.addressFields ? <FlatList
                                data={data?.addressFields}
                                renderItem={({ item, index }) => <RenderFields data={item} index_history={[...index_history, index]} />}
                                keyExtractor={(item, index) => `address${index.toString()}`}
                            /> :
                                data?.sectionContent?.addressFields ? <FlatList
                                    data={data?.sectionContent?.addressFields}
                                    renderItem={({ item, index }) => <RenderFields data={item} index_history={[...index_history, index]} />}
                                    keyExtractor={(item, index) => `section_address${index.toString()}`}
                                /> : <></>
                        }
                    </View>)
            default:
                return <><Text>Default</Text></>
        }
    }

    return renderComponents()
}

export default RenderFields

const styles = StyleSheet.create({})