import React, { useEffect, useReducer, useCallback, useState, useContext } from 'react'
import { StyleSheet, FlatList, Text, View, Keyboard } from 'react-native'

import renderFields from './render_fields';
import MY_DATA from './configs/loan_config_dt_page_test';

export const StateContext = React.createContext();

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

function modifyDataByIndex(array, text, index_history) {
    let data = [...array]
    const currentIndex = index_history.shift();
    if (data[currentIndex]) {
        const newData = data[currentIndex]
        if (index_history?.length == 0) {
            newData.value = text
        }
        const { fields, id, sectionContent } = data[currentIndex];
        if (fields && index_history) {
            newData.fields = modifyDataByIndex(fields, text, index_history);
        }
        else if (sectionContent?.fields && index_history) {
            newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, text, index_history);
        }
        else if (sectionContent?.config?.options && index_history) {
            newData.sectionContent.config.options = modifyDataByIndex(sectionContent.config.options, text, index_history);
        }
    }
    return data
}
const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_CHANGE = 'INPUT_CHANGE';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_INPUT_UPDATE':
            let fields_state_data = [...state.data]
            let index_history_ = [...action.index_array]
            let updated_fields_state_data = modifyDataByIndex(fields_state_data, action.value, index_history_)
            return {
                ...state,
                data: updated_fields_state_data
            }

        case 'SET_FORM_RENDERED':
            return {
                ...state,
                form_rendered: true
            }
        default:
            return state;
    }
}

const AddSubModuleInfo = ({ data }) => {
    const [formState, dispatchFormState] = useReducer(formReducer, {
        data: data,
        index_array: null,
        form_rendered: false
    });

    useEffect(() => {
        dispatchFormState({ type: 'SET_FORM_RENDERED' })
    }, [])


    // const inputChangeHandler = (inputIdentifier, inputValue, index_array) => {
    //     console.log(inputValue, index_array);
    //     // dispatchFormState({
    //     //     type: FORM_INPUT_UPDATE,
    //     //     value: inputValue,
    //     //     index_array: index_array,
    //     // })
    // };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, index_array) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                index_array: index_array,
            })
        }, [dispatchFormState]);


    const onSubmit = () => {

    }

    console.log('formState', formState);
    return (
        <StateContext.Provider value={{ state: formState, dispatch: inputChangeHandler }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={formState?.data}
                    renderItem={({ item, index }) => renderFields(item, index, [item.id], [index], inputChangeHandler)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </StateContext.Provider>
    )
}

export default AddSubModuleInfo

const styles = StyleSheet.create({})































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