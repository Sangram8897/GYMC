import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import Colors from 'style/Colors';
import { ColorThemeContext } from '../../../../../context/ThemeContext';
import ACTIONS from '../../../../../store/actions';
import randomColors from '../../../../../style/randomColors';

let a = `<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.desc}><Text style={styles.def}>{def} 
</Text>{desc}</Text><Text>`
let b = `Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.`
const Item = ({ item, index, navigation }) => {
    const dispatch = useDispatch();
    const Theme = useContext(ColorThemeContext).Colors;

    return (<TouchableOpacity
        onPress={async () => {
            await dispatch(ACTIONS.set_subject_id(item.id))
            navigation.navigate('ModulesList', { subject_ID: item.id })
        }}
        style={[styles.item, { backgroundColor: Theme.COLOR_TYPE_2 }]}>
        <Text style={[styles.title, { color: Theme.COLOR_TYPE_5 }]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.desc, { color: Theme.COLOR_TYPE_8 }]} numberOfLines={5}>{b}</Text>
    </TouchableOpacity>)
};

export default Item

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: Colors.COLOR_WHITE,

        padding: 16,
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 5,
        elevation: 2,
        borderRadius: 8,
        // borderWidth: 2,
        // borderColor: Colors.COLOR_GRAY
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: Colors.COLOR_BLACK,
        fontSize: 18,
        flexShrink: 1,
    },
    def: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FF0B46',
        fontSize: 14,
        color: Colors.COLOR_BLACK,
        flexShrink: 1,
    },
    desc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: Colors.COLOR_INACTIVE,
        marginTop: 4,
    },
    code: {
        fontFamily: 'Poppins-Italic',
        fontSize: 14,
        color: Colors.COLOR_INACTIVE,
        flexShrink: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});