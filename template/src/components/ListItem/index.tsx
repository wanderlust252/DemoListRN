import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-scaling';
import {styles} from './styles';
import {ButtonProps} from './model';
import Text from '../Text';
import {COLORS} from '@config';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const defaultProps = {
  bgColor: '',
  style: {},
  textColor: '',
  fontSize: null,
  border: false,
  onPress: () => {},
};

const ListItem: ButtonProps = props => {
  const {
    style,
    item
  } = props;
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const onPress= ()=>{
    navigate('Detail',{
      item: item
    })
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
      ]}>
        {/* image */}
        <Image style={styles.img} resizeMode={'contain'} source={{uri:item.avatar}} />
        {/* title */}
        <Text
        style={[
          styles.text,
        ]}>
        {item.employment.title}
      </Text>
        {/* content */}
      
      <Text
        style={[
          styles.contentText,
        ]}>
        {item.first_name+' '+item.last_name}
      </Text>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = defaultProps;

export default ListItem;
