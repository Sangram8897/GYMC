import React, { useState, useReducer, useEffect, useContext } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Platform } from 'react-native'
import IsEmpty from './../utils/IsEmpty'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import AppStyles from '../style';

const CusDatePicker = ({ labal = 'select Date', onDateChange = () => { } }) => {
    const [date, set_date] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={AppStyles.componentContainer}>
            {labal && <Text style={AppStyles.fieldLabelText}>{labal}</Text>}


            <TouchableOpacity
                style={AppStyles.componentInnerContainer}
                onPress={() => setOpen(true)}

            >
                <Text style={AppStyles.fieldValueText}>{moment(date).format('LLLL')}</Text>
            </TouchableOpacity>

            <DatePicker
                modal
                mode={'date'}
                open={open}
                date={date}
                onConfirm={(date) => {
                    onDateChange(date)
                    set_date(date)
                    setOpen(false)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

        </View>

    )
}

export default CusDatePicker

const styles = StyleSheet.create({
    textInput: {
        // textAlignVertical: 'top',
        // fontFamily: 'Montserrat-Medium',
        padding: 10,
        // fontSize: 16,

        justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: 6,
        borderColor: 'skyblue'
        // elevation: 1
    },
})
