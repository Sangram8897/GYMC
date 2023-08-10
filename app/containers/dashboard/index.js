import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import LineOfBusiness from './../../config/json/LineOfBusiness.json'
import LoanProducts from '../../config/LoanProducts';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Dashboard = ({ navigation }) => {
  const LoanProduct = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => productSelectAction(item)} style={{ padding: 20, margin: 8, borderWidth: 0.5 }}>
        <Text >{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const productSelectAction = (item) => {
    // return dev_flow(item, 'BranchDetails')// Enable to resume, pass journeyScreen
    //todo : write resume journey code here ends
    // let data = {

    //   loanPurposeUuid: item?.loanPurposeUuid,
    //   product: item,
    //   selectedLoanProduct: item?.productType,
    //   "afterCompleteFlow": {
    //     "urlToRedirect": ""
    //   },
    //   constitution: 'Individual',
    //   tabsData: LoanProducts[item?.productConfiguration]?.tabsData,
    //   journeyPages: LoanProducts[item?.productConfiguration]?.['pageSequenceData']?.journeyPages,
    //   otherPages: LoanProducts[item?.productConfiguration]?.['pageSequenceData']?.otherPages,
    //   metaData: {
    //     "stepperData": LoanProducts[item?.productConfiguration]?.stepperData['individual'],
    //     "substepperData": CommonVariableService?.verifiedFieldsData[item.productCode]['individual'],
    //     "capturedData": {},
    //     "formSubmitEvents": [],
    //     "externalData": {},
    //     "globalScopeData": {},
    //     "masterData": {},
    //     "commonProperty": {}
    //   },
    //   localisation: LoanProducts[item?.productConfiguration]?.localisation ? LoanProducts[item?.productConfiguration]?.localisation : '',
    //   productUserType: 'individual',
    //   productCode: item?.productCode,
    //   productConfiguration: LoanProducts[item?.productConfiguration]
    // }

    // console.log("item selected", item)
    //todo : write resume journey code here

    console.warn('item', item);

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