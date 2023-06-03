import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Container, Header, PicPreview } from 'components'
import { Colors, FontFamily } from 'style';
import IsEmpty from 'utils/IsEmpty';

const PicOfDayDetails = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <Container isLoading={false}>
            <Header
                showBackButton={true}
                onBackButtonPress={() => navigation.goBack()}
            />
            <ScrollView>
                {
                    item &&
                    <View>
                        <TouchableOpacity activeOpacity={0}
                            onPress={() => navigation.navigate('PicFullScreen', { item: item })}>
                            <PicPreview
                                date={item.date}
                                imageurl={item.imageurl}
                                address={!IsEmpty(item.city) ? `${item.city}, ${item.country}` : null}
                                temp={item.temp}
                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1, padding: 16 }}>

                            <Text style={{
                                fontFamily: FontFamily.INTER_R,
                                fontSize: 16,
                                color: Colors.COLOR_INACTIVE,
                            }}>{item.desc}</Text>

                        </View>
                    </View>
                }
            </ScrollView>
        </Container>
    )
}

export default PicOfDayDetails

const styles = StyleSheet.create({})
