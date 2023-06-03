import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../../../../store/actions';
import Module_List from './Module_List';

const ModulesList = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const { subject_ID } = route.params;

    const modules_list = useSelector(state => state.ModuleListReducer.modules_list);

    useEffect(() => {
        dispatch(ACTIONS.get_modules_lists(subject_ID))
    }, [])

    return <Module_List DATA={modules_list} navigation={navigation} />
}

export default ModulesList;

const styles = StyleSheet.create({})
