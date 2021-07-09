import React, { useEffect, useState } from 'react';
import JobsScreen from '../Jobs/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Profile/index';
import AddJobs from '../AddJobs/index';
import CompanyProfileScreen from '../../MyDrawer/CompanyProfile/index';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';
// import {userLogin} from '../../redux/Actions/LogIn/LogInAction';
import { firebase } from '@react-native-firebase/auth';
import CustomContent from './CustomContent';
import { Text } from 'react-native';
import axios from 'axios';
import appSetting from '../../../../appSetting/appSetting';

const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }) => {
  const myLogin = useSelector((state) => state.myLog.LoginData);
  const userRoll = myLogin.userRole





















  // const dispatch = useDispatch();
  console.log("user is here in drawer")
  useEffect(() => {
    console.log(myLogin.userRole === 'Student', "my login")
    // setUserRoll(myLogin.userRole)
    // const roll = myLogin;
    // setUserRoll(roll.selectedValue);
    // const uid = firebase.auth()?.currentUser?.uid;
    // database()
    //   .ref(`NewUsers/${uid}`)
    //   .on('value', (snapshot) => {
    //     const user = snapshot ? snapshot.val() : [];
    //     const newUser = snapshot ? user?.selectedValue : '';
    //     console.log(uid);
    //     setUserRoll(snapshot.val()?.selectedValue);
    //   });
  }, [myLogin]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: 'green',
        activeTintColor: '#f1f1f1',
        inactiveTintColor: 'green',
      }}>
      {userRoll === 'Student' ? (
        <Drawer.Screen
          name="Your Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-profile"
                size={20}
                color="#4f4f4f"
              />
            ),
          }}
        />
      ) : null}

      {userRoll === 'Company' ? (
        <Drawer.Screen
          name="Company Profile"
          component={CompanyProfileScreen}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-profile"
                size={20}
                color="#4f4f4f"
              />
            ),
          }}
        />
      ) : null}

      {userRoll === 'Student' || 'Company' ? (
        <Drawer.Screen
          name="Jobs"
          component={JobsScreen}
          options={{
            drawerIcon: () => (
              <Foundation name="social-joomla" size={20} color="#4f4f4f" />
            ),
          }}
        />
      ) : null}

      {userRoll === 'Company' ? (
        <Drawer.Screen
          name="Add Jobs"
          component={AddJobs}
          options={{
            drawerIcon: () => (
              <FontAwesome5 name="journal-whills" size={20} color="#4f4f4f" />
            ),
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
