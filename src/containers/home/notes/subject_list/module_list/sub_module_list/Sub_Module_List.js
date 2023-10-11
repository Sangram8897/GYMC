import React, { useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, FlatList, StyleSheet, Text, Animated, Platform, StatusBar } from 'react-native';
import { Colors } from 'style';
import { Header, Container } from 'components';
import Item from './comp/Item';
import FloatingActionButton from 'components/FloatingActionButton';
import { ColorThemeContext } from '../../../../../../context/theme_context';

export const HEADER_HEIGHT = Platform.OS == 'ios' ? 60 : 30 + StatusBar.currentHeight;

export default function Sub_Module_List({ DATA, navigation }) {

    const scrollY = new Animated.Value(0);
    const diffClampScrollY = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

    const { Colors, ToggleTheme } = useContext(ColorThemeContext);

    const headerHeight = diffClampScrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp',
    });
    //const Theme = useContext(ColorThemeContext).Colors;
    return (
        <Container>

            <Animated.View
                style={[styles.header, { transform: [{ translateY: headerHeight }], }]}>
                <Header
                    activeColor={Colors.COLOR_TYPE_11}
                    inActiveColor={Colors.COLOR_TYPE_12}
                    showBackButton={true}
                    onBackButtonPress={() => navigation.goBack()}
                    showPlusButton={true}
                    onPlusButtonPress={() => ToggleTheme()}
                />
            </Animated.View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ paddingTop: HEADER_HEIGHT, zIndex: 0, backgroundColor: '$FFFFFF' }}
                bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY, }, } },
                ], {
                    useNativeDriver: false,
                })}
                data={DATA}
                renderItem={({ item }) => <Item navigation={navigation} title={item.title} description={item.description} short_desc={item.short_desc} />
                }
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<View style={{ height: 90 }}></View>
                }
            />
            <FloatingActionButton
                buttonClor={'yellow'}
                onPress={() => navigation.navigate('AddSubModuleInfo')} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        zIndex: 1000,
        elevation: 15,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 26,
        zIndex: 0,
        overflow: 'visible'
    },
    title: {
        fontSize: 32,
    },
});