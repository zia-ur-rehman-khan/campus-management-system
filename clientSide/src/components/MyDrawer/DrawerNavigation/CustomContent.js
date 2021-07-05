import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

import style from './style';
const {
  container,
  img,
  txtContainer,
  dotOne,
  textOne,
  textTwo,
  dotTwo,
  containerTwo,
  iconContainer,
  icon,
  logOut,
} = style;

function CustomContent(props) {
  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`/StudentProfileData/${uid}`)
      .on('value', (snapshot) => {
        const newData = snapshot.val() ? Object.values(snapshot.val()) : [];
        console.log('User data: ', snapshot);
      });
  }, []);
  const handleSignOut = (props) => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    props.navigation.navigate('LogIn');
  };
  return (
    <View>
      <View>
        <View style={container}>
          <Image source={require('../../../../assets/com.jpg')} style={img} />
          <View style={txtContainer}>
            <View style={dotOne} />
            <Text style={textOne}>Welcome To Campus App</Text>
          </View>

          <View style={txtContainer}>
            <View style={dotTwo} />
            <Text style={textTwo}>App Creator : COMPUTING YARD</Text>
          </View>
        </View>
      </View>
      <View style={containerTwo}>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Log Out"
          onPress={() => handleSignOut(props)}
          {...props}
          style={logOut}
        />
        <View style={iconContainer}>
          <AntDesign name="logout" size={20} color="#4f4f4f" style={icon} />
        </View>
      </View>
    </View>
  );
}

export default CustomContent;
