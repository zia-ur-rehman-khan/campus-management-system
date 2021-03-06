import React, { useEffect, useState } from 'react';
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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../responsive/responsive';
import { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import DeleteButton from '../../ScreensMaterials/JobsDetailsMaterial/DetailsButton/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import appSetting from '../../../../appSetting/appSetting';
import axios from 'axios';
import { allJobsAction } from '../../redux/Actions/ApplyJobs/ApplyJobsAction';

const JobsScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(false);
  const [myJobs, setMyJobs] = useState([]);
  const [myJobsStudents, setMyJobsStudents] = useState([]);
  const [userRoll, setUserRoll] = useState();
  const dispatch = useDispatch()
  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  let studentDet = useSelector((state) => state.myLog.LoginData);
  let allJobs = useSelector((state) => state.job.allJobs);

  useEffect(() => {
    setUserRoll(studentDet.userRole)
    //   const uid = firebase.auth().currentUser?.uid;
    //   console.log(uid);
    //   database()
    //     .ref(`NewUsers/${uid}`)
    //     .on('value', (snapshot) => {
    //       let user = snapshot ? snapshot.val() : [];
    //       let newUser = user ? user?.selectedValue : '';
    //       setUserRoll(newUser);
    //     });
  }, []);

  useEffect(() => {
    // setIsStudentLoading(true);
    // try {
    //   database()
    //     .ref('/addJobs/')
    //     .on('value', (snapshot) => {
    //       const mySnaap = snapshot.val();
    //       const newSnaap = mySnaap ? Object.values(mySnaap) : [];
    //       let allJobs = [];
    //       newSnaap.forEach((tex, i) => {
    //         const aa = Object.values(tex);
    //         const newData = Object.values(aa);
    //         newData?.forEach((job) => {
    //           allJobs.push(job);
    //         });
    //       });
    //       setMyJobsStudents(allJobs);
    //       setIsStudentLoading(false);
    //     });
    // } catch (err) {
    //   console.log(err);
    //   setIsStudentLoading(false);
    // }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(`${appSetting.serverBaseUrl}/job/get-all-jobs`)
      .then((jobs) => {
        console.log('All jobs found successfully ' + JSON.stringify(jobs.data.jobDetails));
        dispatch(allJobsAction(jobs.data.jobDetails))
        setMyJobs(jobs.data.jobDetils);
        setMyJobsStudents(jobs?.data?.jobDetails)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('unbale to get all jobs ' + err);
        setIsLoading(false);
      }, [route?.params?.refreshData]);
    // try {
    //   const uid = firebase.auth().currentUser?.uid;
    //   database()
    //     .ref(`/addJobs/${uid}`)
    //     .on('value', (snapshot) => {
    //       let snapVal = snapshot.val();
    //       let mySnaap = snapVal ? Object.values(snapshot.val()) : [];
    //       let pushKeys = snapVal ? Object.keys(snapshot.val()) : [];
    //       mySnaap = mySnaap.map((val, i) => ({ ...val, pushKey: pushKeys[i] }));
    //       setMyJobs(mySnaap);
    //       setIsLoading(false);
    //     });
    //   BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    // }
  }, []);

  // }
  const jobDetail = (index) => {
    navigation.navigate('JobsDetails', {
      // myJobs: myJobs,
      myJobs: allJobs?.filter((item) => item?.companyId === studentDet.userid),
      index: index,
    });
  };

  const jobsDetails = (index) => {
    navigation.navigate('JobsDetails', {
      myJobsStudents: allJobs,
      index: index,
    });
  };

  if (!studentDet.userid) {
    return navigation.navigate('LogIn');
  }

  console.log("alljobs", allJobs)
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
                allJobs?.filter((item) => item?.companyId === studentDet.userid)
                  ?.map((applyJob, index) => {
                    return (
                      <>
                        <TouchableOpacity
                          style={style.touchAbleContent}
                          onPress={() => jobDetail(index)}>
                          <Text numberOfLines={1} style={style.teXt}>
                            Job Title : {applyJob.jobtitle}
                          </Text>
                          <Text numberOfLines={1} style={style.teXt}>
                            Salary Package : {applyJob.salaryPakage}
                          </Text>
                          <Text numberOfLines={1} style={style.teXt}>
                            Requirement : {applyJob.requirement}
                          </Text>
                          <Text numberOfLines={1} style={style.teXt}>
                            Experience : {applyJob.post}
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
                allJobs.map((applyJob, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={style.touchAbleContent}
                        onPress={() => jobsDetails(index)}>
                        <Text
                          index={index}
                          numberOfLines={1}
                          style={style.teXt}>
                          Job Title : {applyJob.jobtitle}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Salary Package : {applyJob.salaryPakage}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Requirement : {applyJob.requirement}
                        </Text>
                        <Text numberOfLines={1} style={style.teXt}>
                          Experience : {applyJob.post}
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
                          Posted By {applyJob.companyName}
                        </Text>
                      </View>
                    </View>
                  );
                })
              )
            ) : (
              []
            )}

            <View style={{ paddingBottom: wp('4') }} />
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
