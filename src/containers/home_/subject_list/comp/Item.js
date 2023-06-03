import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';

import randomColors from '../../../../style/randomColors';
import ACTIONS from '../../../../store/actions';

let a = `<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.desc}><Text style={styles.def}>{def} 
</Text>{desc}</Text><Text>`

const Item = ({ item, index, navigation }) => {
    const dispatch = useDispatch();
    return (<TouchableOpacity
        onPress={async () => {
            await dispatch(ACTIONS.set_subject_id(item.id))
            navigation.navigate('ModulesList', { subject_ID: item.id })
        }}
        style={[styles.item, { backgroundColor: randomColors[index % randomColors.length] }]}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
    </TouchableOpacity>)
};

export default Item

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',
        height: 80,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        elevation: 2,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'gray'
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 20,
        flexShrink: 1,
    },
    def: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FF0B46',
        fontSize: 16,
        color: 'black',
        flexShrink: 1,
    },
    desc: {
        fontFamily: 'Montserrat-Regular',
        color: '#FF0B46',
        fontSize: 16,
        color: 'gray',
        flexShrink: 1,
    },
    code: {
        fontFamily: 'Poppins-Italic',
        fontSize: 14,
        color: 'gray',
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