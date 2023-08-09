import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStyles from '../style'

const Title = ({ label = 'Mylabel' }) => {
    return (
        <View style={AppStyles.componentContainer}>
            <Text style={AppStyles.title}>{label}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({})