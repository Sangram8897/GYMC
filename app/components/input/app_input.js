import React, { useReducer, useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native'
import IsEmpty from '../../utils/IsEmpty'
import AppStyles from '../../style';
import FieldStateNotifier from '../field_state_notifier';
import { Colors } from '../../style/colors';
import { FloatingTitleTextInputField } from './FloatingTitleTextInputField';

const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true,
            }
        case 'INPUT_STATE_CHANGE':
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

const inputStateColors = {
    DEFAULT: { primary: Colors.GRAY_G2, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
    FOCUSED: { primary: Colors.BLUE_B2, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B2 },
    DISABLED: { primary: Colors.GRAY_G2, textTitle: Colors.GRAY_G3, textValue: Colors.GRAY_G3 },

    FILLED: { primary: Colors.BLUE_B5, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B5 },
    PREFILLED: { primary: Colors.GRAY_G1, textTitle: Colors.BLUE_B5, textValue: Colors.BLUE_B5 },

    SUCCESS: { primary: Colors.ACCENTS_LIME, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
    ERROR: { primary: Colors.ACCENTS_SCARLET, textTitle: Colors.BLUE_B2, textValue: Colors.BLUE_B5 },
}

const AppInput = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initialValid,
        touched: false,
        status: 'DEFAULT'
    });
    const [errorText, set_errorText] = useState('Checking Inavalid Email Entered')
    //const [input_state, set_input_state] = useState('ERROR')
    const [input_color_theme, set_input_color_theme] = useState(inputStateColors[inputState?.status ? inputState.status : 'FILLED'])

    const primaryColorInput = props?.disabled ? Colors.GRAY_G2 : Colors.BLUE_INTERACTIVE
    const secondaryColorInput = props?.disabled ? (props?.bordered ? Colors.WHITE : Colors.GRAY_G3) : Colors.WHITE

    const { onInputChange = () => { }, id, containerStyle = {}, labelStyle = {}, textInputStyle = {}, data } = props;
    useEffect(() => {
        onInputChange('value', inputState.value, props.index_history, inputState.isValid);
    }, [inputState, onInputChange])

    useEffect(() => {
        if (inputState?.status) {
            set_input_color_theme(inputStateColors[inputState?.status])
        }
    }, [inputState.status])

    const textChangeHandler = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;

        console.log('props.regex', props?.regex);
        if (props?.data?.regex && !props.data.regex.test(text.toLowerCase())) {
            isValid = false;
            set_errorText('Inavalid Email Entered')
        }

        if (props.required && text.trim().length === 0) {
            isValid = false;
            set_errorText('this field is required')
        }

        if (props.min != null && +text < props.min) {
            isValid = false;
            set_errorText('min required error')
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
            set_errorText('max required error')
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        if (!isValid) {
            dispatch({ type: 'INPUT_STATE_CHANGE', status: 'ERROR' })
        } else if (inputState.status == 'ERROR' && isValid) {
            dispatch({ type: 'INPUT_STATE_CHANGE', status: 'FOCUSED' })
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid })
    }

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR })
        if (inputState.status == 'FOCUSED') {
            dispatch({ type: 'INPUT_STATE_CHANGE', status: 'FILLED' })
        }
        if (props?.onBlur) {
            props.onBlur()
        }
    }

    return (
        <View style={{ marginHorizontal: 8 }}>
            <View style={[AppStyles.componentContainer, {
                borderColor: input_color_theme.primary,
                borderWidth: 1,
                borderRadius: 6,
                paddingTop: 4,
                paddingHorizontal: 8
            }]}>
                {<Text style={[AppStyles.fieldLabelText, { color: input_color_theme.textTitle }]}>{props?.label}</Text>}
                <TextInput
                    {...props}
                    onFocus={() => {
                        if (inputState?.status != 'ERROR') {
                            dispatch({ type: 'INPUT_STATE_CHANGE', status: 'FOCUSED' })
                        }
                    }}
                    //  onFocus={() => set_start_editing(true)}
                    placeholder={props?.placeHolder ? props?.placeHolder : ''}
                    style={[AppStyles.fieldValueText, { height: 40, textAlignVertical: 'top', color: input_color_theme.textValue }]}
                    value={inputState.value}
                    onChangeText={(text) => textChangeHandler(text)}
                    onBlur={() => lostFocusHandler()}
                    inputAccessoryViewID={'uniqueID'}
                    textAlignVertical="top"
                />
            </View>
            <View style={{ marginHorizontal: 8 }}>
                {
                    ((inputState?.status == 'SUCCESS' || inputState?.status == 'ERROR') && !inputState.isValid && inputState.touched && errorText) &&
                    <FieldStateNotifier text={errorText} color={input_color_theme.primary}></FieldStateNotifier>
                }
            </View>

        </View>
    )
}

export default AppInput

/**
 *                     <TextInput
                dense={true}
                mode={'flat'}
                disabled={props?.disabled}
                activeUnderlineColor={input_color_theme.primary}

                underlineStyle={{ borderBottomWidth: 0, borderWidth: 0.5, borderColor: Colors.WHITE }}
                //mode={'outlined'}
                label={props?.label}
               // placeholder={props?.placeholder ? props?.placeholder : ''}
                value={props?.value ? props?.value : ''}
                onChangeText={(text) => textChangeHandler(text)}
                onBlur={lostFocusHandler}
                style={[{ borderWidth: 1, borderColor: input_color_theme.primary, backgroundColor: Colors.WHITE }]}
            // onChangeText={text => { }}
            />
 */

/**
 *             {IsEmpty(props.labal) && <Text style={[AppStyles.fieldLabelText, { color: input_color_theme?.textTitle }]}>my label</Text>}
          

                <TextInput
                    {...props}
                    //  onFocus={() => set_start_editing(true)}
                    style={[AppStyles.textInput, { borderRadius: 4, borderWidth: 1, borderColor: input_color_theme.primary }]}
                    value={inputState.value}
                    onChangeText={(text) => textChangeHandler(text)}
                    onBlur={lostFocusHandler}
                    inputAccessoryViewID={'uniqueID'}
                    textAlignVertical="top"
                /> 
 */