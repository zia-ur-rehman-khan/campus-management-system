import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SignUpHeader from '../ScreensMaterials/Headerss/SignupHeader/SignUpHeader';
import SignUpButton from '../ScreensMaterials/SignupMaterial/SignUpButton/index';
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
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('Company');
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [showErr, setShowErr] = useState('');

  const Submit = () => {
    if (firstName && lastName && email && password) {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          // console.log(user.uid, 'userr signup');
          database().ref(`/NewUsers/${user.uid}`).set({
            firstName,
            lastName,
            email,
            password,
            selectedValue,
          });
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setIsLoading(false);
          await auth().signOut();
          navigation.navigate('LogIn');
        })
        .catch((err) => {
          console.log(err.code, err.message);
          setIsLoading(false);
        });
    } else {
      setShowErr('All Fields Are Required');
    }
  };

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setErrMsg('');
    setShowErr('');
  }, []);

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
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
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
