import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  BackHandler,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import style from './style';
import ProfileHeader from '../../ScreensMaterials/Headerss/ProfileHeader/index';
import ProfileImage from '../../ScreensMaterials/ProfileMaterial/ProfileImage/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {
  ProfileButton,
  ProfileCv,
} from '../../ScreensMaterials/ProfileMaterial/ProfileButton/index';
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {yourProfile} from '../../redux/Actions/YourProfile/YourProfileAction';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImageModal from 'react-native-image-modal';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import appSetting from '../../../../appSetting/appSetting';
import { useDispatch, useSelector } from 'react-redux';
// import {useDispatch} from 'react-redux';

const ProfileScreen = ({ navigation }) => {
  // const dispatch = useDispatch();
  const [DateOb] = useState('Your Date Of Birth :');
  const [PickPics, setPickPics] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [education, setEducation] = useState('');
  const [Pics, setPics] = useState('');
  const [cvPic, setCvPic] = useState('');
  const [showPic, setShowPic] = useState('');
  const [showErr, setShowErr] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [cvPicture, setCvPicture] = useState('');
  const [profilePicLoading, setprofilePicLoading] = useState(false);
  const [cvPicLoading, setCvPicLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMyLoading, setIsMyLoading] = useState(false);
  const storageRef = storage().ref(
    `/Dpimages/${PickPics ? PickPics.name : ''}`,
  );
  const storageCv = storage().ref(`/Cvimages/${Pics ? Pics.name : ''}`);

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };
  let studentid = useSelector((state => state.myLog.LoginData.userid))

  useEffect(() => {
    setIsMyLoading(true);
    // const uid = firebase.auth().currentUser?.uid;
    // database()
    //   .ref(`/StudentProfileData/${uid}`)
    //   .on('value', (snapshot) => {
    //     let newSnap = snapshot.val();
    //     let myCurrPic = newSnap ? newSnap.downloadURL : '';
    //     let myCurrCvPic = newSnap ? newSnap.myDownloadURL : '';
    //     let myName = newSnap ? newSnap.name : '';
    //     let myDatOfBirth = newSnap ? newSnap.date : '';
    //     let myEducation = newSnap ? newSnap.education : '';
    //     setName(myName);
    //     setEducation(myEducation);
    //     setShowPic(myCurrPic);
    //     setCvPic(myCurrCvPic);
    //     myDatOfBirth ? setDate(new Date(myDatOfBirth)) : [];
    setIsMyLoading(false);
    // });
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, []);

  const updateImages = async (file) => {
    try {
      setprofilePicLoading(true);
      const myPicOrg = file.uri;
      const result = await RNFetchBlob.fs.readFile(myPicOrg, 'base64');
      const task = storageRef.putString(result, 'base64', {
        contentType: file.type,
      });
      task.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      await task.then((imageSnapshot) => {
        console.log('Image Upload Successfully');
        storage()
          .ref(imageSnapshot.metadata.fullPath)
          .getDownloadURL()
          .then((downloadURL) => {
            console.log('image ', downloadURL);
            setProfilePic(downloadURL);
          });
        setprofilePicLoading(false);
      });
    } catch (err) {
      alert(JSON.stringify(err));
      console.log('errr ', err);
      setprofilePicLoading(false);
    }
  };

  const saveCvImgUrl = async (res) => {
    try {
      setCvPicLoading(true);
      const myCvPic = res.uri;
      const cvResult = await RNFetchBlob.fs.readFile(myCvPic, 'base64');
      const cvTask = storageCv.putString(cvResult, 'base64', {
        contentType: res.type,
      });
      cvTask.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      await cvTask.then((imageSnapshot) => {
        console.log('Image Upload Successfully');
        storage()
          .ref(imageSnapshot.metadata.fullPath)
          .getDownloadURL()
          .then((myDownloadURL) => {
            console.log('image ', myDownloadURL);
            setCvPicture(myDownloadURL);
          });
      });
      setCvPicLoading(false);
    } catch (err) {
      console.log(err);
      setCvPicLoading(false);
    }
  };

  const handleChange = () => {
    setShowErr('');
  };

  const handleSubmit = async () => {
    if (name && date && education) {
      // try {
      //   setIsLoading(true);
      //   const uid = firebase.auth().currentUser?.uid;
      //   let currDate = date ? date?.toISOString()?.split('t')[0] : [];
      //   await database().ref(`/StudentProfileData/${uid}`).update({
      //     downloadURL: profilePic,
      //     name,
      //     education,
      //     myDownloadURL: cvPicture,
      //     date: currDate,
      //   });
      //   
      // } catch (err) {
      //   console.log(err);
      //   setIsLoading(false);
      // }
      console.log(studentid)
      let studentDetails = {
        _id: studentid,
        studentDetails: {
          studentName: name,
          dateOfBirth: date,
          qualification: education
        }
      }
      axios.post(`${appSetting.serverBaseUrl}/users/add-student-detailes`, studentDetails)
        .then(savedDetails => {
          console.log('saved detailes', savedDetails)
          setIsLoading(false);
          Alert.alert('Your Data Is Now SaveD!');

        }).catch(err => {
          console.log(err);
          setIsLoading(false);
        })
    } else {
      setShowErr('PleasE Required All Fields');
    }
  };
  return (
    <>
      {isMyLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={40} color="green" />
        </View>
      ) : (
        <KeyboardAwareScrollView>
          <View style={style.container}>
            <ProfileHeader navigation={navigation} />
            <ProfileImage
              PickPics={PickPics}
              showPic={showPic}
              setPickPics={setPickPics}
              updateImages={updateImages}
              profilePicLoading={profilePicLoading}
              setprofilePicLoading={setprofilePicLoading}
            />

            <View>
              <View style={style.txtContainer}>
                <AntDesign
                  name="contacts"
                  size={17}
                  color="green"
                  style={style.icon}
                />
                <TextInput
                  style={style.text}
                  value={name}
                  placeholder="Your Name"
                  onChangeText={(text) => setName(text)}
                  placeholderTextColor="green"
                  keyboardType="name-phone-pad"
                  onChange={handleChange}
                />
              </View>

              <Text style={style.dateOB}>{DateOb}</Text>

              <TouchableOpacity style={style.dateContainer}>
                <DatePicker
                  date={date}
                  onDateChange={(text) => setDate(text)}
                  mode="date"
                  style={style.datePicker}
                />
              </TouchableOpacity>

              <View style={style.txtContainer}>
                <MaterialCommunityIcons
                  name="cast-education"
                  size={17}
                  color="green"
                  style={style.icon}
                />
                <TextInput
                  style={style.text}
                  placeholder="Your Education"
                  value={education}
                  onChangeText={(text) => setEducation(text)}
                  placeholderTextColor="green"
                  keyboardType="name-phone-pad"
                  onChange={handleChange}
                />
              </View>
            </View>

            <ProfileCv
              Pics={Pics}
              setPics={setPics}
              saveCvImgUrl={saveCvImgUrl}
              cvPic={cvPic}
              cvPicLoading={cvPicLoading}
            />

            <Text style={style.errStyle}>{showErr}</Text>

            <ProfileButton
              Submit={handleSubmit}
              isLoading={isLoading}
              disabled={!name}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default ProfileScreen;
