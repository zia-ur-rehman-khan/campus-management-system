import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../SignUp/style';

const SignUpNavigation = ({navigation}) => {
  const [SignUpTxt] = useState('Click Here.');
  const [Txt] = useState('Already have an account?');
  return (
    <View style={style.signupContainer}>
      <Text>{Txt}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('LogIn', {from: 'signup'})}>
        <Text style={style.signupTxt}>{SignUpTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpNavigation;
