import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MultiInputField from '../MultiInputField'

const DocumentInput = ({ field_item, index_history }) => {
    return (
        <View style={{ margin: 10 }}>
            {<Text style={[{ color: 'skyblue', marginBottom: 6, fontSize: 12 }]}>
                {field_item?.fieldLabel ? field_item?.fieldLabel : 'test label'}
            </Text>}

            <MultiInputField
                index_history={index_history}
                // onInputChange={inputChangeHandler}

                fieldDataType={'PAN_CARD'}
                value={''}
                onPress={(code) => {
                    // setModalVisible(onboardingVerificationType, code, fieldName)
                }}
                isOnboardingVerificationType={false}
                disabled={false}
                disabled_state={false}
                onVerify={() => { }}
            />
        </View>
    )
}

export default DocumentInput

const styles = StyleSheet.create({})