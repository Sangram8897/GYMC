import React, { useContext, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StateContext } from './AddSubjectInfo'
import { Container, Input, Header, Button } from 'components'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const ScreenB = () => {

    const stateContext = useContext(StateContext)

    return (
        <View>
            <Input
                id='description'
                labal='Description'
                errorText='Wrong description'
                initialValue={''}
                initialValid={true}
                onInputChange={stateContext.dispatch}
                required
            />

        </View>
    )
}

export default ScreenB

const styles = StyleSheet.create({})
