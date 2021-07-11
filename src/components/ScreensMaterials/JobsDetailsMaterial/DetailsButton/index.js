import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import style from '../../../JobsDetails/style';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import appSetting from '../../../../../appSetting/appSetting';
import { allJobsAction } from '../../../redux/Actions/ApplyJobs/ApplyJobsAction';

const DetailsButton = (props) => {
  let jobId = (props.jobId)

  const [BtnTxt, setBtnTxt] = useState(false);
  const [roll, setRoll] = useState();
  const dispatch = useDispatch()
  let studentDet = useSelector((state) => state.myLog.LoginData);
  let allJobs = useSelector((state) => state.job.allJobs);

  let appliedUser = props?.appliedUsers?.some(user => user?.userId == studentDet?.userid)

  useEffect(() => {
    console.log(appliedUser)
    setBtnTxt(appliedUser)
  }, [appliedUser])

  // setBtnTxt(() => props?.appliedUsers?.some(user => user?.userId == studentDet?.userid));
  // // (props?.appliedUsers?.some(user => user === studentDet?.userid && setBtnTxt(false)))


  const applyBtn = () => {
    // database().ref(`/applicants/${uid}`).set({});

    let studentDetails = {
      jobId: jobId,
      userId: studentDet.userid,
      userName: studentDet.details.name,
    }
    // console.log(studentDetails)
    axios.post(`${appSetting.serverBaseUrl}/job/user-apply-job`, studentDetails)
      .then(res => {
        // console.log("Responed data >>>>> ", res.data.appliedUser)
        let updatedAllJobs = allJobs?.map((item) => ({ ...item, appliedUsers: [...item?.appliedUsers, { userId: studentDet.userid, userName: studentDet?.details?.name }] }))
        dispatch(allJobsAction(updatedAllJobs))
        setBtnTxt(true);
      })
      .catch(err => {
        console.log(err)
      })
  };


  return (
    <>
      {studentDet?.userRole === 'Student' ? (
        <TouchableOpacity onPress={applyBtn} disabled={BtnTxt}>
          <View style={style.btnContainer}>
            <Text style={style.btnText}>
              {BtnTxt ? 'Applyed Success!' : 'Apply'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailsButton;
