// import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
// import React from 'react'
// import { Input } from '../../components'
// import { TextInput } from 'react-native-paper'
// import { Colors } from '../../style/colors'
// import AppButton from '../../components/button'
// import AppInput from '../../components/input/app_input'
// import { FloatingTitleTextInputField } from '../../components/input/FloatingTitleTextInputField'

// const Dashboard = () => {
//   return (
//     <View style={{ flex: 1,width:"100%" }}>
//       <ScrollView style={{flex:1,width:'100%'}}>
//         <AppInput state={'DEFAULT'} label={'Resedential Address'}  />
//         <AppInput state={'FOCUSED'} label={'Resedential Address'} placeHolder={`Enter Education Qulification`} />
//         <AppInput state={'DISABLED'} disabled={true} label={'Resedential Address'} placeHolder={`Enter Education Qulification`} />
//         <AppInput state={'FILLED'} label={'Resedential Address'} value={'Sangram Santosh Paste'} placeHolder={`Enter Education Qulification`} />
//         <AppInput state={'PREFILLED'} label={'Resedential Address'} placeHolder={`Enter Education Qulification`} />
//         <AppInput state={'SUCCESS'} label={'Resedential Address'} placeHolder={`Enter Education Qulification`} />
//         <AppInput state={'ERROR'} label={'Resedential Address'} placeHolder={`Enter Education Qulification`} />
 
//       </ScrollView>


//     </View>
//   )
// }

// export default Dashboard




import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import LineOfBusiness from './../../config/json/LineOfBusiness.json'
import { LoanJourneyDataContext } from '../loan_journey/context';

const Dashboard = ({ navigation }) => {
  const { dispatchContextState } = useContext(LoanJourneyDataContext);

  const LoanProduct = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => productSelectAction(item)} style={{ padding: 20, margin: 8, borderWidth: 0.5 }}>
        <Text >{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const productSelectAction = async (item) => {
    await dispatchContextState({ type: 'CLEAR_CONTEXT' })
    navigation.navigate('LoanJourney', { loan_product: item })
  }

  const LoanProductCategory = ({ item, index }) => {
    return (
      <View>
        <Text >{item.lineOfBusinessName}</Text>
        <FlatList
          horizontal={true}
          data={item?.products}
          renderItem={({ item, index }) => <LoanProduct item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={LineOfBusiness}
        renderItem={({ item, index }) => <LoanProductCategory item={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Dashboard;