import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from '../../../SignUp/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUpButton = ({isLoading, Submit, disabled}) => {
  const [BtnTxt] = useState('Sign Up');

  return (
    <TouchableOpacity onPress={Submit} disabled={disabled}>
      <View style={style.btnContainer}>
        {isLoading ? (
          <View style={style.loader}>
            <ActivityIndicator size={16} color="#00ff00" />
          </View>
        ) : (
          <View>
            <FontAwesome
              name="sign-in"
              size={17}
              color="white"
              style={style.signUpIcon}
            />
            <Text style={style.btnText}>{BtnTxt}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SignUpButton;
