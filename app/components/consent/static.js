import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const StaticConsent = ({ data, children, onSelect = () => { } }) => {
    const [selected, setSelected] = useState(false)

    return (
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start', marginVertical: 8 }}>
            <TouchableOpacity style={{ marginRight: 4 }} onPress={() => {
                onSelect(!selected)
                setSelected(!selected)
            }}>
                <FontAwesome name={selected ? 'check-square' : 'square'} color={'blue'} size={18} />
            </TouchableOpacity>
            {data?.label && <Text>{data?.label}</Text>}
            {children}
        </View>
    )
}

export default StaticConsent

const styles = StyleSheet.create({})