import React, { useContext } from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import Title from './Title'
import Icon from 'react-native-remix-icon';
import { ColorThemeContext } from '../context/theme_context';

export const HEADER_HEIGHT = Platform.OS == 'ios' ? 60 : 30 + StatusBar.currentHeight;
const Header = ({
    activeColor,
    inActiveColor,
    showBackButton = false,
    onBackButtonPress = () => { },
    showPlusButton = false,
    onPlusButtonPress = () => { },
}) => {
    // const { Colors } = useContext(ColorThemeContext);
    const Theme = useContext(ColorThemeContext).Colors;
    return (
        <View style={{
            height: HEADER_HEIGHT,
            width: '100%',
            backgroundColor: Theme.COLOR_HEADER,
            // borderBottomWidth: 1,
            zIndex: 1000,
            justifyContent: 'space-between',
            alignItems: 'center',

            flexDirection: 'row',
            paddingHorizontal: 8
        }}>
            <View style={styles.left} >
                {showBackButton &&
                    <Icon
                        onPress={onBackButtonPress}
                        name={'ri-arrow-left-s-line'}
                        size={30}
                        color={activeColor} />
                }

            </View>
            <Title activeColor={activeColor} inActiveColor={inActiveColor} />
            <View style={styles.right} >
                {showPlusButton &&
                    <Icon
                        onPress={onPlusButtonPress}
                        name={Theme.THEME_TYPE == 'light' ? 'ri-sun-fill' : 'ri-moon-fill'}
                        size={25}
                        color={activeColor} />
                }
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    left: {
        height: 35, width: 35, justifyContent: 'flex-end', alignItems: 'center'
    },
    right: {
        // backgroundColor: 'red',
        height: 25, width: 25, justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center'
    }
})
