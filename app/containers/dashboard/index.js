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
  const { state, dispatchContextState } = useContext(LoanJourneyDataContext);

  console.log('lelavda', state);

  const LoanProduct = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => productSelectAction(item)} style={{ padding: 20, margin: 8, borderWidth: 0.5 }}>
        <Text >{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const productSelectAction = async (item) => {
    //await dispatchContextState({ type: 'CLEAR_CONTEXT' })
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