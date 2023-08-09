import { StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native'
import React, {  useState } from 'react'
import AppStyles from '../style'
import Icon from 'react-native-vector-icons/AntDesign'

const Popup = ({ data, title = 'My dropdown', children }) => {
    const [show_dropdown_modal, set_show_dropdown_modal] = useState(false)
    return (

        <View style={AppStyles.componentContainer}>
            <Text style={[{color:'blue'}]} onPress={() => set_show_dropdown_modal(true)}>{data?.label}</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={show_dropdown_modal}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    set_show_dropdown_modal(!show_dropdown_modal);
                }}>
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                    <View style={{ minHeight: 500, width: '95%', alignSelf: 'center', backgroundColor: '#FFF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 12 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 20, width: 20 }} />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 12 }}> {data?.label}</Text>
                            </View>
                            <Icon
                                onPress={() => set_show_dropdown_modal(false)}
                                name='closecircleo' size={20} color={'red'} />
                        </View>
                        {children}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Popup

const styles = StyleSheet.create({})