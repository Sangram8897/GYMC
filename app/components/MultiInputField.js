
import { StyleSheet, TouchableOpacity, Text, View, NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, } from 'react-native'
import React, { useRef, useState, useEffect, useReducer } from 'react'
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons'
import _ from 'lodash'
import FieldStateNotifier from './field_state_notifier';

const INPUT_CHANGE = 'INPUT_CHANGE';
const STATE_UPDATE_ON_INITIALIZATION = 'STATE_UPDATE_ON_INITIALIZATION'

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            let change_state_inputs = [...state?.inputs]
            let change_inputs_string = '';
            let updated_value_inputs = change_state_inputs.map((item, index) => {
                if (action.index == index) {
                    change_inputs_string += action?.value ? action.value : ''
                    return {
                        ...item,
                        value: action?.value ? action.value : ''
                    }
                } else {
                    change_inputs_string += item?.value ? item?.value : ''
                    return item
                }
            })
            return {
                ...state,
                inputs: updated_value_inputs,
                inputs_string: change_inputs_string,
                isValid: checkRegexForDocument(change_inputs_string, state.fieldDataType)
            }

        case STATE_UPDATE_ON_INITIALIZATION:
            const initial_state_inputs = [...state?.inputs]
            let initial_inputs_string = '';
            const initial_updated_state_inputs = initial_state_inputs.map((item) => {
                let slice_value = action.document.slice(item.string_pos[0], item.string_pos[1])
                initial_inputs_string += slice_value ? slice_value : ''
                return {
                    ...item,
                    value: slice_value
                }
            })
            return {
                ...state,
                inputs: initial_updated_state_inputs,
                isValid: checkRegexForDocument(initial_inputs_string, state.fieldDataType),
            }

        default:
            return state;
    }
}

const checkRegexForDocument = (document, fieldDataType) => {
    if (fieldDataType == 'PAN_CARD') {
        let pan_regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
        return pan_regex.test(document)
    } else if (fieldDataType == 'AADHAR') {
        const aadhar_regex = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
        return aadhar_regex.test(document)
    } else {
        return false
    }
}

