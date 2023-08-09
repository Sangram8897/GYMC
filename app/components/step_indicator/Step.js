import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '@Theme'

const Step = ({ count, substeps = false, config, box_size = 24,cofact = 8 }) => {
    const { isCompleted, showCount, isActive, borderColor, fillColor, iconColor, textColor } = config;

    return (
        <View style={{ height: box_size + cofact, width: box_size + cofact, justifyContent: 'center', alignItems: 'center', borderRadius: (box_size + cofact) / 2, borderColor: borderColor, borderWidth: 1, backgroundColor: isCompleted ? fillColor : 'white' }}>
            {isCompleted == true ?
                <Icon name='check' size={15} color={iconColor} /> :
                <View style={{ height: box_size, width: box_size, borderRadius: box_size / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
                    {showCount && <Text style={[{ fontSize: box_size / 1.8, color: textColor }]}>{count}</Text>}
                </View>
            }
        </View>
    );
}

export default Step