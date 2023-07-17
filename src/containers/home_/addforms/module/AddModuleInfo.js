import React, { useEffect, useReducer, useCallback, useState, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import InputScrollView from 'react-native-input-scroll-view';
import firestore from '@react-native-firebase/firestore';

import { Container, Input, Header, Button } from 'components'
import { FontFamily, Colors } from 'style';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { useSelector } from 'react-redux';
import ACTIONS from '../../../../store/actions';
import { useDispatch } from 'react-redux';
import { ColorThemeContext } from '../../../../context/theme_context';

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

// update_custom_styles_options
const AddModuleInfo = ({ navigation }) => {
    const dispatch = useDispatch();
    const { Colors, ToggleTheme } = useContext(ColorThemeContext);
    let [module, set_module] = useState({
        text: '',
        style: {}
    });
    const [custom_styles_options, set_custom_styles_options] = useState(_custom_styles_options);
    let [text_list, set_text_list] = useState([]);

    const update_custom_styles_options = (item, index) => {
        const array = [...custom_styles_options];

        // Icustom_stylef multiple select is enabled
        array[index]['isSelected'] = !array[index]['isSelected'];

        set_custom_styles_options(array);
        set_module({ ...module, style: { ...module.style, ...item.style } })
    };

    const onChangeText = (text) => {
        set_module({ ...module, text: text })
    }

    const addToTextList = () => {
        console.log('text_list',);
        set_text_list([
            ...text_list,
            module
        ])
        set_module({
            text: '',
            style: {}
        })
        set_custom_styles_options(_custom_styles_options)
    }

    console.log('text_list', text_list);
    return (
        <Container>
            <Header
                activeColor={Colors.COLOR_TEXT_TITLE}
                inActiveColor={Colors.COLOR_TEXT_TITLE}
                showBackButton={true}
                onBackButtonPress={() => navigation.goBack()}
                showPlusButton={true}
                onPlusButtonPress={() => ToggleTheme()}
            />

            <FlatList
                style={{ padding: 12 }}
                renderItem={({ item, index }) => <Text style={item.style}>{item.text}</Text>}//
                data={text_list}
                keyExtractor={(item, index) => item.id}
            />

            <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'flex-end' }}>
                {
                    custom_styles_options.map((item, index) => {
                        if (item.input_type == 'INPUT') {
                            return <TextInput
                               // onBlur={() => update_custom_styles_options(item, index)}
                               // style={{ fontSize: parseInt(item?.style?.fontSize)>0 ? parseInt(item?.style?.fontSize) : 16 }}
                                value={item?.style?.fontSize ? item?.style?.fontSize.toString() : ''}
                                keyboardType={'number-pad'}
                                onChangeText={(text) => {
                                    //  if (parseInt(text) > 0){
                                    const array = [...custom_styles_options];
                                    array[index]['style'].fontSize = parseInt(text)
                                    set_custom_styles_options(array)
                                    update_custom_styles_options(item, index)
                                    //  }else{
                                    //     const array = [...custom_styles_options];
                                    //     array[index]['style'].fontSize = ''
                                    //     set_custom_styles_options(array)
                                    //  }
                                    // set_module({ ...module, style: { ...module.style, fontSize: parseInt(text) } })
                                }}
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
                    })
                }
            </View>

            <TextInput
                style={{ ...styles.input2, ...module.style }}
                onBlur={() => { }}
                onChangeText={onChangeText}
                value={module.text}
                placeholder="useless placeholder"
                keyboardType="numeric"
                multiline={true}
            // numberOfLines={4}
            />
            <Button label={'Add'} style={{ backgroundColor: 'red' }} onPress={addToTextList} />

        </Container>
    )
}

export default AddModuleInfo

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




// import React, { useEffect, useReducer, useCallback, useState, useContext } from 'react'
// import { StyleSheet, Text, View, FlatList, Keyboard } from 'react-native'
// import InputScrollView from 'react-native-input-scroll-view';
// import firestore from '@react-native-firebase/firestore';

// import { Container, Input, Header, Button } from 'components'
// import { FontFamily, Colors } from 'style';
// import ScreenA from './ScreenA';
// import ScreenB from './ScreenB';
// import { useSelector } from 'react-redux';
// import ACTIONS from '../../../../store/actions';
// import { useDispatch } from 'react-redux';
// import { ColorThemeContext } from '../../../../context/theme_context';

// export const StateContext = React.createContext();

// const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
// const FORM_INPUT_STYLE_UPDATE = 'FORM_INPUT_STYLE_UPDATE';

