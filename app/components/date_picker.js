import React, { useState, useReducer, useEffect, useContext } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Platform } from 'react-native'
import IsEmpty from './../utils/IsEmpty'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import AppStyles from '../style';
import { Colors } from '../style/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import FieldStateNotifier from './field_state_notifier';
import useFieldState from '../containers/loan_journey/ hook/useFieldState';

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

const CusDatePicker = ({ data, label = 'select Date', onDateChange = () => { } }) => {

    const [fieldState, onFieldValueChange, setFieldValidity, onFieldStatusChange, setFieldVisibility, setFieldTouched] = useFieldState(new Date(), true, 'DEFAULT');
    
    const [input_color_theme, set_input_color_theme] = useState(inputStateColors[fieldState.status])
    const [errorText, set_errorText] = useState('Checking Inavalid Email Entered')
    useEffect(() => {
        set_input_color_theme(inputStateColors[fieldState?.status])
    }, [fieldState?.status])

    useEffect(() => {
        if (fieldState?.visible == true) {
            if (fieldState.status != 'ERROR') {
                onFieldStatusChange('FOCUSED')
            }
        } else if (fieldState?.touched) {
            setFieldValidity(fieldState?.value ? true : false)
            onFieldStatusChange(fieldState?.value ? 'FILLED' : 'ERROR')
        }
    }, [fieldState?.visible])

    const onDropdownOptionSelection = (value, validity = true) => {
        onFieldValueChange(value)
    }

    const onDropdownModalState = (state) => {
        setFieldVisibility(state)
    }

    return (
        <View style={{ marginVertical: 8 }}>


            <TouchableOpacity
                onPress={() => {
                    onDropdownModalState(true)
                    setFieldTouched(true)
                }}
            >
                <View style={[ {
                    borderColor: input_color_theme.primary,
                    borderWidth: 1,
                    borderRadius: 6,
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'center'
                }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={AppStyles.fieldLabelText} >{label}</Text>
                        <View style={{ height: 40, flex: 1, justifyContent: 'center' }}>
                            <Text style={AppStyles.fieldValueText} >{fieldState?.value ? moment(fieldState?.value).format('LLLL') : data?.placeholderText ? data?.placeholderText : 'select option from dropdown'}</Text>
                            <DatePicker
                                modal
                                mode={'date'}
                                open={fieldState.visible}
                                date={fieldState?.value}
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
                !fieldState.isValid && fieldState.touched && errorText &&
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
