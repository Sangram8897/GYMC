import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useId, useEffect, useReducer, useContext, useMemo } from 'react'
import { LoanJourneyDataContext } from '../context';
import IsEmpty from '../../../utils/IsEmpty';
import { useSelector } from 'react-redux';
import PageSections from './page_sections';
// import PageSections from './page_sections';

const MannualModifications = {
    MOBILE_VERIFY: [{
        key: 'fieldName',
        value: 'mobileNumber',
        additionalProperties: {
            submitPageOnVerify: true,
            verificationFieldName: 'accountNo',
            //regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    {
        key: 'fieldName',
        value: 'accountNo',
        additionalProperties: {
            showField: false,
            submitPageOnVerify: true,
            //regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },],
    PERSONAL_DETAILS: [
        {
            key: 'fieldName',
            value: 'alternativeUsername',
            additionalProperties: {
                regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        }
    ],
}

const PageRendererView = () => {



    const [page_fields, set_page_fields] = useState([])
    const loan_journey_data = useSelector(state => state.LoanJourneyReducer.data);

    const getPageConfig = () => {
       // console.log('PageRendererView', loan_journey_data?.current_active_page?.pageCode);
        if (loan_journey_data?.current_active_page?.pageCode) {
            const active_pagecode = loan_journey_data?.current_active_page?.pageCode
            let loan_journeyData = loan_journey_data?.loan_product_config?.pageSectionConfig?.individual
            let current_page_config = loan_journeyData[active_pagecode]
            return current_page_config
        }
        return []
    }

    const calculation = useMemo(() => getPageConfig(), [loan_journey_data?.current_active_page?.pageCode]);

    useEffect(() => {
        console.log('PageRendererView', loan_journey_data);
        let page_fields_ = initialDataSetUp(calculation ? calculation : [])
        set_page_fields(page_fields_)
    }, [])


    const initialDataSetUp = (data) => {
        const array = [...data]
        try {
            if (MannualModifications[loan_journey_data?.current_active_page?.pageCode]) {
                const page_code_data = [...MannualModifications[loan_journey_data?.current_active_page?.pageCode]]
                const mannual_modified_data = page_code_data.reduce((curr, item) => {
                    return setDataBasedOnKeyValues(array, item.key, item.value, item.additionalProperties)
                }, array)


                return mannual_modified_data
            } else {
                return array
            }
        } catch (err) {
            console.log('grouped_data error', err);
            return []
        }
    }

    console.log('PageRendererView page_fields', page_fields);
    return (
        <View style={{ flex: 1, width: '95%', alignSelf: 'center' }}>
            <Text>welcome to jumanji</Text>
            {(page_fields && page_fields.length > 0) && <PageSections data={page_fields} />}
        </View>
    )
}

export default PageRendererView



function formatDataBasedOnGroup(data) {
    console.log('grouped_data before', data);
    function sortDataByGroup(group_sorting_data) {
        console.log('grouped_data sortDataByGroup before', group_sorting_data);
        const groupedData = [[]];
        group_sorting_data.forEach((item) => {
            if (IsEmpty(item?.groupIndex)) {
                groupedData[0].push(item);
            } else {
                if (!groupedData[item?.groupIndex]) {
                    groupedData[item?.groupIndex] = [];
                }
                groupedData[item.groupIndex].push(item);
            }
        });

        const validated_data = removeEmptyElements(groupedData)
        const modified_data = modifyInSectionListFormat(validated_data)
        console.log('grouped_data sortDataByGroup after', modified_data);
        return modified_data
    }
    function removeEmptyElements(array) {
        console.log('grouped_data removeEmptyElements calling');
        return array.filter(function (el) {
            return !IsEmpty(el);
        });
    }
    function modifyInSectionListFormat(array) {
        console.log('grouped_data modifyInSectionListFormat before', array);
        return array.map((i, index) => {
            let new_item = {
                container_id: `${index + 1}`,
                group_name: i[0]?.groupName ? i[0]?.groupName : 'page',
                fieldDataType: 'CONTAINER',
                fields: [...i]
            }
            return new_item
        });
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
            if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
                data[i].sectionContent.fields = sortDataByGroup(data[i]?.sectionContent?.fields)
            }
        }
    }
    console.log('grouped_data after', data);
    return data
}

function modifyDataByIndex(array, text, index_history) {
    let data = [...array]
    const currentIndex = index_history.shift();
    if (data[currentIndex]) {
        const newData = data[currentIndex]
        if (index_history?.length == 0) {
            // newData.value = text
        }
        const { fields, id, sectionContent } = data[currentIndex];
        if (fields && index_history) {
            newData.fields = modifyDataByIndex(fields, text, index_history);
        }
        else if (sectionContent?.fields && index_history) {
            newData.sectionContent.fields = modifyDataByIndex(sectionContent.fields, text, index_history);
        }
        else if (sectionContent?.config?.options && index_history) {
            newData.sectionContent.config.options = modifyDataByIndex(sectionContent.config.options, text, index_history);
        }
    }
    return data
}

function setDataBasedOnKeyValues(data, key, value, additionalProperties) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][key] && data[i][key] == value) {
            console.log('matched here');

            data[i] = {
                ...data[i],
                ...additionalProperties
            }
        }

        if (data[i]?.fields && data[i]?.fields?.length > 0) {
            data[i].fields = setDataBasedOnKeyValues(data[i].fields, key, value, additionalProperties)
        }

        if (data[i]?.sectionContent?.fields && data[i]?.sectionContent?.fields.length > 0) {
            if (Object.prototype.toString.call(data[i]?.sectionContent?.fields) === '[object Array]') {
                data[i].sectionContent.fields = setDataBasedOnKeyValues(data[i]?.sectionContent?.fields, key, value, additionalProperties)
            } else if (data[i]?.sectionContent?.fields[key] && data[i]?.sectionContent?.fields[key] == value) {
                data[i].sectionContent.fields = {
                    ...data[i].sectionContent.fields,
                    ...additionalProperties
                }
            }
        }
    }
    return data
}

/**
 * const originalArray = [
  { id: 3, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Charlie' },
  { id: 3, name: 'David' },
  { id: 2, name: 'Eve' }
];
 
const groupedMap = new Map();
 
originalArray.forEach((item) => {
  if (!groupedMap.has(item.id)) {
    groupedMap.set(item.id, []);
  }
  groupedMap.get(item.id).push(item);
});
 
const groupedArray = Array.from(groupedMap.values());
 
console.log(groupedArray);
 */