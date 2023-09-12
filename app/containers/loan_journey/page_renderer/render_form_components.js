import { StyleSheet, Text, FlatList, SectionList, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { modifyInSectionListFormat, stuctureFieldsInGroup } from './utils';
import RenderFields from './render_fields';
import { useDispatch, useSelector } from 'react-redux';

const RenderFormComponents = ({ data }) => {
    const dispatch = useDispatch()
    const page_data = useSelector(state => state.LoanJourneyActivePageReducer.data);

    useEffect(() => {
        modificationOninitialization()
    }, [])

    const modificationOninitialization = async () => {
        let form_fields = await data?.sectionContent?.fields;
        let grouped_data = await stuctureFieldsInGroup(form_fields)
        let sections_data = await modifyInSectionListFormat(grouped_data)

        dispatch({ type: 'SET_PAGE_DATA', payload: sections_data });
    }

    useEffect(() => {
        console.log('page_data', page_data);
    }, [page_data])

    return (
        <>
            {page_data && <FlatList
                data={page_data}
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
                                renderItem={({ item, index }) => <RenderFields data={item} index_history={[data_?.index, index]} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>)
                }}
                keyExtractor={(item, index) => index.toString()}
            />}
        </>
    )
}

export default RenderFormComponents

const styles = StyleSheet.create({})