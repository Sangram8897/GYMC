import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../../store/actions';
import Subjects_List from './Subjects_List';
import messaging from '@react-native-firebase/messaging';



const SubjectsList = ({ navigation }) => {
    const dispatch = useDispatch();

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }

    useEffect(() => {
        console.log('test async1')
        fetchData()
        console.log('test async4')
         requestUserPermission()
        // signIn();
    }, []);

    const fetchData =  () => {
        console.log('test async2')
        dispatch(ACTIONS.get_subjects_lists())
       console.log('test async3')
    }

    // async function requestUserPermission() {
    //     const authStatus = await messaging().requestPermission();
    //     const enabled =
    //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    //     if (enabled) {
    //         console.warn('Authorization status:', authStatus);
    //     }
    // }


    const subjects_list = useSelector(state => state.SubjectListReducer.subjects_list);

    return <Subjects_List DATA={subjects_list} navigation={navigation} />
}

export default SubjectsList

const styles = StyleSheet.create({})

