import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, BackHandler } from 'react-native';
import style from './style';
import CompanyProfileHeader from '../../ScreensMaterials/Headerss/CompanyProfileHeader/CompanyHeader';
import {
  CompanyImg,
  CompanyCoverImg,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileImage/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {
  EditButton,
  SaveButton,
  CancelButton,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileButtons/index';
import {
  CompanyNameText,
  CompanyDescriptionText,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileCardTeXt/index';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { companyProfile } from '../../redux/Actions/CompanyProfile/CompanyProfileAction';
import { firebase } from '@react-native-firebase/auth';
import axios from 'axios';
import appSetting from '../../../../appSetting/appSetting';
import { userLogin } from '../../redux/Actions/LogIn/LogInAction';

const CompanyProfileScreen = ({ navigation }) => {
  const currentText = useSelector((state) => state.myLog.LoginData);
  const [isLoading, setIsLoading] = useState(false);
  const [myTxt, setMyTxt] = useState();
  const [myDcTxt, setMyDcTxt] = useState();
  const [edit, setEdit] = useState(true);
  const [abcd, setAbcd] = useState();
  const [etc, setEtc] = useState();
  const dispatch = useDispatch();

  console.log(useSelector(state => state), "state")

  let companyid = useSelector((state => state.myLog.LoginData.userid))
  console.log(companyid, "comapny iddd")


  const editBtn = () => {
    setEdit();
  };

  const cancelBtn = () => {
    setEdit(true);
  };

  const saveBtn = () => {
    // const uid = firebase.auth().currentUser?.uid;
    // database().ref(`/CompanyData/${uid}`).push({
    //   abcd,
    //   etc,
    // });

    let companyDetails = {
      _id: companyid,
      companyDetails: {
        companyName: abcd,
        companyDescription: etc,
      }
    }
    console.log('>>>>>>>>>>>>>' + abcd, etc)
    axios.post(`${appSetting.serverBaseUrl}/users/add-company-detailes`, companyDetails)
      .then(savedDetails => {
        dispatch(
          userLogin({
            ...currentText,
            details: {
              name: savedDetails.data.companyDetails.companyName,
              description: savedDetails.data.companyDetails.companyDescription
            }
          }),
        );
        console.log('saved detailes', savedDetails)
        // dispatch(companyProfile({ abcd, etc }));
        setEdit(true);
        setMyTxt(abcd);
        setMyDcTxt(etc);
      })
      .catch(err => {
        console.log(err);
      })

  }

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    // setIsLoading(true);
    setMyTxt(currentText ? currentText?.details?.name : '');
    setEtc(currentText ? currentText?.details?.description : '');
    setAbcd(currentText ? currentText?.details?.name : '');
    setMyDcTxt(currentText ? currentText?.details?.description : '');
    //     setIsLoading(false);
    // const uid = firebase.auth().currentUser?.uid;
    // database()
    //   .ref(`/CompanyData/${uid}`)
    //   .on('value', (snapshot) => {
    //     let newAppliedJobs = snapshot.val()
    //       ? Object.values(snapshot.val())
    //       : [];
    //     let [data] = newAppliedJobs;
    // dispatch(companyProfile(data));
    //   });
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, [currentText]);

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <CompanyProfileHeader navigation={navigation} />
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={40} color="green" />
          </View>
        ) : (
          <>
            <CompanyCoverImg />
            <View style={style.containerTwo}>
              <CompanyImg />
              <View style={style.card}>
                <View>
                  <CompanyNameText
                    edit={edit}
                    myTxt={myTxt}
                    abcd={abcd}
                    setAbcd={setAbcd}
                  />

                  <View style={style.line} />

                  <CompanyDescriptionText
                    edit={edit}
                    myDcTxt={myDcTxt}
                    etc={etc}
                    setEtc={setEtc}
                  />
                </View>
              </View>
            </View>
            <View style={style.cardBtn}>
              <View style={style.btnContainer}>
                <EditButton editBtn={editBtn} />

                <View style={style.btnLine} />

                <SaveButton saveBtn={saveBtn} />

                <View style={style.btnLine} />

                <CancelButton cancelBtn={cancelBtn} />
              </View>
            </View>
          </>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CompanyProfileScreen;
