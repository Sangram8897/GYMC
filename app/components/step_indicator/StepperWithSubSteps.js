import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import _ from 'lodash';
import Step from './Step';
import Strap from './Strap';
import { Colors } from './indicator';

const StepperWithSubSteps = ({ data, active_step, active_sub_step, sub_steps, StepSize }) => {
    const [split1, set_split1] = useState([])
    const [split2, set_split2] = useState([])

    useEffect(() => {
        initialDataSetup()
    }, [data])

    const initialDataSetup = () => {
        if (data && data.length > 0) {
            let _split1 = []
            let _split2 = []
            _split1 = data.slice(0, active_step + 1);
            _split2 = data.slice(active_step + 1, data.length);
            set_split1(_split1)
            set_split2(_split2)
        }

    }
    console.log('active_sub_step', active_sub_step);
    return (
        <>
            {(data && sub_steps && sub_steps.length > 0) &&
                <View style={{ flexDirection: 'row' }}>
                    <BoxStepper data={split1} id={'I'} StepSize={StepSize} active_sub_step={active_sub_step} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <SubStepper data={sub_steps} parent_data={data} active_step={active_step} StepSize={StepSize} />
                    </View>
                    <BoxStepper data={split2} id={'II'} StepSize={StepSize} />
                </View>
            }
        </>
    )
}

export default React.memo(StepperWithSubSteps)

const BoxStepper = ({ data, substeps = false, id, StepSize, active_sub_step }) => {

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
        return <View key={`box_stepper${id}${index.toString()}`} >
            <View style={{ height: StepSize.step + StepSize.cofact }}>
                <Step substeps={true} config={config} count={element?.step_id} Colors={Colors} StepSize={StepSize} />
            </View>
            {(element?.isActive && active_sub_step?.name) &&
                <AbsoluteText
                    name={active_sub_step?.name}
                    Colors
                    StepSize
                />
            }
        </View >
    })
}



const AbsoluteText = React.memo(({ name, Colors, StepSize }) => {
    return (
        <View style={{ position: 'absolute', top: 30, zIndex: 999, minWidth: 300 }}>
            {
                <Text style={[{ color: Colors.white, marginVertical: StepSize.cofact }]}>{name}</Text>
            }
        </View>
    )
})

const SubStepper = ({ parent_data, active_step, data, substeps = false, StepSize }) => {
    console.log('SubStepper', data);
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

        return <View key={`sub_stepper${index.toString()}}`} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Strap
                color={config?.leftStrapColor}
                hideLeftStrap={config.hideLeftStrap}
            />
            <SubPoint config={config} count={element?.step_id} StepSize={StepSize} />
            <Strap
                color={config?.rightStrapColor}
                hideRightStrap={config.hideRightStrap}
            />
        </View>
    })
}

const SubPoint = ({ count, substeps = false, config, StepSize }) => {
    const { isCompleted, isActive, borderColor, fillColor, iconColor, textColor } = config;

    const box_size = 15;
    const cofact = 5
    const index = 2
    if (config?.isActive) {
        return (
            <View style={{ height: StepSize.subStep + StepSize.cofact, width: StepSize.subStep + StepSize.cofact, justifyContent: 'center', alignItems: 'center', borderRadius: (StepSize.subStep + StepSize.cofact) / 2, borderColor: borderColor, borderWidth: 1, backgroundColor: isCompleted ? fillColor : Colors.white }}>
                <View style={{ height: StepSize.subStep, width: StepSize.subStep, borderRadius: StepSize.subStep / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='check' size={12} color={iconColor} />
                </View>
            </View>
        )
    }
    return (
        <View style={{ height: StepSize.subStep, width: StepSize.subStep, borderRadius: StepSize.subStep / 2, backgroundColor: fillColor, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='check' size={12} color={iconColor} />
        </View>
    );
}