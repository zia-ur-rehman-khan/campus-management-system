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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import appSetting from '../../../appSetting/appSetting';

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

    console.log("inside submit : ", email + " " + `${appSetting.serverBaseUrl}/users/signin`)
    setIsLoading(true);
    let userDetails = {
      email,
      password,
    };
    const savingUSerDetailsInLocalStorage = async (value) => {
      console.log(value + '........');
      try {
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
      setIsLoading(false);
      navigation.navigate('DrawerNav');
    };
    await axios
      .post(`${appSetting.serverBaseUrl}/users/signin`, userDetails)
      .then((succes) => {
        console.log(succes.data, 'data ayega bhai');
        if (succes.data.status) {
          savingUSerDetailsInLocalStorage(succes.data.user);
          dispatch(
            userLogin({
              email: succes.data.user.email,
              userRole: succes.data.user.userRole,
              userid: succes.data.user._id,
              details: {
                name: succes?.data?.user?.studentDetails?.studentName || succes?.data?.user?.companyDetails?.companyName,
                dateOfBirth: succes?.data?.user?.studentDetails?.dateOfBirth,
                qualification: succes?.data?.user?.studentDetails?.studentName,
                description: succes?.data?.user?.companyDetails?.companyDescription
              },



            }),
          );
        } else if (!succes.data.status) {
          setErrMsg(succes.data.errMessage);
        }
      })

      .catch((err) => {
        console.log(err.message, 'err');
        setErrMsg(err?.message);
        setIsLoading(false);
      });



    // try {
    //   await firebase.auth().signInWithEmailAndPassword(email, password);
    //   dispatch(userLogin({ email, password }));
    //   setEmail('');
    //   setPassword('');
    //   setIsLoading(false);
    //   navigation.navigate('DrawerNav');
    // } catch (err) {
    //   console.log(err.message, 'err');
    //   setErrMsg(err?.message);
    //   setIsLoading(false);
    // }
  };

  const handleChange = () => {
    setErrMsg('');
  };

  // if (firebase?.auth().currentUser) {
  //   navigation.navigate('DrawerNav');
  // }

  let isUserLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log('What is in jsonValue =====> ' + jsonValue);
      if (jsonValue != null) {
        let userdetail = JSON.parse(jsonValue)
        console.log(userdetail)
        axios.post(`${appSetting.serverBaseUrl}/users/get-user-by-id`, { _id: userdetail._id })
          .then(user => {
            dispatch(
              userLogin({
                email: user.data.user.email,
                password: user.data.user.password,
                userRole: user.data.user.userRole,
                userid: user.data.user._id,
                details: {
                  name: user?.data?.user?.studentDetails?.studentName || user?.data?.user?.companyDetails?.companyName,
                  dateOfBirth: user?.data?.user?.studentDetails?.dateOfBirth,
                  qualification: user?.data?.user?.studentDetails?.studentName,
                  description: user?.data?.user?.companyDetails?.companyDescription
                },
              }),
            );
            // console.log(user.data.user, "complete user details")
            // console.log(user.data.user.email, "complete user details")
            return navigation.navigate('DrawerNav');
          })
          .catch(err => {
            console.log(err, 'error in get user by id')
          })

      }
    } catch (e) {
      console.log('Unable to check user login or not ====> ' + e);
    }
    console.log('Done.');
  };

  useEffect(() => {
    isUserLogin();
  }, []);

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
