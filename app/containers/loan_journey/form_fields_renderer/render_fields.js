import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { PageFormContext } from '../context/page_form';
import {
    Input, Dropdown, Title, Paragraph, CusDatePicker, RadioButtonRN,
    OTPComp, MultiInputField, FieldStateNotifier, Consent, OrderedList,
    Popup, StaticConsent, ApiFetchConsent, OtpPopup, Cus_Switch, RadioButton,
    VerifyInput, DocumentInput
} from '../../../components/index';

const RenderFields = ({ data }) => {
    const { page_form_state, setInitialData, inputChangeHandler, onVerifyHandler, setActiveOTP } = useContext(PageFormContext);
    console.log('section_databb', data);
    const renderComponents = () => {
        switch (data?.fieldDataType) {
            case 'TEXT':
                return <>
                    <Input
                        id='short_desc'
                        data={data}
                        label={data?.fieldLabel}
                        index_history={[]}
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

            case 'DROPDOWN':
                return <>
                    <Dropdown
                        id='short_desc'
                        data={data}
                        title={data?.fieldLabel}
                        submitButtonText={'Submit'}
                        cancelButtonText={'Cancel'}
                        closeOnItemSelection={true}
                        onChange={(value) => inputChangeHandler('dropdown', value, [])}
                        index_history={[]}
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
                        onSwitch={(value) => inputChangeHandler('dropdown', value, [])}
                    />
                </>

            case 'RADIO':
                return <>
                    <RadioButton
                        options={data?.options}
                        label={data?.fieldLabel}
                        value={data?.value}
                        onChange={(value) => inputChangeHandler('dropdown', value, [])}
                    />
                </>

            case 'DATE':
                return <>
                    <CusDatePicker
                        id='short_desc'
                        title={data?.fieldLabel}
                        index_history={[]}
                        errorText='Wrong Password'
                        placeHolder={data?.placeHolder}
                        initialValue={data?.value ? data.value : ''}
                        initialValid={true}
                        onDateChange={(value) => inputChangeHandler('date', value, [])}
                        required
                    />
                </>

            case 'NUMBER':
                return <>
                    <Input
                        id='short_desc'
                        data={data}
                        label={data?.fieldLabel}
                        index_history={[]}
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
                                renderItem={({ item, index }) => <RenderFields data={item} />}
                                keyExtractor={(item, index) => `address${index.toString()}`}
                            /> :
                                data?.sectionContent?.addressFields ? <FlatList
                                    data={data?.sectionContent?.addressFields}
                                    renderItem={({ item, index }) => <RenderFields data={item} />}
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