// const formReducer = (state, action) => {
//     if (action.type === FORM_INPUT_UPDATE) {
//         const updatedValues = {
//             ...state.inputValues,
//             [action.input]: action.value,
//         };
//         const updatedValidities = {
//             ...state.inputValidities,
//             [action.input]: action.isValid,
//         };
//         let updatedFormIsValid = true;
//         for (const key in updatedValidities) {
//             updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
//         }
//         return {
//             ...state,
//             formIsValid: updatedFormIsValid,
//             inputValues: updatedValues,
//             inputValidities: updatedValidities,
//         }
//     }
//     if (action.type === FORM_INPUT_STYLE_UPDATE) {
//         const updatedStyles = {
//             ...state.styleValues,
//             [action.input]: action.style,
//         };
//         return {
//             ...state,
//             styleValues: updatedStyles,
//         }
//     }
//     return state;
// }

// const inintialState = {
//     inputValues: {
//         text: '',
//     },
//     inputValidities: {
//         text: false,
//     },
//     styleValues: {
//         text: {},
//     },
//     formIsValid: false
// }

// const module_desc = [
//     {
//         id: '1',
//         text: 'Redux',
//         style: { fontWeight: 'bold' },
//     },
//     {
//         id: '2',
//         text: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
//         style: { fontStyle: 'italic' },
//     }
// ]

// const AddModuleInfo = ({ navigation }) => {
//     const dispatch = useDispatch();

//     const [formState, dispatchFormState] = useReducer(formReducer, inintialState);
//     let [_screens, set_screens] = useState({ 0: true, 1: false });

//     let [text_list, set_text_list] = useState([]);
//     const subject_ID = useSelector(state => state.ModuleListReducer.subject_ID);
//     const { Colors, ToggleTheme } = useContext(ColorThemeContext);

//     const inputChangeHandler = useCallback(
//         (inputIdentifier, inputValue, inputValidity) => {
//             dispatchFormState({
//                 type: FORM_INPUT_UPDATE,
//                 value: inputValue,
//                 isValid: inputValidity,
//                 input: inputIdentifier
//             })
//         }, [dispatchFormState]);

//     const inputStyleHandler = (inputIdentifier, inputstyle) => {
//         dispatchFormState({
//             type: FORM_INPUT_STYLE_UPDATE,
//             input: inputIdentifier,
//             style: inputstyle,
//         })
//     }

//     const abc = (index) => {
//         let myObject = { ..._screens };
//         //Object.keys(myObject).map((value, placeindex) => console.warn('value',  placeindex))
//         Object.keys(myObject).map((value, placeindex) =>
//             placeindex === index
//                 ? (myObject[placeindex] =
//                     !myObject[placeindex])
//                 : (myObject[placeindex] = false),
//         );
//         set_screens(myObject)
//     }

//     const addToTextList = async () => {
//         let new_item = {
//             text: formState?.inputValues?.text,
//             style: formState?.styleValues?.text,
//         }
//         set_text_list([
//             ...text_list,
//             new_item
//         ])
//     }

//     const onSubmit = () => {

//         Keyboard.dismiss()

//         firestore()
//             .collection('store')
//             .doc(subject_ID)
//             .collection("modules")
//             .add({
//                 module_text: text_list,
//                 //style: formState?.styleValues?.text,
//                 //description: formState.inputValues.description,
//             })
//             .then(() => {
//                 console.warn('Module added!');
//             });
//         dispatch(ACTIONS.get_modules_lists(subject_ID));
//         navigation.goBack()
//     }

//     console.log('formState!', formState);
//     return (
//         <StateContext.Provider value={{ state: formState, dispatch: inputChangeHandler, inputStyleHandler: inputStyleHandler }}>
//             <Container>
//                 <Header
//                   activeColor={Colors.COLOR_TEXT_TITLE}
//                   inActiveColor={Colors.COLOR_TEXT_TITLE}
//                     showBackButton={true}
//                     onBackButtonPress={() => navigation.goBack()}
//                     showPlusButton={true}
//                     onPlusButtonPress={() => ToggleTheme()}
//                 />
//                 <FlatList
//                     style={{ padding: 12 }}
//                     renderItem={({ item, index }) => <Text style={item.style}>{item.text}</Text>}
//                     data={text_list}
//                     keyExtractor={(item, index) => item.id}
//                 />

//                 <View style={{ flex: 1, marginTop: 20 }}>
//                     <InputScrollView>

//                         <ScreenA />
//                         <Button
//                             onPress={addToTextList}
//                             label={'ADD'}
//                             textColor={'pink'}
//                             backgroundColor={'black'}
//                             // borderColor={Colors.COLOR_INACTIVE}
//                             borderWidth={0} />
//                         {/* <Button title={'add'} onPress={addToTextList} /> */}
//                     </InputScrollView>
//                 </View>
//                 <View style={{ width: '100%', flexDirection: 'row' }}>
//                     <View style={{ flex: 1 }}>
//                         {/* <Button title={'SAVE'} onPress={onSubmit} /> */}
//                         <Button
//                             onPress={onSubmit}
//                             label={'RESET'}
//                             textColor={'pink'}
//                             backgroundColor={'black'}
//                             // borderColor={Colors.COLOR_INACTIVE}
//                             borderWidth={0} />
//                     </View>

