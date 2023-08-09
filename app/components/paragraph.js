import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../style'

const Paragraph = ({ label = 'Mylabel' }) => {
    const [show_more_details, set_show_more_details] = useState(false)
    return (
        <View style={AppStyles.componentContainer}>
            <Text style={AppStyles.sub_title}
                numberOfLines={!show_more_details ? 3 : 15}
            >{label}</Text>
            <Text
                onPress={() => set_show_more_details(!show_more_details)}
                style={{ fontSize: 14, color: 'skyblue' }}>{!show_more_details ? 'show more' : 'hide details'}</Text>
        </View>
    )
}

export default Paragraph

const styles = StyleSheet.create({})