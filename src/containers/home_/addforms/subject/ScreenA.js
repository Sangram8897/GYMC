import React, { useContext, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StateContext } from './AddSubjectInfo'
import { Container, Input, Header, Button } from 'components'
import Colors from '../../../../style/Colors'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const ScreenA = () => {
    const stateContext = useContext(StateContext)
    return (
        <View>
            <Input
                id='title'
                labal='Title'
                errorText='Wrong Title'
                autoFocus={true}
                initialValue={''}
                initialValid={true}
                placeholder={''}
                onInputChange={stateContext.dispatch}
                required
            // labelStyle={{ color: Colors.COLOR_PRIMARY }}
            />
            <Input
                id='short_desc'
                labal='Short Description'
                errorText='Wrong Title'
                //autoFocus={true}
                initialValue={''}
                initialValid={true}
                placeholder={''}
                returnKeyType='next'
                multiline={true}
                minHeight={150}
                onInputChange={stateContext.dispatch}
                required
            // labelStyle={{ color: Colors.COLOR_PRIMARY }}
            />
        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({})
