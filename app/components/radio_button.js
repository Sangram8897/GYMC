import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppStyles from '../style';



export default function RadioButton({ options, label, onChange }) {
	const [value, setValue] = useState(null)
	return (
		<View>
			{label && <Text style={AppStyles.fieldValueText} >{label ? label : 'select option'}</Text>}
			<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 12 }}>

				{options && options.map(res => {
					return (
						<View key={res.optionKey} style={styles.container}>

							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									setValue(res.optionKey)
									onChange(res.optionKey)
								}}>
								{value === res.optionKey && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.optionName}</Text>
						</View>
					);
				})}
			</View>
		</View>
	)
}



const styles = StyleSheet.create({
	container: {
		marginBottom: 35,
		alignItems: 'center',
		flexDirection: 'row',
		//justifyContent: 'space-between',
	},
	radioText: {
		marginHorizontal: 16,
		fontSize: 16,
		color: '#000',
		fontWeight: '500'
	},
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 12,
		height: 12,
		borderRadius: 20,
		backgroundColor: '#3740ff',
	},
	result: {
		marginTop: 20,
		color: 'white',
		fontWeight: '600',
		backgroundColor: '#F3FBFE',
	},
});