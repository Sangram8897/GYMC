import React, { useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, FlatList, StyleSheet, Text, Animated, Platform, StatusBar } from 'react-native';
import { Colors } from 'style';
import { Header, Container } from 'components';
import { ColorThemeContext } from './../../context/ThemeContext';
import SubjectList from './notes/subject_list';
// import Item from './comp/Item';

export const HEADER_HEIGHT = Platform.OS == 'ios' ? 60 : 30 + StatusBar.currentHeight;

export default function Home({ navigation }) {

    const { Colors, ToggleTheme } = useContext(ColorThemeContext);

    const scrollY = new Animated.Value(0);
    const diffClampScrollY = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

    const headerHeight = diffClampScrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp',
    });

    return (<SubjectList navigation={navigation} />);
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
    },
    title: {
        fontSize: 32,
    },
});