import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '@Theme'
import _ from 'lodash';
import Step from './Step';
import Strap from './Strap';
import { Colors } from './indicator';

const Stepper = ({ data, substeps = false, hideFirstBar = false, hideLastBar = false, StepSize }) => {

  return data.map((element, index) => {
    const config = {
      substeps: element.substeps == true,
      isCompleted: element?.isCompleted,
      isActive: element?.isActive,
      borderColor: element?.isActive ? Colors.success : Colors.thinLightGrey,
      fillColor: (element?.isActive || element?.isCompleted) ? Colors.success : Colors.thinLightGrey,
      iconColor: Colors.white,
      textColor: Colors.white,
      showCount: true,
      leftStrapColor: index == 0 ? null : (element?.isCompleted || element?.isActive) ? Colors.success : Colors.thinLightGrey,
      rightStrapColor: index == data.length - 1 ? null : element?.isCompleted ? Colors.success : Colors.thinLightGrey,
    }
    return <View key={`stepper${index.toString()}`} style={{ flex: 1, width: '100%', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Strap color={config.leftStrapColor} />
        <Step config={config} count={element?.step_id} StepSize={StepSize} />
        <Strap color={config.rightStrapColor} />
      </View>
      <View>
        {
          <Text style={[{ color: Colors.white, alignSelf: 'center' }]}>{element?.isActive ? element.name : ''}</Text>
        }
      </View>
    </View>
  })
}
export default React.memo(Stepper);