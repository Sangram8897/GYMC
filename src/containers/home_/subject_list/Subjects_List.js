import React, { useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, FlatList, StyleSheet, Text, Animated, Platform, StatusBar } from 'react-native';
import { Header, Container } from 'components';
import DATA from './DATA';
import Item from './comp/Item';
import TimeInput from './TimeInput';
import { ColorThemeContext } from '../../../context/theme_context';
import { FloatingActionButton } from '../../../components';
//const DATA = []

export const HEADER_HEIGHT = Platform.OS == 'ios' ? 60 : 30 + StatusBar.currentHeight;

export default function Subjects_List({ DATA, navigation }) {
    const { Colors, ToggleTheme } = useContext(ColorThemeContext);
    const scrollY = new Animated.Value(0);
    const diffClampScrollY = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

    const headerHeight = diffClampScrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp',
    });

    return (
        <Container>
            {/* <Animated.View
                style={[styles.header, { transform: [{ translateY: headerHeight }], }]}>
                <Header
                    activeColor={Colors.COLOR_TEXT_TITLE}
                    inActiveColor={Colors.COLOR_TEXT_TITLE}
                    hasBackButton={true}
                    onBackbuttonPress={() => { }}
                    showPlusButton={true}
                    onPlusButtonPress={() => ToggleTheme()}
                />
            </Animated.View> */}

            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                style={{ flex: 1, marginHorizontal: 5, marginTop: 5, paddingTop: HEADER_HEIGHT, zIndex: 0, backgroundColor: '$FFFFFF' }}
                bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY, }, } },
                ], {
                    useNativeDriver: false,
                })}
                data={DATA}
                renderItem={({ item, index }) => <Item navigation={navigation} item={item} index={index} />
                }
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<View style={{ height: 90 }}></View>
                }
            />
            <FloatingActionButton
                buttonColor={Colors.COLOR_ACTIVE_RED}
                onPress={() => navigation.navigate('AddSubjectInfo')} />

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
        elevation: 5,
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 32,
    },
});
/**
 *  <TimeInput hh={'11'} mm={'11'} ss={'11'} getValue={(value) => {
                console.warn('value', value)
            }} />
 */