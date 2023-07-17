import React, { useEffect ,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../../../../store/actions';
import Module_List from './Module_List';

const ModulesList = ({ navigation, route }) => {
    const dispatch = useDispatch();
    let [modules_list_, set_modules_list_] = useState([]);

    const { subject_ID } = route.params;

    const modules_list = useSelector(state => state.ModuleListReducer.modules_list);

    useEffect(() => {
        dispatch(ACTIONS.get_modules_lists(subject_ID))
    }, [])


    //tried to clear previous state but not working

    useEffect(() => {
        if (modules_list) {
            set_modules_list_(modules_list)
        }

        return () => {
            set_modules_list_([])
        }
    }, [modules_list]);

    return <Module_List DATA={modules_list_} navigation={navigation} />
}

export default ModulesList;

const styles = StyleSheet.create({})
