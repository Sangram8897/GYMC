import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import { Colors } from '../../../style/colors';

const FIELD_VALUE_CHANGE = 'FIELD_VALUE_CHANGE';
const FIELD_STATE_CHANGE = 'FIELD_STATE_CHANGE';
const SET_FIELD_VISIBLE = 'SET_FIELD_VISIBLE';
const SET_FIELD_TOUCHED = 'SET_FIELD_TOUCHED';
const SET_FIELD_VALIDITY = 'SET_FIELD_VALIDITY';
const SET_FIELD_NOTIFIER_TEXT = 'SET_FIELD_NOTIFIER_TEXT';

const fieldReducer = (state, action) => {
    switch (action.type) {
        case FIELD_VALUE_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
            }
        case SET_FIELD_VALIDITY:
            return {
                ...state,
                isValid: action.validity
            }
        case FIELD_STATE_CHANGE:
            return {
                ...state,
                status: action.status,
            }
        case SET_FIELD_VISIBLE:
            return {
                ...state,
                visible: action.visible,
            }
        case SET_FIELD_TOUCHED:
            return {
                ...state,
                touched: action.touched
            }

        case SET_FIELD_NOTIFIER_TEXT:
            return {
                ...state,
                notifierText: action.notifierText
            }

        default:
            return state;
    }
}

const useFieldState = (initialValue = '', initialValidity = true, initialStatus = 'DEFAULT') => {
    const [fieldState, dispatch] = useReducer(fieldReducer, {
        value: initialValue,
        isValid: initialValidity,
        status: initialStatus,
        visible: false,//for popup states e.g dropdown,datepicker modals
        touched: false,//for detecting initial touch of field
        notifierText: null
    });

    const onFieldValueChange = (value, validity = true, text = null) => {
        dispatch({
            type: FIELD_VALUE_CHANGE,
            value: value,
            isValid: validity,
            notifierText: text
        })
    }

    const setFieldValidity = (validity) => {
        dispatch({
            type: SET_FIELD_VALIDITY,
            validity: validity
        })
    }
    const onFieldStatusChange = (status) => {
        dispatch({
            type: FIELD_STATE_CHANGE,
            status: status,
        })
    }

    const setFieldVisibility = (visible) => {
        dispatch({
            type: SET_FIELD_VISIBLE,
            visible: visible
        })
    }

    const setFieldTouched = (touched) => {
        dispatch({
            type: SET_FIELD_TOUCHED,
            touched: touched
        })
    }
    const setFieldNotifierText = (text) => {
        dispatch({
            type: SET_FIELD_NOTIFIER_TEXT,
            notifierText: text
        })
    }

    return [fieldState, onFieldValueChange, setFieldValidity, onFieldStatusChange, setFieldVisibility, setFieldTouched, setFieldNotifierText]
}

export default useFieldState