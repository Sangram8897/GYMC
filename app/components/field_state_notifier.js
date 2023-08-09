import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStyles from '../style'

const FieldStateNotifier = ({ text = 'this is test sample nofication' }) => {
    return (
        <Text style={AppStyles.errorText}>{text}</Text>
    )
}

export default FieldStateNotifier

const styles = StyleSheet.create({})