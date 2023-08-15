import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useContext, useReducer } from 'react'
import {
    Input, Dropdown, Title, Paragraph, CusDatePicker, RadioButtonRN,
    OTPComp, MultiInputField, FieldStateNotifier, Consent, OrderedList,
    Popup, StaticConsent, ApiFetchConsent, OtpPopup, Cus_Switch, RadioButton,
    VerifyInput
} from '../../../components/index';


const renderFields = (field_item, field_index, hierarchy, index_history, inputChangeHandler, onVerifyHandler) => {

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
                //required
                />
            </>
        case 'MOBILE_NO':
            return <>
                <VerifyInput
                    id='short_desc'
                    data={field_item}
                    labal={field_item?.fieldLabel}
                    index_history={index_history}
                    maxLength={10}
                    keyboardType={'number-pad'}
                    errorText='Wrong Password'
                    placeHolder={field_item?.placeHolder}
                    initialValue={field_item?.value ? field_item.value : ''}
                    initialValid={true}
                    onInputChange={inputChangeHandler}
                    onVerify={() => onVerifyHandler(field_item.verificationFieldName, 'fieldName')}
                    required
                />
            </>
        case 'PAN_CARD':
            return <>
                <MultiInputField
                    index_history={index_history}
                    onInputChange={inputChangeHandler}

                    fieldDataType={'PAN_CARD'}
                    value={'FYJPP4545D'}
                    labal={field_item?.fieldLabel}
                    // inputChangeHandler={inputChangeHandler}
                    onPress={(code) => {
                        // setModalVisible(onboardingVerificationType, code, fieldName)
                    }}
                    isOnboardingVerificationType={false}
                    disabled={false}
                    disabled_state={false}
                    onVerify={() => { }}
                />

            </>
        case 'AADHAR':
            return <>
                <MultiInputField
                    index_history={index_history}
                    onInputChange={inputChangeHandler}

                    fieldDataType={'AADHAR'}
                    value={'989898989898'}
                    labal={field_item?.fieldLabel}
                    // inputChangeHandler={inputChangeHandler}
                    onPress={(code) => {
                        // setModalVisible(onboardingVerificationType, code, fieldName)
                    }}
                    isOnboardingVerificationType={false}
                    disabled={false}
                    disabled_state={false}
                    onVerify={() => {
                        console.log('calling', field_item.verificationFieldName)
                        onVerifyHandler(field_item.verificationFieldName, 'fieldName', true)
                    }}
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
                    field_item?.sectionContent?.config?.options && <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={field_item?.sectionContent?.config?.options}
                        renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler)}
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
            //console.log('popup_state field_item?.showField', field_item);
            // if()
            field_item = field_item?.sectionContent?.fields ? field_item?.sectionContent?.fields : field_item
            return <>
                <OtpPopup
                    popup_state={field_item?.showField ? field_item?.showField : false}
                    index_history={index_history}
                    data={field_item}
                    onCancel={() => onVerifyHandler(field_item.fieldName, 'fieldName', false)}
                // onValidate={}
                />
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
                    onSwitch={(value) => inputChangeHandler('dropdown', value, index_history)}
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
            return <MultiInputField
                fieldDataType={"OTP"}
                value={'123456'}
                label={'Enter OTP'}
                getCode={inputChangeHandler}
                onPress={(code) => {
                    console.log('ooop code', code);

                }}
                isOnboardingVerificationType={true}
                disabled={false}
                disabled_state={false}
            />

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
                <View style={{ borderWidth: 1, borderColor: 'skyblue' }}>
                    {
                        field_item?.fields ? <FlatList
                            data={field_item?.fields}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index])}
                            keyExtractor={(item, index) => index.toString()}
                        /> :
                            field_item?.sectionContent?.fields ? <FlatList
                                data={field_item?.sectionContent?.fields}
                                renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index],)}
                                keyExtractor={(item, index) => index.toString()}
                            /> : <></>
                    }
                </View>)
        case 'FORM' || 'ADDRESS':
            return (
                <View>
                    {
                        field_item?.fields ? <FlatList
                            data={field_item?.fields}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler, onVerifyHandler)}
                            keyExtractor={(item, index) => index.toString()}
                        /> :
                            field_item?.sectionContent?.fields ? <FlatList
                                data={field_item?.sectionContent?.fields}
                                renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler, onVerifyHandler)}
                                keyExtractor={(item, index) => index.toString()}
                            /> : <></>
                    }
                </View>)

        case 'ADDRESS':
            return (
                <View>
                    {
                        field_item?.addressFields ? <FlatList
                            data={field_item?.addressFields}
                            renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler)}
                            keyExtractor={(item, index) => index.toString()}
                        /> :
                            field_item?.sectionContent?.addressFields ? <FlatList
                                data={field_item?.sectionContent?.addressFields}
                                renderItem={({ item, index }) => renderFields(item, index, [...hierarchy, item.id], [...index_history, index], inputChangeHandler)}
                                keyExtractor={(item, index) => index.toString()}
                            /> : <></>
                    }
                </View>)

        default:
            return <><Text>Default</Text></>
    }
}

export default renderFields;