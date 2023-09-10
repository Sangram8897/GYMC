import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { PageFormContext } from '../context/page_form';
import RenderFormComponents from './render_form_components';

const PageSections = ({ data }) => {
    const { page_form_state, setInitialData, inputChangeHandler, onVerifyHandler, setActiveOTP } = useContext(PageFormContext);

    useEffect(() => {
        setInitialData(data)
    }, [data])

    const renderSections = ({ item, index }) => {
        switch (item?.componentType) {
            case 'FORM':
                return (
                    <RenderFormComponents
                        field_item={item}
                        hierarchy={[item.id]}
                        index_history={[index]}
                        inputChangeHandler={inputChangeHandler}
                        onVerifyHandler={onVerifyHandler}
                        show_consent={page_form_state.show_consent}
                        active_otp={page_form_state.active_otp}
                        setActiveOTP={setActiveOTP}
                    />
                )
            default:
                return <><Text>Default</Text></>
        }

    }
    console.log('page_form_state?.data', page_form_state?.data);

    return (
        <View>
            {page_form_state?.data && <FlatList
                data={page_form_state?.data}
                renderItem={renderSections}
                keyExtractor={(item, index) => index.toString()}
            />}
        </View>
    )
}

export default PageSections