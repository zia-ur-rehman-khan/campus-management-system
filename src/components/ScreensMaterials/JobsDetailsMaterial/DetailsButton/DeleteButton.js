import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';
import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

const DeleteButton = (props) => {
  const [BtnTxt] = useState('Delete');
  const [roll, setRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const rull = myLogin;
    setRoll(rull.selectedValue);
  });

  const deleteJob = () => {
    const {applyJob} = props;
    const uid = firebase.auth().currentUser?.uid;
    database().ref(`/addJobs/${uid}/${applyJob.pushKey}`).remove();
    alert('Job deleted... !');
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
