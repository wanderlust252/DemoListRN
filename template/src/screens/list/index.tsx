import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {pushData, selectData} from '@reduxCore/main/slice';
import {styles} from './styles';
import axios from 'axios';
import FlatListComponent from '@components/FlatList';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '@components/ListItem';

const IMG_BACKGROUND = require('@assets/images/pictures/background.jpg');

interface IFormErrors {
  username?: string;
  password?: string;
}

interface IProps {}
const URL = 'https://random-data-api.com/api/users/random_user'
const ListScreen: React.FC<IProps> = _props => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();
  const dataFetch = useSelector(selectData);
  useEffect(() => {
    onRefetch();
    
  }, [dispatch]);
  const onRefetch = ()=>{
    axios.get(URL,{params:{size:10}}).then((data)=>{
      dispatch(pushData(data.data))
    })
  }
  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity onPress={onRefetch} style={styles.button}>
        <Text>
          REFETCH
        </Text>
      </TouchableOpacity>
     <FlatListComponent data={dataFetch} keyExtractorField={'id'} numColumns={2} renderItem={({item})=>{
      return <ListItem item={item}/>
     }} />
    </SafeAreaView>
  );
};

export default ListScreen;
