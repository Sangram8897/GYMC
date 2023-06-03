import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { Container, Header } from 'components';
import ACTIONS from 'store/actions';
import IsEmpty from 'utils/IsEmpty'

import ItemView from './comp/ItemView';
import ListEmpty from '../../../components/ListEmpty';


const PicdaysList = ({ navigation }) => {

  const dispatch = useDispatch();

  const [_picadays, set_picadays] = useState([]);

  const picadays_data = useSelector(state => state.PicadaysReducer.picadays);

  useEffect(() => {
    set_picadays(picadays_data);
  }, [picadays_data]);

  useEffect(() => {
    createandgetpicadays()
  }, [])

  const createandgetpicadays = async () => {
    await dispatch(ACTIONS.create_picaday_table());
    dispatch(ACTIONS.get_picaday_list());
  }

  const renderItem = ({ item }) => (
    <ItemView item={item} navigation={navigation} />
  );

  return (
    <Container isLoading={false}>
      <Header />

      {
        IsEmpty(_picadays) ?
          <ListEmpty
            msg={`Currently you don't have any Records, Click below + button and start to add Records`}
          /> :

          <FlatList
            data={_picadays}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
      }

    </Container>
  )
}

export default PicdaysList
