import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import Indicator from './indicator'
import { useSelector } from 'react-redux';
import MyData from './testdata';

const StepIndicator = ({data, showPersentage = false }) => {
	
	const [param_2, set_param_2] = useState(null)

	const [active_step, set_active_step] = useState(null)
	const [pagedata, set_pagedata] = useState([])
	const [my_progress, set_my_progress] = useState(0)

	const [sub_steps, set_sub_steps] = useState([])
	const [active_sub_step, set_active_sub_step] = useState(null)

	const journeyData = data

	useEffect(() => {
		setStepperData()
	}, [journeyData]);

	const setStepperData = async () => {
		if (journeyData) {
			let data_update_with_id = journeyData.map((item, index) => {
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

	useEffect(() => {
		manageActiveAndCompletedSteps(active_step, pagedata, set_pagedata, 'MAIN_STEP')
	}, [active_step]);

	useEffect(() => {
		if (sub_steps && active_sub_step < sub_steps.length) {
			manageActiveAndCompletedSteps(active_sub_step, sub_steps, set_sub_steps, 'SUB_STEP')
		}
	}, [active_sub_step]);

	useEffect(() => {
		if (pagedata && pagedata.length > 0)
			calculatePersentage(pagedata.length, active_step, sub_steps.length, active_sub_step)
	}, [active_step, active_sub_step]);

	const manageActiveAndCompletedSteps = async (_active_step, data, setData, key) => {
		let copy_array = [...data]
		let updated_data = await copy_array.map((element, placeindex) => {
			let new_item = { ...element };
			if (placeindex == _active_step) {
				new_item.isActive = true
				if (key == 'MAIN_STEP') {
					if (element?.subStep && element?.subStep.length > 0) {
						set_sub_steps(element?.subStep);
						if (param_2) {
							set_active_sub_step(param_2)
							set_param_2(null)
						} else {
							set_active_sub_step(0)
						}
					} else {
						set_sub_steps([])
						set_active_sub_step(null)
						set_param_2(null)
					}
				}
			} else {
				if (placeindex < _active_step) {
					new_item.isCompleted = true
				}
				new_item.isActive = false
			}
			return new_item;
		})

		return setData(updated_data);
	}
	const calculatePersentage = (total_steps_count, active_step_, sub_steps_count, active_sub_step_) => {
		try {
			const persent = parseFloat(100 / total_steps_count);

			const sub_persent = sub_steps_count ? parseFloat(persent / sub_steps_count) : 0;

			const my_progress_ = parseFloat(persent * active_step_) + parseFloat(sub_persent * active_sub_step_)
			set_my_progress(parseInt(my_progress_));

		} catch (error) {
			console.log(' error', error);
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
		<View style={{ width: '100%', backgroundColor: 'skyblue' }}>
			<View style={[{ width: '95%', alignSelf: 'center', justifyContent: 'center' }]}>
				<Indicator
					data={pagedata}
					active_step={active_step}
					sub_steps={sub_steps}
				/>

			</View>
			{showPersentage && <Text style={[ { color: 'skyblue',alignSelf:'flex-end',marginRight:8 }]} onPress={moveToNextStep}>{`${my_progress} % Completed`}</Text>}
		</View>
	)
}

export default StepIndicator