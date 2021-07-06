import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  BackHandler,
  TouchableHighlight,
} from 'react-native';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../responsive/responsive';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import DeleteButton from '../../ScreensMaterials/JobsDetailsMaterial/DetailsButton/DeleteButton';

const JobsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(false);
  const [myJobs, setMyJobs] = useState([]);
  const [myJobsStudents, setMyJobsStudents] = useState([]);
  const [userRoll, setUserRoll] = useState();

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    console.log(uid);
    database()
      .ref(`NewUsers/${uid}`)
      .on('value', (snapshot) => {
        let user = snapshot ? snapshot.val() : [];
        let newUser = user ? user?.selectedValue : '';
        setUserRoll(newUser);
      });
  }, []);

  useEffect(() => {
    setIsStudentLoading(true);
    try {
      database()
        .ref('/addJobs/')
        .on('value', (snapshot) => {
          const mySnaap = snapshot.val();
          const newSnaap = mySnaap ? Object.values(mySnaap) : [];
          let allJobs = [];
          newSnaap.forEach((tex, i) => {
            const aa = Object.values(tex);
            const newData = Object.values(aa);
            newData?.forEach((job) => {
              allJobs.push(job);
            });
          });
          setMyJobsStudents(allJobs);
          setIsStudentLoading(false);
        });
    } catch (err) {
      console.log(err);
      setIsStudentLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    try {
      const uid = firebase.auth().currentUser?.uid;
      database()
        .ref(`/addJobs/${uid}`)
        .on('value', (snapshot) => {
          let snapVal = snapshot.val();
          let mySnaap = snapVal ? Object.values(snapshot.val()) : [];
          let pushKeys = snapVal ? Object.keys(snapshot.val()) : [];
          mySnaap = mySnaap.map((val, i) => ({...val, pushKey: pushKeys[i]}));
          setMyJobs(mySnaap);
          setIsLoading(false);
        });
      BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, []);

  const jobDetail = (index) => {
    navigation.navigate('JobsDetails', {
      myJobs: myJobs,
      index: index,
    });
  };

  const jobsDetails = (index) => {
    navigation.navigate('JobsDetails', {
      myJobsStudents: myJobsStudents,
      index: index,
    });
  };

  if (!firebase?.auth().currentUser?.uid) {
    navigation.navigate('LogIn');
  }
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <JobsHeader navigation={navigation} />
        <View style={style.mainCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <JobImg />
            {userRoll === 'Company' ? (
              isLoading ? (
                <View style={style.loader}>
                  <ActivityIndicator size={40} color="green" />
                </View>
              ) : (
                myJobs.map((applyJob, index) => {
                  return (
                    <>
                      <TouchableOpacity
                        style={style.touchAbleContent}
                        onPress={() => jobDetail(index)}>
                        <Text numberOfLines={1} style={style.teXt}>
                          Job Title : {applyJob.jobTitle}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Salary Package : {applyJob.salaryPackage}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Requirement : {applyJob.requirement}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Experience : {applyJob.experience}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Designation : {applyJob.designation}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Description : {applyJob.description}
                        </Text>
                      </TouchableOpacity>
                      {userRoll === 'Company' ? (
                        <DeleteButton applyJob={applyJob} />
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
              )
            ) : (
              []
            )}

            {userRoll === 'Student' ? (
              isStudentLoading ? (
                <View style={style.loader}>
                  <ActivityIndicator size={40} color="green" />
                </View>
              ) : (
                myJobsStudents.map((applyJob, index) => {
                  return (
                    <>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={style.touchAbleContent}
                        onPress={() => jobsDetails(index)}>
                        <Text
                          index={index}
                          numberOfLines={1}
                          style={style.teXt}>
                          Job Title : {applyJob.jobTitle}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Salary Package : {applyJob.salaryPackage}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Requirement : {applyJob.requirement}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Experience : {applyJob.experience}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Designation : {applyJob.designation}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Description : {applyJob.description}
                        </Text>
                      </TouchableOpacity>
                      <View style={style.posterName}>
                        <Text style={style.poster}>
                          Posted By {applyJob.myFirstName} {applyJob.myLastName}
                        </Text>
                      </View>
                    </>
                  );
                })
              )
            ) : (
              []
            )}

            <View style={{paddingBottom: wp('4')}} />
          </ScrollView>
        </View>
        <View style={style.bottomTxtContainer}>
          <View style={style.dot} />
          <Text style={style.bottomTxt}>
            Select to the Favourite Job & Go To the Job Details
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JobsScreen;
