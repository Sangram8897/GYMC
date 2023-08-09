import { StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../../style'

const OTPComp = ({ title = 'My dropdown' }) => {
    const [show_dropdown_modal, set_show_dropdown_modal] = useState(false)
    return (

        <View style={AppStyles.componentContainer}>
            <Text style={AppStyles.fieldLabelText} onPress={() => set_show_dropdown_modal(true)}>{title}</Text>
            <TouchableOpacity onPress={() => set_show_dropdown_modal(true)} style={AppStyles.componentInnerContainer}>

            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={show_dropdown_modal}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    set_show_dropdown_modal(!show_dropdown_modal);
                }}>
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                    <View style={{ minHeight: 300,width:'90%',alignSelf:'center',backgroundColor:'#FFF',borderRadius:8,justifyContent:'center',alignItems:'center' }}>

                        <Text>DropDown</Text>
                        <Text onPress={() => set_show_dropdown_modal(false)}>close</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default OTPComp

const styles = StyleSheet.create({})