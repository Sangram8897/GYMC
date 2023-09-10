import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import renderFields from './render_fields2'
import { modifyInSectionListFormat, stuctureFieldsInGroup } from './utils';
import RenderFields from './render_fields';

const RenderFormComponents = (props) => {
    const [sections, set_sections] = useState([]);
    const { field_item, field_index, hierarchy, index_history, inputChangeHandler, onVerifyHandler, show_consent, active_otp, setActiveOTP } = props;

    useEffect(() => {
        modificationOninitialization()
    }, [])

    const modificationOninitialization = async () => {
        let form_fields = await field_item?.sectionContent?.fields;
        let grouped_data = await stuctureFieldsInGroup(form_fields)
        let sections_data = await modifyInSectionListFormat(grouped_data)
        set_sections(sections_data)

    }
    console.log('sections_data', sections);
    return (
        <>
            <FlatList
                data={sections}
                renderItem={(data_) => {
                    const { title, data } = data_?.item
                    return (
                        <View style={{
                            marginVertical: 8,
                            backgroundColor: '#FFF',
                            borderRadius: 8,
                            padding: 10
                        }}>
                            {title != 'page' && <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>{title}</Text>}
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => <RenderFields data={item} />}
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