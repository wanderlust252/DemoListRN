import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, globalLoading, Text} from '@components';
import {useFormik} from 'formik';
import React from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {scale} from 'react-native-size-scaling';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {t} from '@utils/locales/i18n';

const IMG_BACKGROUND = require('@assets/images/pictures/background.jpg');

interface IProps {route:any}
const InfomationItem = ({title, content}:{title: string; content: string})=>{
  return <View style={{flexDirection:'row'}}>
  <Text>{title}</Text>
  <Text>{content} </Text>

</View>
}
const DetailScreen: React.FC<IProps> = (props) => {
  const {
    id,first_name,last_name,avatar, email,gender,
    phone_number,social_insurance_number,date_of_birth,
    employment:{
      title,
      key_skill
    },address,credit_card
  } = props.route.params.item
  

  
  return (
    <View>
      <Image style={styles.img} resizeMode={'contain'} source={{uri:avatar}} />
      <InfomationItem content={first_name+ ' '+last_name} title='Name: '/> 
      <InfomationItem content={email} title='Email: '/> 
      <InfomationItem content={gender} title='Gender: '/> 
      <InfomationItem content={phone_number} title='Phone Number: '/> 
      <InfomationItem content={social_insurance_number} title='Social Insurance Number: '/> 
      <InfomationItem content={date_of_birth} title='Date Of Birth: '/> 
      <InfomationItem content={title} title='Employment Title: '/> 
      <InfomationItem content={key_skill} title='Employment Key Skill: '/> 
      <InfomationItem content={address.city} title='City: '/> 
      <InfomationItem content={credit_card.cc_number} title='CC: '/> 
    </View>
  );
};

export default DetailScreen;
