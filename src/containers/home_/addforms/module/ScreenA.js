import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native'
import { StateContext } from './AddModuleInfo'
import { Container, Input, Header,  } from 'components'
import Item from '../../subject_list/comp/Item'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'



const _custom_styles_options = [
    {
        id: '1',
        text: 'B',
        style: { fontWeight: 'bold' },
        isSelected: false
    },
    {
        id: '2',
        text: 'I',
        style: { fontStyle: 'italic' },
        isSelected: false
    },
    {
        id: '3',
        text: 'S',
        style: { fontSize: 25 },
        isSelected: false
    },
    {
        id: '4',
        text: 's',
        style: { fontSize: 16 },
        isSelected: false
    },
]

const ScreenA = () => {
    let [custom_styles_options, set_custom_styles_options] = useState(_custom_styles_options);
    let [custom_style, set_custom_style] = useState({});

    const stateContext = useContext(StateContext)

    const update_custom_styles_options = (item, index) => {
        const array = [...custom_styles_options];

        // Icustom_stylef multiple select is enabled
        array[index]['isSelected'] = !array[index]['isSelected'];

        set_custom_styles_options(array);
        set_custom_style({ ...custom_style, ...item.style })
    };

    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'flex-end' }}>
                    {
                        custom_styles_options.map((item, index) => <TouchableOpacity
                            key={item.id}
                            onPress={() => update_custom_styles_options(item, index)}
                            style={{
                                height: 25, width: 25, justifyContent: 'center', margin: 2, alignItems: 'center'
                                , backgroundColor: item?.isSelected ? 'yellow' : 'pink'
                            }}>
                            <Text style={{ ...item.style }}>{item.text}</Text>
                        </TouchableOpacity>
                        )
                    }
                </View>
                <Input
                    onBlur={() => stateContext.inputStyleHandler('text', custom_style)}
                    id='text'
                    style={custom_style}
                    labal='Text'
                    errorText='Wrong Title'
                    initialValue={''}
                    initialValid={true}
                    onInputChange={stateContext.dispatch}
                    required
                />
                <Button title={'add'}/>
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

const styles = StyleSheet.create({})
