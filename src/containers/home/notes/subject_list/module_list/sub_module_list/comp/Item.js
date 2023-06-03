import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { ColorThemeContext } from '../../../../../../../context/theme_context';

let a = `<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.desc}><Text style={styles.def}>{def} 
</Text>{desc}</Text><Text>`
let b = `Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.`
const Item = ({ title, navigation }) => {
    const dispatch = useDispatch();
    const Theme = useContext(ColorThemeContext).Colors;
    console.warn('item', title)
    return (<TouchableOpacity
        style={[styles.item, { backgroundColor: Theme.COLOR_TYPE_2 }]}>
        <Text style={[styles.title, { color: Theme.COLOR_TYPE_5 }]} numberOfLines={1}>{title}</Text>
        <Text style={[styles.desc, { color: Theme.COLOR_TYPE_8 }]} numberOfLines={5}>{b}</Text>

    </TouchableOpacity>)
}

export default Item

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',

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
        color: 'black',
        fontSize: 18,
        flexShrink: 1,
    },
    def: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FF0B46',
        fontSize: 14,
        color: 'black',
        flexShrink: 1,
    },
    desc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: '#CCCCCC',
        marginTop: 4,
    },
    code: {
        fontFamily: 'Poppins-Italic',
        fontSize: 14,
        color: '#CCCCCC',
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