import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';
const Gradientview = props => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#800080' ,'#FFC0CB']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <SafeAreaView style={{ flex: 1, width: '100%' }}> */}
                {props.children}
            {/* </SafeAreaView> */}
        </LinearGradient>
    );
};
export default Gradientview;