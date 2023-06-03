import React, { useContext, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StateContext } from './AddSubModuleInfo'
import { Container, Input, Header, Button } from 'components'
import AddButton from '../../../../components/AddButton'
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const ScreenA = () => {

    const stateContext = useContext(StateContext)

    return (
        <View>
            <Input
                id='title'
                labal='Title'
                errorText='Wrong Title'
                initialValue={''}
                initialValid={true}
                onInputChange={stateContext.dispatch}
                required
            />
            <Input
                id='short_desc'
                labal='Short Description'
                errorText='Wrong Password'
                initialValue={''}
                numberOfLines={5}
                initialValid={true}
                onInputChange={stateContext.dispatch}
                required
            />
            <AddButton />


        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({})
