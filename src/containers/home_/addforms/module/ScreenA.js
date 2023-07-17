import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native'
import { StateContext } from './AddModuleInfo'
import { Container, Input, Header, } from 'components'
import Item from '../../subject_list/comp/Item'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'
const ADD_FONT_SIZE = 'ADD_FONT_SIZE'
const ADD_COMMON_STYLES = 'ADD_COMMON_STYLES'

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            ...state,
            formIsValid: updatedFormIsValid,
            inputValues: updatedValues,
            inputValidities: updatedValidities,
        }
    }
    if (action.type === FORM_INPUT_STYLE_UPDATE) {
        const updatedStyles = {
            ...state.styleValues,
            [action.input]: action.style,
        };
        return {
            ...state,
            styleValues: updatedStyles,
        }
    }
    return state;
}

const module_desc = [
    {
        id: '1',
        text: 'Redux',
        style: { fontWeight: 'bold' },
    },
    {
        id: '2',
        text: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
        style: { fontStyle: 'italic' },
    }
]

const _custom_styles_options = [
    {
        id: '1',
        text: 'B',
        input_type: 'BUTTON',
        style: { fontWeight: 'bold' },
        isSelected: false
    },
    {
        id: '2',
        text: 'I',
        input_type: 'BUTTON',
        style: { fontStyle: 'italic' },
        isSelected: false
    },
    {
        id: '3',
        text: 'I',
        input_type: 'INPUT',
        style: { fontSize: 16 },
        isSelected: false
    },
]

const ScreenA = () => {
    let [custom_styles_options, set_custom_styles_options] = useState(_custom_styles_options);
    let [custom_style, set_custom_style] = useState({});

    const [text, onChangeText] = React.useState('Useless Text');
    const [text_style, onChangeText_style] = React.useState({});
    const [fontSize, onChange_fontSize] = React.useState(16);
    const stateContext = useContext(StateContext)

    const update_custom_styles_options = (item, index,text) => {
        const array = [...custom_styles_options];

        // Icustom_stylef multiple select is enabled
        array[index]['isSelected'] = !array[index]['isSelected'];

        set_custom_styles_options(array);

        if (fontSize && item.input_type == 'INPUT') {
            onChangeText_style({ ...text_style, fontSize: text })
        } else {
            onChangeText_style({ ...text_style, ...item.style })
        }

        //   set_custom_style({ ...custom_style, ...item.style })
    };

    const update_custom_styles_options_ = (item, index,text) => {
        const array = [...custom_styles_options];

        // Icustom_stylef multiple select is enabled
        array[index]['isSelected'] = !array[index]['isSelected'];

        // set_custom_styles_options(array);

        // if (fontSize && item.input_type == 'INPUT') {
        //     onChangeText_style({ ...text_style, fontSize: text })
        // } else {
        //     onChangeText_style({ ...text_style, ...item.style })
        // }

        //   set_custom_style({ ...custom_style, ...item.style })
    };
    
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'flex-end' }}>
                    {
                        custom_styles_options.map((item, index) => {
                            if (item.input_type == 'INPUT') {
                                return <TextInput value={fontSize.toString()}
                                    keyboardType={'number-pad'}
                                    onChangeText={(text) => update_custom_styles_options(item, index, text)}
                                    style={{ width: 80 }}
                                ></TextInput>
                            }

                            return (<TouchableOpacity
                                key={item.id}
                                onPress={() => update_custom_styles_options(item, index)}
                                style={{
                                    height: 25, width: 25, justifyContent: 'center', margin: 2, alignItems: 'center'
                                    , backgroundColor: item?.isSelected ? '#CACACA' : '#FFF'
                                }}>
                                <Text style={{ ...item.style }}>{item.text}</Text>
                            </TouchableOpacity>)
                        }
                        )
                    }
                </View>
                {/* <Input
                    multiline={true}
                    numberOfLines={4}
                    onBlur={() => stateContext.inputStyleHandler('text', custom_style)}
                    id='text'
                    style={{ ...styles.input, ...custom_style }}
                    labal=''
                    errorText='Wrong Title'
                    initialValue={''}

                    initialValid={true}
                    onInputChange={stateContext.dispatch}
                    required
                /> */}

                <TextInput
                    style={{ ...styles.input2, ...text_style }}
                    onBlur={() => { }}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                    multiline={true}
                    numberOfLines={4}
                />

            </View>

            {/* <Input
                id='short_desc'
                labal='Short Description'
                errorText='Wrong Password'
                initialValue={''}
                initialValid={true}
                numberOfLines={5}
                onInputChange={stateContext.dispatch}
                required
            /> */}

        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderColor: 'gray',
        borderRadius: 5
    },
    input2: {
        borderRadius: 7,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFF',
        borderColor: 'gray'
    },
})
