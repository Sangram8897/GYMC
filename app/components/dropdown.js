import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import AppStyles from '../style'
import Icon from 'react-native-vector-icons/AntDesign'
import Button from './button/button';
import { Colors } from '../style/colors';
import AppButton from './button';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import FieldStateNotifier from './field_state_notifier';

const inputStateColors = {
    DEFAULT: { primary: Colors.GRAY_G2, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
    FOCUSED: { primary: Colors.BLUE_B2, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B2 },
    DISABLED: { primary: Colors.GRAY_G2, textTitle: Colors.GRAY_G3, textValue: Colors.GRAY_G3 },

    FILLED: { primary: Colors.BLUE_B5, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B5 },
    PREFILLED: { primary: Colors.GRAY_G1, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B5 },

    SUCCESS: { primary: Colors.ACCENTS_LIME, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
    ERROR: { primary: Colors.ACCENTS_SCARLET, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
}

const DROPDOWN_CHANGE = 'DROPDOWN_CHANGE';

const dropdownReducer = (state, action) => {
    switch (action.type) {
        case DROPDOWN_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
                visible: action.visible
            }
        case 'DROPDOWN_VISIBLE':
            return {
                ...state,
                visible: action.visible,
                touched: true,
            }

        case 'DROPDOWN_STATUS_CHANGE':
            return {
                ...state,
                status: action.status,
                isValid: action.isValid
            }
        default:
            return state;
    }
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
);

const Dropdown = ({ data, title = 'My dropdown', closeOnItemSelection = false, submitButtonText = 'Submit', cancelButtonText = 'Cancel', onChange, selectionProperty = 'name' }) => {
    const [dropdownState, dispatch] = useReducer(dropdownReducer, {
        value: '',
        isValid: true,
        touched: false,
        visible: false,
        status: 'DEFAULT'
    });
    const [input_color_theme, set_input_color_theme] = useState(inputStateColors[dropdownState.status])
    const [background_color, set_background_color] = useState('transparent');
    const [errorText, set_errorText] = useState('Checking Inavalid Email Entered')

    useEffect(() => {
        if (dropdownState?.visible == true)
            set_background_color('rgba(52, 52, 52, 0.8)')
        return () => set_background_color('transparent')
    }, [dropdownState?.visible])

    useEffect(() => {
        set_input_color_theme(inputStateColors[dropdownState?.status])
    }, [dropdownState?.status])

    useEffect(() => {
        if (dropdownState?.visible == true) {
            if (dropdownState.status != 'ERROR') {
                dispatch({ type: 'DROPDOWN_STATUS_CHANGE', status: 'FOCUSED' })
            }
        } else if (dropdownState?.touched) {
            dispatch({ type: 'DROPDOWN_STATUS_CHANGE', status: dropdownState?.value ? 'FILLED' : 'ERROR', isValid: dropdownState?.value ? true : false })
        }
    }, [dropdownState?.visible])

    const renderItem = (item, index) => {
        const backgroundColor = '#F1F1F1';
        const color = 'black';

        return (
            <Item
                key={index}
                item={item}
                onPress={() => onDropdownOptionSelection(item[selectionProperty])}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    const onDropdownOptionSelection = (value, validity = true) => {
        dispatch({ type: 'DROPDOWN_CHANGE', value: value, isValid: true, visible: false })
    }

    const onDropdownModalState = (state) => {
        dispatch({ type: 'DROPDOWN_VISIBLE', visible: state })
    }

    return (
        <View style={{ marginHorizontal: 8 }}>


            <TouchableOpacity
                onPress={() => onDropdownModalState(true)}
            >
                <View style={[AppStyles.componentContainer, {
                    borderColor: input_color_theme.primary,
                    borderWidth: 1,
                    borderRadius: 6,
                    paddingTop: 4,
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'center'
                }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={AppStyles.fieldLabelText} >{title}</Text>
                        <View style={{ height: 40, flex: 1, justifyContent: 'center' }}>
                            <Text style={AppStyles.fieldValueText} >{dropdownState?.value ? dropdownState?.value : data?.placeholderText ? data?.placeholderText : 'select option from dropdown'}</Text>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={dropdownState?.visible}
                                onRequestClose={() => onDropdownModalState(false)}>
                                <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: background_color }}>
                                    <View style={{ flexWrap: 'wrap', width: '100%', alignSelf: 'center', backgroundColor: '#FFF', borderTopLeftRadius: 16, borderTopRightRadius: 16, alignItems: 'center', padding: 12 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: 20, width: 20 }} />
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 12 }}> Dropdown popup title</Text>
                                            </View>
                                            <Icon
                                                onPress={() => onDropdownModalState(false)}
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
                                            onPress={() => onDropdownModalState(false)}
                                            label={submitButtonText}
                                        />}
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <FontAwesome name={1 == 2 ? 'sort-up' : 'sort-down'} color={input_color_theme.primary} size={18} />
                    {/* <AppButton /> */}

                </View>
            </TouchableOpacity>
            {
                !dropdownState.isValid && dropdownState.touched && errorText &&
                <FieldStateNotifier text={errorText} color={input_color_theme.primary}></FieldStateNotifier>
            }
        </View>
    )
}

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