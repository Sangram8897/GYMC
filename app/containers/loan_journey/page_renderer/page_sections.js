import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import RenderFormComponents from './render_form_components';
import { Title, Paragraph, } from '../../../components/index';
 import RenderConsents from './render_consents';

const PageSections = ({ data }) => {

    const renderSections = ({ item, index }) => {
        switch (item?.componentType) {
            case 'TITLE':
                return <>
                    <Title
                        label={item?.sectionContent?.titleData}
                    />
                </>

            case 'SUBTITLE':
                return <>
                    <Title
                        label={item?.sectionContent?.titleData}
                    />
                </>

            case 'PARAGRAPH':
                return <>
                    <Paragraph
                        label={item?.sectionContent?.paragraphData}
                    />
                </>

            case 'FORM':
                return <>
                    <RenderFormComponents data={item} />
                </>

            case 'CONSENT':
                return <>
                    <RenderConsents data={item} />
                </>

            default:
                return <><Text>Default</Text></>
        }
    }

    return (
        <View>
            {data && <FlatList
                data={data}
                renderItem={renderSections}
                keyExtractor={(item, index) => index.toString()}
            />}
        </View>
    )
}

export default PageSections