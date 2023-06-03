import React, { useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, FlatList, StyleSheet, Text, Animated, Platform, StatusBar } from 'react-native';
import { Colors } from 'style';
import { Header, Container } from 'components';
import { ColorThemeContext } from '../../../../context/ThemeContext';
import ACTIONS from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Item from './comp/Item';
import FloatingActionButton from '../../../../components/FloatingActionButton';
import AppColors from '../../../../style/AppColors';

export const HEADER_HEIGHT = Platform.OS == 'ios' ? 50 : 30 + StatusBar.currentHeight;

export default function SubjectList({ navigation }) {
    const dispatch = useDispatch();

    const { Colors, ToggleTheme } = useContext(ColorThemeContext);
    const subjects_list = useSelector(state => state.SubjectListReducer.subjects_list);

    const scrollY = new Animated.Value(0);
    const diffClampScrollY = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

    const headerHeight = diffClampScrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        dispatch(ACTIONS.get_subjects_lists())
        // requestUserPermission()
        // signIn();
    }, []);

    return (

        <Container>
            <Animated.View
                style={[styles.header, { transform: [{ translateY: headerHeight }], }]}>
                <Header
                    activeColor={'red'}
                    inActiveColor={'blue'}
                    hasBackButton={true}
                    onBackbuttonPress={() => { }}
                    showPlusButton={true}
                    onPlusButtonPress={() => ToggleTheme()}
                />
            </Animated.View>

            <FlatList
                showsVerticalScrollIndicator={false}
                // numColumns={2}
                style={{ flex: 1, marginHorizontal: 5, marginTop: 5, paddingTop: HEADER_HEIGHT, zIndex: 0, backgroundColor: '$FFFFFF' }}
                bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY, }, } },
                ], {
                    useNativeDriver: false,
                })}
                data={subjects_list}
                renderItem={({ item, index }) => <Item navigation={navigation} item={item} index={index} />
                }
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<View style={{ height: 90 }}></View>
                }
            />
            <FloatingActionButton
                buttonClor={AppColors.COLOR_SKYBLUE}
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
        elevation: 1000,
    },
    title: {
        fontSize: 32,
    },
});