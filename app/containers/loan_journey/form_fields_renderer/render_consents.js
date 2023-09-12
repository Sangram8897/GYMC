import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import { PageFormContext } from '../context/page_form';
import {
    Input, Dropdown, Title, Paragraph, CusDatePicker, RadioButtonRN,
    OTPComp, MultiInputField, FieldStateNotifier, Consent, OrderedList,
    Popup, StaticConsent, ApiFetchConsent, OtpPopup, Cus_Switch, RadioButton,
    VerifyInput, DocumentInput
} from '../../../components/index';

const RenderConsents = ({ data }) => {
    const [sections, set_sections] = useState([]);
    const { page_form_state, setInitialData, inputChangeHandler, onVerifyHandler, setConsentData } = useContext(PageFormContext);

    useEffect(() => {
        if (data)
            setConsentData(data)
    }, [])

    const renderConsents = (consent, index_history) => {

        switch (consent?.consentType) {
            case 'STATIC':
                return <>
                    <StaticConsent
                        onSelect={(value) => inputChangeHandler('inp87', value, index_history, 'consent')}
                        data={consent}>
                        {
                            consent?.endLinks && <FlatList
                                horizontal={true}
                                data={consent?.endLinks}
                                renderItem={({ item, index }) => renderConsents(item, index_history = [...index_history, index])}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        }
                    </StaticConsent>
                </>

            case 'APIFETCH':
                return <>
                    <ApiFetchConsent
                        data={consent} />
                </>

            case 'ORDERED_LIST':
                return <>
                    <OrderedList
                        data={consent?.sectionContent?.listItem}
                    />
                </>

            case 'POPUP':
                return <>
                    <Popup
                        id='short_desc'
                        data={consent}
                        labal={consent?.fieldLabel}
                        index_history={index_history}
                        errorText='Wrong Password'
                        placeHolder={consent?.placeHolder}
                        initialValue={consent?.value ? consent.value : ''}
                        initialValid={true}
                        onInputChange={inputChangeHandler}
                        required
                    >
                        {consent?.popupContent && <FlatList
                            style={{ flex: 1, width: '100%' }}
                            data={consent?.popupContent}
                            renderItem={({ item, index }) => renderConsents(item, [index])}
                            keyExtractor={(item, index) => index.toString()}
                        />}
                    </Popup>
                </>
                
            default:
                return <><Text>Default</Text></>
        }
    }
    console.log('consent_test', data, page_form_state);
    return (
        <>
            {
                page_form_state?.consents &&
                <FlatList
                    style={{ flex: 1, width: '100%' }}
                    data={page_form_state?.consents?.sectionContent?.config?.options}
                    renderItem={({ item, index }) => renderConsents(item, [index])}
                    keyExtractor={(item, index) => index.toString()}
                />}


        </>
    )
}

export default RenderConsents

const styles = StyleSheet.create({})
