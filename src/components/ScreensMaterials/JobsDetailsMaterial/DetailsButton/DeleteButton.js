import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import style from '../../../JobsDetails/style';
import { useDispatch, useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import axios from 'axios';
import appSetting from '../../../../../appSetting/appSetting';
import { allJobsAction } from '../../../redux/Actions/ApplyJobs/ApplyJobsAction';



const DeleteButton = (props) => {
  const [BtnTxt] = useState('Delete');
  const [roll, setRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);
  let dispatch = useDispatch()
  let allJobs = useSelector((state) => state.job.allJobs);

  useEffect(() => {
    const rull = myLogin;
    setRoll(rull.userRole);
  });

  const deleteJob = () => {
    // const { applyJob } = props;
    // const uid = firebase.auth().currentUser?.uid;
    // database().ref(`/addJobs/${uid}/${applyJob.pushKey}`).remove();
    // alert('Job deleted... !');
    // console.log(props.applyJob._id)
    let jobId = {
      _id: props.applyJob._id
    }
    axios.post(`${appSetting.serverBaseUrl}/job/delete-job-by-id`, jobId)
      .then(res => {
        console.log(res.data)
        Alert.alert('job deleted')
      })
      .catch(err => {
        console.log('job cannot deleted')
      })
    dispatch(allJobsAction(allJobs.filter(item => item._id !== jobId._id)))
  };

  return (
    <TouchableOpacity onPress={deleteJob}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{BtnTxt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeleteButton;
