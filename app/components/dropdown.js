import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from '../style'
import Icon from 'react-native-vector-icons/AntDesign'
import Button from './button/button';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
);

const Dropdown = ({ data, title = 'My dropdown', closeOnItemSelection = false, submitButtonText = 'Submit', cancelButtonText = 'Cancel', onChange, selectionProperty = 'name' }) => {
    const [show_dropdown_modal, set_show_dropdown_modal] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);

    const [background_color, set_background_color] = useState('transparent');

    useEffect(() => {
        if (show_dropdown_modal == true)
            set_background_color('rgba(52, 52, 52, 0.8)')
        return () => set_background_color('transparent')
    }, [show_dropdown_modal])

    console.log('data', data);
    const renderItem = (item, index) => {
        const backgroundColor = '#F1F1F1';
        const color = 'black';

        return (
            <Item
                key={index}
                item={item}
                onPress={() => {
                    setSelectedOption(item[selectionProperty])
                    onChange(item[selectionProperty])
                    if (closeOnItemSelection) {
                        set_show_dropdown_modal(false)
                    }
                }}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <View style={AppStyles.componentContainer}>
            <Text style={AppStyles.fieldLabelText} onPress={() => set_show_dropdown_modal(true)}>{title}</Text>
            <View style={AppStyles.componentInnerContainer}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={show_dropdown_modal}
                    onRequestClose={() => {
                        // Alert.alert('Modal has been closed.');
                        set_show_dropdown_modal(!show_dropdown_modal);
                    }}>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: background_color }}>
                        <View style={{ flexWrap: 'wrap', width: '100%', alignSelf: 'center', backgroundColor: '#FFF', borderTopLeftRadius: 16, borderTopRightRadius: 16, alignItems: 'center', padding: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 20, width: 20 }} />
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 12 }}> Dropdown popup title</Text>
                                </View>
                                <Icon
                                    onPress={() => set_show_dropdown_modal(false)}
                                    name='closecircleo' size={20} color={'red'} />
                            </View>

                            <View style={{ width: '100%' }}>
                                {(data?.options && data?.options.length > 0) ?
                                    data?.options.map(renderItem)
                                    :
                                    <Text style={{ fontSize: 16, marginVertical: 12 }}>Filter options are not available</Text>
                                }
                            </View>
                            {submitButtonText && <Button
                                onPress={() => {
                                    // setModalVisible(!modalVisible);
                                    set_show_dropdown_modal(false)
                                }}
                                label={submitButtonText}
                            />}
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
    },
];

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    item: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        padding: 12,
        marginVertical: 4,
    },
    title: {
        fontSize: 18,
    },
});