const MultiInputField = ({ value, label, isMasking, onInputChange = () => { }, index_history, onPress, isOnboardingVerificationType, disabled, fieldDataType }) => {
    const inputRefs = useRef([])

    const [masking, set_masking] = useState(isMasking)

    const [inputState, dispatch] = useReducer(inputReducer, {
        ...verificationCompConfig[fieldDataType],
        isValid: false,
        touched: false,
        inputs_string: '',
    });

    useEffect(() => {
        setInitialData(value, inputState)
    }, [])

    useEffect(() => {
        onInputChange('123', inputState?.inputs_string, index_history)
    }, [inputState?.inputs_string])

    const setInitialData = async (document, data) => {
        if (data?.fieldLength) {
            if (data?.fieldLength != document.length) {
                console.log('MultiInputField', document, 'provided value length not matching with format')
                return
            }
        }
        if (document && checkRegexForDocument(document, fieldDataType)) {
            dispatch({ type: STATE_UPDATE_ON_INITIALIZATION, document: document })
        }
    }

    const onChangeValue = (text, index) => {
        dispatch({ type: INPUT_CHANGE, index: index, value: text, isValid: true })
    }

    const handleChange = (text, index, inputLength) => {
        if (text && inputState?.inputValuePattern && !inputState.inputValuePattern.test(text)) {
            return
        }
        onChangeValue(text, index)

        if (text && text.length >= inputLength) {
            return inputRefs.current[index + 1]?.focus()
        } else if (text && text.length != 0) {
            return
        }
        return inputRefs.current[index - 1]?.focus()
    }

    const handleBackspace = (event, index, inputLength, value) => {
        const { nativeEvent } = event
        if (nativeEvent.key === 'Backspace') {
            if (_.isEmpty(value)) {
                handleChange('', index, inputLength)
            }
        }
    }

    return (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={[{ color: 'skyblue', marginBottom: 6, fontSize: 12 }]}>
                { label ? label : 'My Label' }
            </Text>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    {
                        inputState?.inputs.length > 0 &&
                        inputState?.inputs.map((item, index) => {
                            return <TextInput
                                autoCapitalize={'characters'}
                                ref={ref => {
                                    if (ref && !inputRefs?.current?.includes(ref)) {
                                        inputRefs.current = [...inputRefs.current, ref]
                                    }
                                }}
                                letterSpacing={5}
                                key={index}
                                value={item?.value ? item?.value?.toString() : ''}
                                // autoFocus={index == 0}
                                //returnKeyType={inputState.isValid ? 'done' : 'next'}
                                style={[styles.input, {
                                    flex: item?.inputLength ? item?.inputLength : 1,
                                    marginHorizontal: 3,
                                    borderWidth: 1,
                                    borderColor: inputState?.isValid ? 'skyblue' : 'red',
                                    backgroundColor: '#FFF',
                                    textAlign: 'center'
                                }]}
                                maxLength={item?.inputLength}
                                contextMenuHidden={true}
                                selectTextOnFocus={true}
                                //  editable={!disabled}
                                keyboardType={item?.keyboardType}
                                testID={`OPTInput-${index}`}
                                textAlignVertical={'top'}
                                secureTextEntry={masking}
                                onChangeText={(text) => {
                                    handleChange(text, index, item?.inputLength)
                                }}
                                onKeyPress={event => {
                                    handleBackspace(event, index, item?.inputLength, item?.value)
                                }}
                            />
                        })
                    }
                </View>
                <TouchableOpacity
                    disabled={!inputState?.isValid}
                    onPress={() => onPress(inputState?.inputs_string)}
                    style={{ marginHorizontal: 4 }}
                >
                    {isOnboardingVerificationType ? <View style={[{ backgroundColor: !inputState?.isValid ? 'grey' : 'skyblue', borderRadius: 4 }]}>
                        <Text style={[{ color: inputState?.isValid ? 'white' : 'gray' }]}>{'Verify'}</Text>
                    </View> :
                        <FontAwesome
                            name={'shield-check-outline'}
                            color={'green'}
                            size={20}
                        />}
                </TouchableOpacity>
            </View>
            <FieldStateNotifier />
        </View>
    )
}

export default MultiInputField;

const verificationCompConfig = {
    'OTP': {
        fieldDataType: 'OTP',
        inputValuePattern: /^[0-9]+$/,
        fieldLength: 6,
        catchValidValue: true,
        inputs: [
            {
                id: '1',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [0, 1],
            },
            {
                id: '2',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [1, 2],
            },
            {
                id: '3',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [2, 3],
            },
            {
                id: '3',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [3, 4],
            },
            {
                id: '4',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [4, 5],
            },
            {
                id: '5',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [5, 6],
            },
            {
                id: '6',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [6, 7],
            },
        ]
    },
    'AADHAR': {
        fieldDataType: 'AADHAR',
        inputValuePattern: /^[0-9]+$/,
        catchValidValue: true,
        fieldLength: 12,
        inputs: [
            {
                id: '1',
                inputLength: 4,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [0, 4],
            },
            {
                id: '2',
                inputLength: 4,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [4, 8],
            },
            {
                id: '3',
                inputLength: 4,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [8, 12],
            },
        ]
    },
    'PAN_CARD': {
        fieldDataType: 'PAN_CARD',
        inputValuePattern: /^[A-Za-z0-9]*$/,
        catchValidValue: true,
        fieldLength: 10,
        inputs: [
            {
                id: '1',
                inputLength: 5,
                regex: '',
                value: '',
                keyboardType: 'ascii-capable',
                string_pos: [0, 5],
            },
            {
                id: '2',
                inputLength: 4,
                regex: '',
                value: '',
                keyboardType: 'number-pad',
                string_pos: [5, 9],
            },
            {
                id: '3',
                inputLength: 1,
                regex: '',
                value: '',
                keyboardType: 'ascii-capable',
                string_pos: [9, 10],
            },
        ]
    },
}


const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        height: 45,
        width: 40,
        textAlign: 'auto',
        color: 'gray',
        backgroundColor: '#FFF',
        borderRadius: 5
    }
})

