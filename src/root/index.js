import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import ColorThemeProvider from '../context/theme_context'
import { Provider } from 'react-redux'
import store from '../store/confugure_store'
import App from './App'

import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {requestUserPermission, getFCMToken, notificationsListener } from '../utils/push_notifications_helper'

const Start = () => {
    useEffect(()=>{
        requestUserPermission();
        notificationsListener();
    },[])

    return (
        <Provider store={store}>
            <ColorThemeProvider><App /></ColorThemeProvider>
        </Provider>
    )
}

export default Start
