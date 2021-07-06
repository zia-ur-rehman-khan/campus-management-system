import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import style from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import LogInHeader from '../ScreensMaterials/Headerss/LoginHeader/LogInHeader';
import {
  LoginImgOne,
  LoginImgTwo,
} from '../ScreensMaterials/LoginMaterial/LoginImages/index';
import LoginButton from '../ScreensMaterials/LoginMaterial/LoginButton/index';
import LoginNavigation from '../ScreensMaterials/LoginMaterial/LoginNavigation/index';
import {
  EmailInput,
  PasswordInput,
} from '../ScreensMaterials/LoginMaterial/LoginInputes/index';
import { firebase } from '@react-native-firebase/auth';
import { userLogin } from '../redux/Actions/LogIn/LogInAction';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (route.params?.from === 'signup') {
      setEmail('');
      setPassword('');
      setErrMsg('');
    }
  }, [route.params]);

  const Submit = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(userLogin({ email, password }));
      setEmail('');
      setPassword('');
      setIsLoading(false);
      navigation.navigate('DrawerNav');
    } catch (err) {
      console.log(err.message, 'err');
      setErrMsg(err?.message);
      setIsLoading(false);
    }
  };

  const handleChange = () => {
    setErrMsg('');
  };

  if (firebase?.auth().currentUser) {
    navigation.navigate('DrawerNav');
  }
  return (
    <KeyboardAwareScrollView>
      <View style={style.mainContainer}>
        <LogInHeader />
        <View style={style.mainTwo}>
          <View style={style.containerThree}>
            <LoginImgOne />

            <LoginImgTwo />

            <View>
              <EmailInput
                email={email}
                setEmail={setEmail}
                handleChange={handleChange}
              />
              <PasswordInput
                password={password}
                setPassword={setPassword}
                handleChange={handleChange}
              />
            </View>

            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'red',
                textAlign: 'center',
              }}>
              {errMsg}
            </Text>

            <LoginButton
              Submit={Submit}
              isLoading={isLoading}
              disabled={!password || !email}
            />

            <LoginNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
