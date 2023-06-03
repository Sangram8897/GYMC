import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { Container, Header } from 'components'
import IsEmpty from 'utils/IsEmpty';

const PicFullScreen = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <Container isLoading={false}>
            <Header
                showBackButton={true}
                onBackButtonPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                {!IsEmpty(item.imageurl) && <Image
                    source={{ uri: item.imageurl }}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}></Image>}
            </View>
        </Container>
    )
}

export default PicFullScreen

const styles = StyleSheet.create({})
