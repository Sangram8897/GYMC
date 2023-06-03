import React from 'react'
import { TouchableOpacity } from 'react-native';

import IsEmpty from 'utils/IsEmpty';
import PicPreview from 'components/PicPreview';

const ItemView = ({ item, navigation }) => {

    return (
        <TouchableOpacity activeOpacity={1}
            onPress={() => navigation.navigate('PicOfDayDetails', { item: item })}>
            <PicPreview
                date={item.date}
                imageurl={item.imageurl}
                address={!IsEmpty(item.city) ? `${item.city}, ${item.country}` : null}
                temp={item.temp}
            />
        </TouchableOpacity>
    );
};

export default ItemView
