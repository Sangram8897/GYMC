import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch } from 'react-redux';
import ACTIONS from '../../../../../../store/actions';
import { ColorThemeContext } from '../../../../../../context/theme_context';

let a = `<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.desc}><Text style={styles.def}>{def} 
</Text>{desc}</Text><Text>`
let b = `Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.`
const Item = ({ item, navigation }) => {
    const dispatch = useDispatch();
    const Theme = useContext(ColorThemeContext).Colors;
    console.log('Sometimes', item);

    const renderText = ({ item }) => {
        return (
            <View>
                <Text style={item.style}>{item.text}</Text>
            </View >
        )
    }

    return (
        <View
            style={[styles.item,]}
        >
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={async () => {
                    await dispatch(ACTIONS.set_module_id(item.id))
                    navigation.navigate('SubModulesList', { module_ID: item.id })
                }}
            >
                {
                    item?.module_text && <FlatList
                        data={item.module_text}
                        renderItem={renderText}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }

            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'white',

        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        elevation: 2,
        borderRadius: 8,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 18,
        // flexShrink: 1,
    },
    def: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FF0B46',
        fontSize: 14,
        color: 'black',

    },
    desc: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: 'gray',
        marginTop: 4,
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