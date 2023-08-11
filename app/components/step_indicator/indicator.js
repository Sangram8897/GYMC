import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '@Theme'
import _ from 'lodash';
import Step from './Step';
import Strap from './Strap';
import Stepper from './Stepper';
import StepperWithSubSteps from './StepperWithSubSteps';

export const Colors = {
  success: 'green',
  thinLightGrey: '#F1F1F1',
  white: 'white'
}

const Indicator = ({ data, active_step, sub_steps }) => {

  if (data && sub_steps && sub_steps.length > 0) {
    return <StepperWithSubSteps data={data} active_step={active_step} sub_steps={sub_steps} />
  }

  return <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
    {(data && data.length > 0) && <Stepper data={data} hideFirstBar={true} />}
  </View>
}

export default Indicator;







