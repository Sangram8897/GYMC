import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import { OrderedList, Popup, StaticConsent, ApiFetchConsent } from '../../../components/index';

import { useDispatch, useSelector } from 'react-redux';

const RenderConsents = ({ data }) => {
    const dispatch = useDispatch()
    const consents_data = useSelector(state => state.LoanJourneyActivePageReducer.consents);

    useEffect(() => {
        if (data)
            dispatch({ type: 'SET_CONSENT_DATA', payload: data });
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

    return (
        <>
            {
                consents_data &&
                <FlatList
                    style={{ flex: 1, width: '100%' }}
                    data={consents_data?.sectionContent?.config?.options}
                    renderItem={({ item, index }) => renderConsents(item, [index])}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
        </>
    )
}

export default RenderConsents

const styles = StyleSheet.create({})
