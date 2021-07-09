import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import style from '../../../Login/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginButton = ({ isLoading, Submit, disabled }) => {
  const [BtnText] = useState('Log In');
  return (
    <TouchableOpacity onPress={Submit} disabled={disabled}>
      <View style={style.btnContainer}>
        {isLoading ? (
          <View>
            <ActivityIndicator size={17} color="#00ff00" />
          </View>
        ) : (
          <View>
            <FontAwesome
              name="sign-in"
              size={17}
              color="white"
              style={style.logInIcon}
            />
            <Text style={style.btnText}>{BtnText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;
