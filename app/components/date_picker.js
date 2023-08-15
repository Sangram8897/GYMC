import React, { useState, useReducer, useEffect, useContext } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Platform } from 'react-native'
import IsEmpty from './../utils/IsEmpty'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import AppStyles from '../style';
import { Colors } from '../style/colors';
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

const CusDatePicker = ({data, label = 'select Date', onDateChange = () => { } }) => {
    const [date, set_date] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [dropdownState, dispatch] = useReducer(dropdownReducer, {
        value: new Date(),
        isValid: true,
        touched: false,
        visible: false,
        status: 'DEFAULT'
    });
    const [input_color_theme, set_input_color_theme] = useState(inputStateColors[dropdownState.status])
    const [errorText, set_errorText] = useState('Checking Inavalid Email Entered')
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

    const onDropdownOptionSelection = (value, validity = true) => {
        onDateChange(value)
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
                        <Text style={AppStyles.fieldLabelText} >{label}</Text>
                        <View style={{ height: 40, flex: 1, justifyContent: 'center' }}>
                            <Text style={AppStyles.fieldValueText} >{dropdownState?.value ?moment(dropdownState?.value).format('LLLL')  : data?.placeholderText ? data?.placeholderText : 'select option from dropdown'}</Text>
                            <DatePicker
                                modal
                                mode={'date'}
                                open={dropdownState.visible}
                                date={dropdownState?.value}
                                onConfirm={(date) => {
                                    onDropdownOptionSelection(date)
                                    onDropdownModalState(false)
                                }}
                                onCancel={() => {
                                    onDropdownModalState(false)
                                }}
                            />
                        </View>
                    </View>
                    <FontAwesome name={'calendar-day'} color={input_color_theme.primary} size={16} />
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

export default CusDatePicker

const styles = StyleSheet.create({
    textInput: {
        // textAlignVertical: 'top',
        // fontFamily: 'Montserrat-Medium',
        padding: 10,
        // fontSize: 16,

        justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: 6,
        borderColor: 'skyblue'
        // elevation: 1
    },
})
