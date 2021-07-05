import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

const DetailsButton = () => {
  const [BtnTxt, setBtnTxt] = useState(true);
  const [roll, setRoll] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`NewUsers/${uid}`)
      .on('value', (snapshot) => {
        const user = snapshot.val();
        const newUser = user.selectedValue;
        setRoll(newUser);
      });
  });

  const applyBtn = () => {
    const uid = firebase.auth().currentUser?.uid;
    database().ref(`/applicants/${uid}`).set({});
    setBtnTxt();
  };

  return (
    <>
      {roll === 'Student' ? (
        <TouchableOpacity onPress={applyBtn} disabled={!BtnTxt}>
          <View style={style.btnContainer}>
            <Text style={style.btnText}>
              {BtnTxt ? 'Apply' : 'Applyed Success!'}
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
