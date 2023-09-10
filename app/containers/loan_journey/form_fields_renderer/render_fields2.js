import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native'
import React, { useState, useEffect, useContext, useReducer } from 'react'
import {
    Input, Dropdown, Title, Paragraph, CusDatePicker, RadioButtonRN,
    OTPComp, MultiInputField, FieldStateNotifier, Consent, OrderedList,
    Popup, StaticConsent, ApiFetchConsent, OtpPopup, Cus_Switch, RadioButton,
    VerifyInput, DocumentInput
} from '../../../components/index';
import RenderFormComponents from './render_form_components';


const renderFields = (field_item, field_index, hierarchy, index_history, inputChangeHandler = () => { }, onVerifyHandler, show_consent, active_otp, setActiveOTP) => {
    switch (field_item?.fieldDataType || field_item?.componentType || field_item?.linkType || field_item?.consentType) {
        case 'TITLE':
            return <>
                <Title
                    label={field_item?.sectionContent?.titleData}
                />
            </>

        case 'TEXT':
            return <>
                <Input
                    id='short_desc'
                    data={field_item}
                    label={field_item?.fieldLabel}
                    index_history={index_history}
                    //  regex={field_item?.regex}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeholderText || field_item?.labelInfo
                    }
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    onVerify={() => {
                        if (field_item?.verificationFieldName)
                            setActiveOTP(field_item?.verificationFieldName)
                    }}
                    setActiveOTP={setActiveOTP}
                //required
                />
            </>
        case 'MOBILE_NO':
            return <>
                <Input
                    id='short_desc'
                    data={field_item}
                    label={field_item?.fieldLabel}
                    index_history={index_history}
                    maxLength={10}
                    keyboardType={'number-pad'}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    onVerify={() => {
                        if (field_item?.verificationFieldName)
                            setActiveOTP(field_item?.verificationFieldName)
                    }}
                    required

                />
            </>
        case 'PAN_CARD':
            return <>
                <DocumentInput
                    data={field_item}
                    fieldLabel={field_item?.fieldLabel}
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
                    data={field_item}
                    fieldLabel={field_item?.fieldLabel}
                    index_history={index_history}
                    onInputChange={inputChangeHandler}
                    fieldDataType={'AADHAR'}
                    value={''}
                    onPress={(code) => {
                        // setModalVisible(onboardingVerificationType, code, fieldName)
                    }}
                    disabled={false}
                    onVerify={() => {
                        if (field_item?.verificationFieldName)
                            setActiveOTP(field_item?.verificationFieldName)
                    }}
                    setActiveOTP={setActiveOTP}
                />
            </>

        case 'PARAGRAPH':
            return <>
                <Paragraph
                    label={field_item?.sectionContent?.paragraphData}
                />
            </>
        case 'ORDERED_LIST':
            return <>
                <OrderedList
                    data={field_item?.sectionContent?.listItem}
                />
            </>

        case 'CONSENT':
            return <>
                {
                    (show_consent && field_item?.sectionContent?.config?.options) && <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={field_item?.sectionContent?.config?.options}
                        renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler, onVerifyHandler, show_consent)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
            </>
        case 'STATIC':
            return <>
                <StaticConsent
                    onSelect={(value) => inputChangeHandler('inp87', value, index_history)}
                    data={field_item}>
                    {
                        field_item?.endLinks && <FlatList
                            horizontal={true}
                            data={field_item?.endLinks}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    }
                </StaticConsent>
            </>

        case 'APIFETCH':
            return <>
                <ApiFetchConsent
                    data={field_item} />
            </>

        case 'POPUP':
            return <>
                <Popup
                    id='short_desc'
                    data={field_item}
                    labal={field_item?.fieldLabel}
                    index_history={index_history}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    required
                >
                    {field_item?.popupContent && <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={field_item?.popupContent}
                        renderItem={({ item, index }) => renderFields({ ...item, label: field_item?.label }, index, [...hierarchy, item.id], [...index_history, index])}
                        keyExtractor={(item, index) => index.toString()}
                    />}
                </Popup>
            </>

        case 'DROPDOWN':
            return <>
                <Dropdown
                    id='short_desc'
                    data={field_item}
                    title={field_item?.fieldLabel}
                    submitButtonText={'Submit'}
                    cancelButtonText={'Cancel'}
                    closeOnItemSelection={true}
                    onChange={(value) => inputChangeHandler('dropdown', value, index_history)}
                    index_history={index_history}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    required
                />
            </>
        case 'OTP':


            field_item = field_item?.sectionContent?.fields ? field_item?.sectionContent?.fields : field_item
            console.log('popup_state active_otp', active_otp);
            console.log('popup_state main', (active_otp && active_otp?.field_name && active_otp?.field_name == field_item?.fieldName));
            return <>
                {(active_otp && active_otp == field_item?.fieldName) &&
                    <OtpPopup
                        popup_state={(active_otp && active_otp == field_item?.fieldName) ? true : false}
                        index_history={index_history}
                        data={field_item}
                        onCancel={() => { setActiveOTP(null) }}
                        setActiveOTP={setActiveOTP}
                        onVerify={(value) => onVerifyHandler(field_item.fieldName, 'value', value, index_history, field_item?.submitPageOnVerify)}
                    // onValidate={}
                    />
                }

            </>

        case 'BOOLEAN':
            return <>
                <Cus_Switch
                    label={field_item?.fieldLabel}
                    value={field_item?.value}
                    onSwitch={(value) => inputChangeHandler('dropdown', value, index_history)}
                />
            </>
        case 'RADIO':
            return <>
                <RadioButton
                    options={field_item?.options}
                    label={field_item?.fieldLabel}
                    value={field_item?.value}
                    onChange={(value) => inputChangeHandler('dropdown', value, index_history)}
                />
            </>

        case 'DATE':
            return <>
                <CusDatePicker
                    id='short_desc'
                    title={field_item?.fieldLabel}
                    index_history={index_history}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onDateChange={(value) => inputChangeHandler('date', value, index_history)}
                    required
                />
            </>

        case 'NUMBER':
            return <>
                <Input
                    id='short_desc'
                    data={field_item}
                    label={field_item?.fieldLabel}
                    index_history={index_history}
                    //  regex={field_item?.regex}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeholderText || field_item?.labelInfo
                    }
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    onVerify={() => {
                        if (field_item?.verificationFieldName)
                            setActiveOTP(field_item?.verificationFieldName)
                    }}
                //required
                />
            </>
        // <MultiInputField
        //     fieldDataType={"OTP"}
        //     value={'123456'}
        //     label={'Enter OTP'}
        //     getCode={inputChangeHandler}
        //     onPress={(code) => {
        //         console.log('ooop code', code);

        //     }}
        //     isOnboardingVerificationType={true}
        //     disabled={false}
        //     disabled_state={false}
        // />

        case 'TEXT_AREA':
            return <>
                {/* <Input
                    id='short_desc'
                    numberOfLines={4}
                    labal={field_item?.fieldLabel}
                    index_history={index_history}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    required
                /> */}
            </>

        case 'CONTAINER':
            return (
                <View>

                    {
                        field_item?.fields && <FlatList
                            style={{
                                marginVertical: 10,
                                backgroundColor: '#FFF',
                                borderRadius: 8,
                                padding: 10
                            }}
                            ListHeaderComponent={(field_item?.group_name && field_item?.group_name != 'page') ? <Text
                                style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}
                            >{field_item?.group_name}</Text> : <></>}
                            data={field_item?.fields}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item?.id], [...index_history, index], inputChangeHandler, onVerifyHandler, show_consent, active_otp, setActiveOTP)}
                            keyExtractor={(item, index) => `${item?.container_id}container${index.toString()}`}
                        />
                    }
                </View>)

        case 'FORM':
            return (
                <>

                    {
                        field_item?.sectionContent?.fields ?
                            <RenderFormComponents
                                field_item={field_item}
                                hierarchy={hierarchy}
                                index_history={index_history}
                                inputChangeHandler={inputChangeHandler}
                                onVerifyHandler={onVerifyHandler}
                                show_consent={show_consent}
                                active_otp={active_otp}
                                setActiveOTP={setActiveOTP}
                            /> : <></>
                    }
                </>)

        case 'ADDRESS':
            return (
                <View>
                    {
                        field_item?.addressFields ? <FlatList
                            data={field_item?.addressFields}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler, onVerifyHandler, show_consent, active_otp, setActiveOTP)}
                            keyExtractor={(item, index) => `address${index.toString()}`}
                        /> :
                            field_item?.sectionContent?.addressFields ? <FlatList
                                data={field_item?.sectionContent?.addressFields}
                                renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler, onVerifyHandler, show_consent, active_otp, setActiveOTP)}
                                keyExtractor={(item, index) => `section_address${index.toString()}`}
                            /> : <></>
                    }
                </View>)

        default:
            return <><Text>Default</Text></>
    }
}

export default renderFields;