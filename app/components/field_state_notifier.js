import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStyles from '../style'

const FieldStateNotifier = ({ text = 'this is test sample nofication', color='black' }) => {
    return (
        <Text style={[AppStyles.errorText, { color: color }]}>{text}</Text>
    )
}

export default FieldStateNotifier

const styles = StyleSheet.create({})