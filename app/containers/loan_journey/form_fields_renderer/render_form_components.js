import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { modifyInSectionListFormat, stuctureFieldsInGroup } from './utils';
import RenderFields from './render_fields';
import { PageFormContext } from '../context/page_form';

const RenderFormComponents = (props) => {
    const [sections, set_sections] = useState([]);
    const { page_form_state, setInitialData, inputChangeHandler, onVerifyHandler, setActiveOTP } = useContext(PageFormContext);
    const { field_item, hierarchy, index_history = [], show_consent, active_otp } = props;

    useEffect(() => {
        modificationOninitialization()
    }, [])


    const modificationOninitialization = async () => {
        let form_fields = await field_item?.sectionContent?.fields;
        let grouped_data = await stuctureFieldsInGroup(form_fields)
        let sections_data = await modifyInSectionListFormat(grouped_data)
        set_sections(sections_data)
        setInitialData(sections_data)
    }

    useEffect(()=>{
        console.log('page_form_state3', page_form_state);
    },[page_form_state])

    return (
        <>
            <FlatList
                data={sections}
                renderItem={(data_) => {
                    const { title, fields } = data_?.item
                    return (
                        <View style={{
                            marginVertical: 8,
                            backgroundColor: '#FFF',
                            borderRadius: 8,
                            padding: 10
                        }}>
                            {title != 'page' && <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>{title}</Text>}
                            <FlatList
                                data={fields}
                                renderItem={({ item, index }) => <RenderFields data={item} index_history={[ data_?.index, index]} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>)
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default RenderFormComponents

const styles = StyleSheet.create({})