//                     <View style={{ flex: 1 }}>
//                         {/* <Button
//                             onPress={onSubmit}
//                             label={'SAVE'}
//                             textColor={'white'}
//                             backgroundColor={'pink'}
//                             borderColor={'gray'}
//                             borderWidth={0} /> */}
//                     </View>

//                 </View>
//             </Container>
//         </StateContext.Provider>
//     )
// }

// export default AddModuleInfo

// const styles = StyleSheet.create({})































// import { KeyboardAwareScrollView, KeyboardAwareListView } from 'react-native-keyboard-aware-scrollview'
// import React, { useEffect, useReducer, useCallback } from 'react'
// import { View, Text, StyleSheet, Platform, Keyboard, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
// import InputScrollView from 'react-native-input-scroll-view';
// import InputDone from '../../../components/InputDone.ios';
// import { Container, Input, Header, Button } from 'components'
// import { FontFamily, Colors } from 'style';
// import firestore from '@react-native-firebase/firestore';

// const inintialState = {
//     inputValues: {
//         title: '',
//         short_desc: '',
//         description: '',
//     },
//     inputValidities: {
//         title: false,
//         short_desc: false,
//         description: false
//     },
//     formIsValid: false
// }
// export default function AddSubModuleInfo({ navigation }) {

//     const [formState, dispatchFormState] = useReducer(formReducer, inintialState);

//     const inputChangeHandler = useCallback(
//         (inputIdentifier, inputValue, inputValidity) => {
//             dispatchFormState({
//                 type: FORM_INPUT_UPDATE,
//                 value: inputValue,
//                 isValid: inputValidity,
//                 input: inputIdentifier
//             })
//         }, [dispatchFormState]);

//     useEffect(() => {

//         // firestore()
//         //     .collection('Users')
//         //     .doc('ABC')
//         //     .set({
//         //         name: 'Ada Lovelace',
//         //         age: 30,
//         //     })
//         //     .then(() => {
//         //         console.log('User added!');
//         //     });

//     }, [])

//     return (
//         <Container isLoading={false}>
//             <Header
//                 showBackButton={true}
//                 onBackButtonPress={() => navigation.goBack()}
//             />
//             <View style={{ flex: 1 }}>

//                 {Platform.OS == 'ios' && <InputDone />}

//                 <InputScrollView>

//                     <Input
//                         id='title'
//                         labal='title'
//                         errorText='Wrong title'
//                         initialValue={formState.inputValues.title}
//                         initialValid={formState.inputValidities.title}
//                         onInputChange={inputChangeHandler}
//                         required
//                     />
//                     <Input
//                         id='short_desc'
//                         labal='short_desc'
//                         errorText='Wrong short_desc'
//                         initialValue={formState.inputValues.short_desc}
//                         initialValid={formState.inputValidities.short_desc}
//                         onInputChange={inputChangeHandler}
//                         required />


//                 </InputScrollView>
//             </View>
//             <View style={{ width: '100%', flexDirection: 'row' }}>
//                 <View style={{ flex: 1 }}>
//                     <Button
//                         onPress={() => {
//                             Keyboard.dismiss()
//                             navigation.goBack();
//                             //onSubmit()
//                         }}
//                         label={'RESET'}
//                         backgroundColor={'#FF0B46'}
//                         borderColor={Colors.COLOR_INACTIVE}
//                         borderWidth={0} />
//                 </View>
//                 <View style={{ flex: 1 }}>
//                     <Button
//                         onPress={() => {
//                             Keyboard.dismiss()
//                             console.warn('foe', formState.inputValues)
//                             //navigation.navigate('AddDesc');
//                             // onSubmit()
//                         }}
//                         label={'NEXT'}
//                         backgroundColor={'#3360A0'}
//                         borderColor={Colors.COLOR_INACTIVE}
//                         borderWidth={0} />
//                 </View>

//             </View>

//         </Container>
//     )
// }

// const styles = StyleSheet.create({

// });

// const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

// const formReducer = (state, action) => {
//     if (action.type === FORM_INPUT_UPDATE) {
//         const updatedValues = {
//             ...state.inputValues,
//             [action.input]: action.value,
//         };
//         const updatedValidities = {
//             ...state.inputValidities,
//             [action.input]: action.isValid,
//         };
//         let updatedFormIsValid = true;
//         for (const key in updatedValidities) {
//             updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
//         }
//         return {
//             formIsValid: updatedFormIsValid,
//             inputValues: updatedValues,
//             inputValidities: updatedValidities,
//         }

//     }
//     return state;
// }