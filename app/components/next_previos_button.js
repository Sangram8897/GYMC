import React, { useContext } from 'react'
import { View, TouchableOpacity, Image, Text, Platform, StyleSheet } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import _ from 'lodash'


const NextPreviosButton = ({ isDemo, onSkip, onNext }) => {


    return (
        <View style={{ height: 60, width: '100%' }}>
            <View style={{ flex: 1, backgroundColor: 'green' }}></View>
            <View style={{ flex: 1.2 }}></View>

            <View style={{ flexDirection: 'row', position: 'absolute', right: 12, top: 0 }}>
                <TouchableOpacity
                    onPress={onSkip}
                    style={[styles.roundbutton, { marginRight: 12 }]}>
                    <View style={[styles.innerView, { backgroundColor: 'white' }]}>
                        <Feather name="skip-forward" color={'green'} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onNext}
                    style={[styles.roundbutton]}>
                    <View style={[styles.innerView, { backgroundColor: 'green' }]}>
                        <FontAwesome name="arrow-right" color={'white'} size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NextPreviosButton

const styles = StyleSheet.create({
    roundbutton: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#f6f6f6'
    },
    innerView: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})