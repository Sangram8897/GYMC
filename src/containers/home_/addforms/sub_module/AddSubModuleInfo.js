import React, { useEffect, useReducer, useCallback, useState, useContext } from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import InputScrollView from 'react-native-input-scroll-view';
import firestore from '@react-native-firebase/firestore';

import { Container, Input, Header, Button } from 'components'
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../../../store/actions';
import { ColorThemeContext } from '../../../../context/theme_context';


export const StateContext = React.createContext();

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

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
            formIsValid: updatedFormIsValid,
            inputValues: updatedValues,
            inputValidities: updatedValidities,
        }
    }
    return state;
}

const inintialState = {
    inputValues: {
        title: '',
        short_desc: '',
        description: '',
    },
    inputValidities: {
        title: false,
        short_desc: false,
        description: false
    },
    formIsValid: false
}

const AddSubModuleInfo = ({ navigation }) => {
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, inintialState);
    let [_screens, set_screens] = useState({ 0: true, 1: false })
    const { Colors, ToggleTheme } = useContext(ColorThemeContext);

    const module_ID = useSelector(state => state.SubModuleListReducer.module_ID);

    const subject_ID = useSelector(state => state.ModuleListReducer.subject_ID);

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        }, [dispatchFormState]);

    // useEffect(() => {
    //     abc(0)
    // }, [])

    const abc = (index) => {
        let myObject = { ..._screens };
        //Object.keys(myObject).map((value, placeindex) => console.warn('value',  placeindex))
        Object.keys(myObject).map((value, placeindex) =>
            placeindex === index
                ? (myObject[placeindex] =
                    !myObject[placeindex])
                : (myObject[placeindex] = false),
        );
        set_screens(myObject)
    }

    const onSubmit = () => {
        Keyboard.dismiss()
        if (_screens[0] == true) {
            //firestore().collection("Users").doc(profile.id.toString()).collection("groupMetaData").doc(thread.id.trim().toString());
            firestore()
                .collection('store')
                .doc(subject_ID)
                .collection("modules")
                .doc(module_ID)
                .collection("sub_modules")
                .add({
                    title: formState.inputValues.title,
                    short_desc: formState.inputValues.short_desc,
                    //description: formState.inputValues.description,
                })
                .then(() => {
                    console.warn('User added!');
                });

            dispatch(ACTIONS.get_sub_modules_lists(subject_ID, module_ID))
            return
        }
        // abc(1)
    }

    return (
        <StateContext.Provider value={{ state: formState, dispatch: inputChangeHandler }}>
            <Container>
                <Header
                    showBackButton={true}
                    onBackButtonPress={() => navigation.goBack()}
                    showPlusButton={true}
                    onPlusButtonPress={() => ToggleTheme()}
                />
                <View style={{ flex: 1, marginTop: 20 }}>

                    {
                        //Platform.OS == 'ios' && <InputDone />
                    }

                    <InputScrollView>
                        {
                            console.warn('cc', _screens, _screens['0'], Object.keys(_screens).length)
                        }

                        {_screens[0] == true && <ScreenA />}
                        {_screens[1] == true && <ScreenB />}
                    </InputScrollView>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>

                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={() => {
                                Keyboard.dismiss()
                                // abc(0)
                                //  Keyboard.dismiss()
                                // navigation.goBack();
                            }}
                            label={'RESET'}
                            textColor={'yellow'}
                            backgroundColor={'black'}
                            // borderColor={Colors.COLOR_INACTIVE}
                            borderWidth={0} />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button
                            onPress={onSubmit}
                            label={'SAVE'}
                            textColor={'white'}
                            backgroundColor={'yellow'}
                            borderColor={'gray'}
                            borderWidth={0} />
                    </View>

                </View>
            </Container>
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