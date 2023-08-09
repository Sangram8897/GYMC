import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Entypo'

const OrderedList = ({ data =[] }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={{width:'100%',flexDirection:'row',paddingVertical:8}}>
                <FontAwesome name='dot-single' color={'skyblue'} size={30} />
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize:12}}>{item}</Text>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            style={[ { overflow: 'hidden',width:'100%' }]}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default OrderedList;