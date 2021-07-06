import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../Login/style';

const LoginNavigation = ({navigation}) => {
  const [Txt] = useState('You Need To Sign Up?');
  const [SignUpTxt] = useState('Click Here.');
  return (
    <View style={style.signupContainer}>
      <Text>{Txt}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={style.signupTxt}>{SignUpTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginNavigation;
