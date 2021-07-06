import React from 'react';
import { View, TextInput } from 'react-native';
import style from '../../../SignUp/style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FirstNameInput = ({ firstName, setFirstName, handleChange }) => {
  return (
    <View style={style.txtContainer}>
      <AntDesign name="contacts" size={17} color="green" style={style.icon} />
      <TextInput
        style={style.text}
        value={firstName}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        placeholderTextColor="green"
        keyboardType="default"
        onChange={handleChange}
      />
    </View>
  );
};

const LastNameInput = ({ lastName, setLastName, handleChange }) => {
  return (
    <View style={style.txtContainer}>
      <AntDesign name="contacts" size={17} color="green" style={style.icon} />
      <TextInput
        style={style.text}
        value={lastName}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        placeholderTextColor="green"
        keyboardType="default"
        onChange={handleChange}
      />
    </View>
  );
};

const SignUpEmailInput = ({ email, setEmail, handleChange }) => {
  return (
    <View style={style.txtContainer}>
      <Fontisto name="email" size={17} color="green" style={style.icon} />
      <TextInput
        style={style.text}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="green"
        keyboardType="email-address"
        onChange={handleChange}
      />
    </View>
  );
};

const SignUpPasswordInput = ({ password, setPassword, handleChange }) => {
  return (
    <View style={style.txtContainer}>
      <Fontisto
        name="key"
        size={17}
        color="green"
        style={style.icon}
      />
      <TextInput
        style={style.text}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="green"
        secureTextEntry={true}
        onChange={handleChange}
      />
    </View>
  );
};

export { FirstNameInput, LastNameInput, SignUpEmailInput, SignUpPasswordInput };
