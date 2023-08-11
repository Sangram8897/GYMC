import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import Indicator from './indicator'
import { useSelector } from 'react-redux';
import MyData from './testdata';
import { Colors } from '../../style/colors';

const StepIndicator = ({data, showPersentage = false }) => {
	const [active_step, set_active_step] = useState(null)
	const [pagedata, set_pagedata] = useState([])
	const [my_progress, set_my_progress] = useState(0)

	const [sub_steps, set_sub_steps] = useState([])
	const [active_sub_step, set_active_sub_step] = useState(null)

	useEffect(() => {
		setStepperData()
	}, [data]);

	const setStepperData = async () => {
		if (data) {
			let data_update_with_id = data.map((item, index) => {
				let new_item = { ...item, step_id: index + 1 }
				return new_item
			})
			set_pagedata(data_update_with_id)
			if (data_update_with_id && data_update_with_id.length > 0) {
				let active_step_index = data_update_with_id.findIndex((item, index) => item.isActive == true)

				if (active_step_index == -1) {
					set_active_step(0)
					set_active_sub_step(0)
				} else {
					set_active_step(active_step_index)
					let data = await data_update_with_id?.[active_step_index]?.subStep

					if (data && data.length > 0) {
						set_sub_steps(data)
						let active_sub_step_index = await data.findIndex((item, index) => item.isActive == true)
						if (active_sub_step_index == -1) {
							await set_active_sub_step(0)
						} else {
							await set_active_sub_step(active_sub_step_index)
						}
					}
				}
			}
		}
	}

	const moveToNextStep = () => {
		if (active_step < pagedata.length) {
			if (sub_steps && sub_steps.length > 0) {
				if (active_sub_step >= (sub_steps.length - 1)) {
					set_sub_steps([])
					set_active_sub_step(null)
					set_active_step(active_step + 1)
				} else {
					set_active_sub_step(active_sub_step + 1)
				}
			} else {
				set_active_step(active_step + 1)
			}
		}
	}
	return (
		<View style={{ width: '100%', backgroundColor: Colors.primary,paddingBottom:8 }}>
			<View style={[{ width: '95%', alignSelf: 'center', justifyContent: 'center' }]}>
				<Indicator
					data={pagedata}
					active_step={active_step}
					sub_steps={sub_steps}
				/>
			</View>
			{showPersentage && <Text style={[ { color: 'skyblue',alignSelf:'flex-end',marginRight:8 }]}>{`${my_progress} % Completed`}</Text>}
		</View>
	)
}

export default StepIndicator