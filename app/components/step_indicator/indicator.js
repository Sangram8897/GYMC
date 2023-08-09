import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { useTheme } from '@Theme'
import _ from 'lodash';
import Step from './Step';
import Strap from './Strap';

const Colors={
  success:'green',
  thinLightGrey:'#F1F1F1',
  white:'white'
}

const Indicator = ({ data, active_step, sub_steps }) => {
  const [split1, set_split1] = useState([])
  const [split2, set_split2] = useState([])

  useEffect(() => {
    if (data && data.length > 0) {
      let _split1 = []
      let _split2 = []
      _split1 = data.slice(0, active_step + 1);
      _split2 = data.slice(active_step + 1, data.length);
      set_split1(_split1)
      set_split2(_split2)
    }
  }, [data])

  if (data && sub_steps && sub_steps.length > 0) {
    return <View style={{ flexDirection: 'row' }}>
      <BoxStepper data={split1} />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <SubStepper data={sub_steps} parent_data={data} active_step={active_step} />
      </View>
      <BoxStepper data={split2} />
    </View>
  }

  return <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
    {(data && data.length > 0) && <Stepper data={data} hideFirstBar={true} />}
  </View>
}

export default Indicator

const BoxStepper = ({ data, substeps = false }) => {

  return data.map((element, index) => {
    const config = {
      substeps: substeps,
      isCompleted: element.isCompleted,
      isActive: element?.isActive,
      borderColor: element?.isActive ? Colors.success : Colors.thinLightGrey,
      fillColor: (element?.isActive || element.isCompleted) ? Colors.success : Colors.thinLightGrey,
      iconColor: Colors.white,
      textColor: Colors.white,
      showCount: true
    }
    return <Step substeps={true} config={config} count={element?.step_id} />
  })
}

const Stepper = ({ data, substeps = false, hideFirstBar = false, hideLastBar = false }) => {
  const box_size = substeps ? 15 : 25;

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

    return <View key={index.toString()} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Strap
        color={config.leftStrapColor}
      />
      <Step config={config} count={element?.step_id} />
      <Strap
        color={config.rightStrapColor}
      />
    </View>
  })
}

const SubStepper = ({ parent_data, active_step, data, substeps = false }) => {

  return data.map((element, index) => {
    const config = {
      substeps: element.substeps == true,
      isCompleted: element?.isCompleted,
      isActive: element?.isActive,
      borderColor: element?.isActive ? Colors.success : Colors.thinLightGrey,
      fillColor: (element?.isCompleted) ? Colors.success : Colors.thinLightGrey,
      iconColor: Colors.white,
      textColor: Colors.white,
      hideCount: true,
      leftStrapColor: element?.isCompleted ? Colors.success : element?.isActive ? Colors.success : Colors.thinLightGrey,
      rightStrapColor: (active_step == parent_data.length - 1 && index == data.length - 1) ? null : element?.isCompleted ? Colors.success : Colors.thinLightGrey,
    }

    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Strap
        color={config?.leftStrapColor}
        hideLeftStrap={config.hideLeftStrap}
      />
      <SubPoint config={config} count={element?.step_id} />
      <Strap
        color={config?.rightStrapColor}
        hideRightStrap={config.hideRightStrap}
      />
    </View>
  })
}

const SubPoint = ({ count, substeps = false, config }) => {
  const { isCompleted, isActive, borderColor, fillColor, iconColor, textColor } = config;

  const box_size = 15;
  const cofact = 5
  const index = 2
  if (config?.isActive) {
    return (
      <View style={{ height: box_size + cofact, width: box_size + cofact, justifyContent: 'center', alignItems: 'center', borderRadius: (box_size + cofact) / 2, borderColor: borderColor, borderWidth: 1, backgroundColor: isCompleted ? fillColor : Colors.white }}>
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