import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import style from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import SignUpHeader from '../ScreensMaterials/Headerss/SignupHeader/SignUpHeader';
import SignUpButton from '../ScreensMaterials/SignupMaterial/SignUpButton/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  SignUpImgOne,
  SignUpImgTwo,
} from '../ScreensMaterials/SignupMaterial/SignUpImages';
import SignUpNavigation from '../ScreensMaterials/SignupMaterial/SignUpNavigation/index';
import DropDown from '../ScreensMaterials/SignupMaterial/SignUpDropDown/index';
import {
  FirstNameInput,
  LastNameInput,
  SignUpEmailInput,
  SignUpPasswordInput,
} from '../ScreensMaterials/SignupMaterial/SignUpInputes/index';
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import appSetting from '../../../appSetting/appSetting';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { userLogin } from '../redux/Actions/LogIn/LogInAction';

const SignUp = ({ navigation }) => {


  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('Company');
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [showErr, setShowErr] = useState('');
  const myLogin = useSelector((state) => state.myLog.LoginData);

  // const myLogin = useSelector((state) => state.myLog.LoginData);
  // console.log(myLogin, "logindata")
  const Submit = async () => {
    let userDetailes = {
      firstName,
      lastName,
      email,
      password,
      userRole
    };
    if (firstName && lastName && email && password) {
      setIsLoading(true);
      await axios
        .post(`${appSetting.serverBaseUrl}/users/signup`, userDetailes)
        .then((res) => {
          console.log(res.data.user.email, 'data');
          if (res.data.status) {
            savingUSerDetailsInLocalStorage(res.data.user);
            console.log('New user created succcessfully...');
            dispatch(userLogin({ email: res.data.user.email, password: res.data.user.password, userRole: res?.data?.user?.userRole, userid: res.data.user._id }));
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setIsLoading(false);
            console.log(myLogin, "logindata")


          }
        })
        .catch((err) => {
          // console.log(err.code, err.message);
          setIsLoading(false);
        });
    } else {
      setShowErr('All Fields Are Required');
    }
  };

  let savingUSerDetailsInLocalStorage = async value => {
    console.log(value + "........")
    try {
      // const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(
        'user',
        JSON.stringify(
          value
        ),
      );
    } catch (e) {
      console.log('Error in saving data in localStorage ====> ' + e);
    }

    console.log('Done.');
    navigation.navigate('DrawerNav');

  };


  const handleChange = () => {
    setErrMsg('');
    setShowErr('');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <SignUpHeader />
        <View style={style.containerTwo}>
          <View style={style.containerThree}>
            <SignUpImgOne />

            <SignUpImgTwo />

            <FirstNameInput
              firstName={firstName}
              setFirstName={setFirstName}
              handleChange={handleChange}
            />

            <LastNameInput
              lastName={lastName}
              setLastName={setLastName}
              handleChange={handleChange}
            />

            <SignUpEmailInput
              email={email}
              setEmail={setEmail}
              handleChange={handleChange}
            />

            <SignUpPasswordInput
              password={password}
              setPassword={setPassword}
              handleChange={handleChange}
            />

            <DropDown
              userRole={userRole}
              setUserRole={setUserRole}
            />

            <Text style={style.errMsg}>{errMsg}</Text>
            <Text style={style.errMsg}>{showErr}</Text>

            <SignUpButton
              navigation={navigation}
              isLoading={isLoading}
              Submit={Submit}
              disabled={!firstName}
            />

            <SignUpNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
