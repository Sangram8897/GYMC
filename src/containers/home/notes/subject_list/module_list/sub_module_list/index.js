import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import ACTIONS from '../../../../../../store/actions';
import Sub_Module_List from './Sub_Module_List';

const SubModulesList = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const { module_ID } = route.params;

    const subject_ID = useSelector(state => state.ModuleListReducer.subject_ID);

    const modules_list = useSelector(state => state.SubModuleListReducer.sub_modules_list);

    useEffect(() => {
        // console.warn('module_id', module_id)
        dispatch(ACTIONS.get_sub_modules_lists(subject_ID, module_ID))
    }, [])


    return <Sub_Module_List DATA={modules_list} navigation={navigation} />
}

export default SubModulesList;

const styles = StyleSheet.create({});
