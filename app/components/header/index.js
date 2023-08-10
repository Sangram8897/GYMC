import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const _headerTextStyle = {
    fontSize: 18,
    fontFamily: "Montserrat-Medium"
}

export default function Header({
    hasBackButton = true,
    onBackbuttonPress = () => { },
    backgroundcolor = 'blue',
    headerTitle = 'Header',
    headerTextStyle = _headerTextStyle,
}) {
    return (
        <View style={{ height:60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: backgroundcolor }}>
            {
                hasBackButton == true && <Icon onPress={onBackbuttonPress} name={'arrow-back'} color={'gray'} size={30} style={{ alignSelf: 'center', paddingHorizontal: 8, marginTop: 4 }} />
            }
            <View style={{ flex: 1, paddingHorizontal: hasBackButton == true ? 10 : 16 }}>

                <Text
                    numberOfLines={1}
                    style={headerTextStyle}>{headerTitle}</Text>
            </View>
            <Icon name={'notifications'} color={'gray'} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8 }} />
            <Icon name={'search'} color={'gray'} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8 }} />
        </View>
    )
}
