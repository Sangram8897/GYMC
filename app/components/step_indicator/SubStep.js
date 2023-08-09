import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'

const SubStep = ({ count, substeps = false, config }) => {
    const { isCompleted, isActive, borderColor, fillColor, iconColor, textColor } = config;
    const box_size = 15;
    const cofact = 5
    const index = 2
    if (config.isActive) {
      return (
        <View style={{ height: box_size + cofact, width: box_size + cofact, justifyContent: 'center', alignItems: 'center', borderRadius: (box_size + cofact) / 2, borderColor: borderColor, borderWidth: 1, backgroundColor: isCompleted ? fillColor : 'white' }}>
          <View style={{ height: box_size, width: box_size, borderRadius: box_size / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='check' size={12} color={iconColor} />
          </View>
        </View>
      )
    }
    return (
      <View style={{ height: box_size, width: box_size, borderRadius: box_size / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='check' size={12} color={iconColor} />
      </View>
    );
  }

export default SubStep