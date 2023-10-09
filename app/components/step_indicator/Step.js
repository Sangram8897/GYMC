import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '@Theme'

const Step = ({ count, substeps = false, config, StepSize }) => {
    const { isCompleted, showCount, isActive, borderColor, fillColor, iconColor, textColor } = config;

    return (
        <View style={{ height: StepSize.step + StepSize.cofact, width: StepSize.step + StepSize.cofact, justifyContent: 'center', alignItems: 'center', borderRadius: (StepSize.step + StepSize.cofact) / 2, borderColor: borderColor, borderWidth: 1, backgroundColor: isCompleted ? fillColor : 'white' }}>
            {isCompleted == true ?
                <Icon name='check' size={15} color={iconColor} /> :
                <View style={{ height: StepSize.step, width: StepSize.step, borderRadius: StepSize.step / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
                    {showCount && <Text style={[{ fontSize: StepSize.step / 1.8, color: textColor }]}>{count}</Text>}
                </View>
            }
        </View>
    );
}

export default Step