import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'

const Cus_Switch = ({ label, value, onSwitch }) => {

    return (
        <View style={[{ alignItems: 'center', flexDirection: 'row', marginVertical: 8 }]}>

            <Switch
                trackColor={{ false: 'gray', true: 'green' }}
                thumbColor={value  ? 'green' : 'gray'}
                ios_backgroundColor={'gray'}
                onValueChange={onSwitch}
                value={value}
            />
            <Text>{label}</Text>
        </View>
    )
}

export default Cus_Switch

const styles = StyleSheet.create({})