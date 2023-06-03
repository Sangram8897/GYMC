

import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class TimeInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hh: this.props.hh,
            mm: this.props.mm,
            ss: this.props.ss
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.hh !== prevState.hh || nextProps.mm !== prevState.mm || nextProps.ss !== prevState.ss) {
            return nextProps.getValue(prevState)
        }
        return null
    }

    onHHChange = (text) => {
        this.setState({ ...this.state, hh: text }, () => {
            if (this.state.hh && this.state.hh.length >= 2) {
                this.secondTextInput.focus();
            }
        });
    }
    onMMChange = (text) => {
        this.setState({ ...this.state, mm: text }, () => {
            if (this.state.mm && this.state.mm.length >= 2) {
                this.thirdTextInput.focus();
            }
        });
    }
    onSSChange = (text) => {
        this.setState({ ...this.state, ss: text }, () => {

        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 2, alignItems: 'center', borderWidth: 1, borderRadius: 5, overflow: 'hidden' }}>
                    <TextInput
                        value={this.state.hh}
                        onChangeText={(text) => this.onHHChange(text, 'hh')}
                        style={styles.textInput}
                        placeholder="00"
                        maxLength={2}
                        returnKeyType="next"
                        keyboardType={'numeric'}
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                    <Text>:</Text>
                    <TextInput
                        value={this.state.mm}
                        style={styles.textInput}
                        onChangeText={(text) => this.onMMChange(text, 'mm')}
                        maxLength={2}
                        ref={(input) => { this.secondTextInput = input; }}
                        placeholder="00"
                        returnKeyType="next"
                        keyboardType={'numeric'}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                    <Text>:</Text>
                    <TextInput
                        value={this.state.ss}
                        onChangeText={(text) => this.onSSChange(text, 'ss')}
                        keyboardType={'numeric'}
                        maxLength={2}
                        style={styles.textInput}
                        ref={(input) => { this.thirdTextInput = input; }}
                        placeholder="00"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#FAFAFA',
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        height: 35,
        textAlign: 'center'

    }
})
