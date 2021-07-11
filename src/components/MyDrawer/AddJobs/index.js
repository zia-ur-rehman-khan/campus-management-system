import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import style from './style';
import AddJobsHeader from '../../ScreensMaterials/Headerss/AddJobsHeader/index';
import AddJobsImag from '../../ScreensMaterials/AddJobsMaterial/AddJobsImag/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AddJobsButton from '../../ScreensMaterials/AddJobsMaterial/AddJobsButton/index';
import AddJobsDropDown from '../../ScreensMaterials/AddJobsMaterial/AddJobsDropDown/index';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import appSetting from '../../../../appSetting/appSetting';
import { allJobsAction } from '../../redux/Actions/ApplyJobs/ApplyJobsAction';

const AddJobs = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryPackage, setSalaryPackage] = useState('');
  const [requirement, setRequirement] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [showErr, setShowErr] = useState('');
  const [companyName, setCompanyName] = useState('')
  const [companyId, setCompanyId] = useState('')
  // const [myFirstName, setMyFirstName] = useState('');
  // const [myLastName, setMyLastName] = useState('');

  const dispatch = useDispatch()
  let studentDet = useSelector((state) => state.myLog.LoginData);
  let allJobs = useSelector((state) => state.job.allJobs);

  useEffect(() => {
    console.log(studentDet)
    setCompanyId(studentDet.userid)
    setCompanyName(studentDet.details.name)
    // const uid = firebase.auth().currentUser?.uid;
    // database()
    //   .ref(`/NewUsers/${uid}`)
    //   .on('value', (snapshot) => {
    //     let mySnap = snapshot.val();
    //     let firstName = mySnap.firstName;
    //     let lastName = mySnap.lastName;
    //     setMyFirstName(firstName);
    //     setMyLastName(lastName);
    //   });
  }, [studentDet]);

  const handleSubmit = () => {

    let jobDetails = {
      companyName: companyName,
      companyId: companyId,
      jobtitle: jobTitle,
      salaryPakage: salaryPackage,
      requirement: requirement,
      post: experience,
      designation: designation,
      description: description,
    }
    if (
      jobTitle &&
      salaryPackage &&
      requirement &&
      designation &&
      description
    ) {
      console.log(jobDetails)
      axios.post(`${appSetting.serverBaseUrl}/job/add-new-job`, jobDetails)
        .then(createdJob => {
          console.log(createdJob.data + "Job created successfully")
          setJobTitle('');
          setSalaryPackage('');
          setRequirement('');
          setDesignation('');
          setDescription('');
          setExperience('');
          dispatch(allJobsAction([...allJobs, createdJob?.data?.companyDetails])
          )
          navigation.navigate('Jobs');
          alert('Posting Success... !');
        })
        .catch(err => {
          console.log('error ', err?.message);
        })

    } else {
      setShowErr('All Fields Are Required');
    }
  }

  const handleChange = () => {
    setShowErr('');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <AddJobsHeader navigation={navigation} />
        <AddJobsImag />
        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={jobTitle}
            placeholder="Job Title"
            onChangeText={(text) => setJobTitle(text)}
            placeholderTextColor="green"
            keyboardType="default"
            onChange={handleChange}
          />
        </View>

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={salaryPackage}
            placeholder="Salary Package"
            onChangeText={(text) => setSalaryPackage(text)}
            placeholderTextColor="green"
            keyboardType="number-pad"
            onChange={handleChange}
          />
        </View>

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={requirement}
            placeholder="Requirement"
            onChangeText={(text) => setRequirement(text)}
            placeholderTextColor="green"
            keyboardType="default"
            onChange={handleChange}
          />
        </View>

        <AddJobsDropDown
          experience={experience}
          setExperience={setExperience}
        />

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            placeholder="Designation"
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            placeholderTextColor="green"
            keyboardType="default"
            onChange={handleChange}
          />
        </View>

        <View style={style.dcContainer}>
          <TextInput
            style={style.dcText}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholderTextColor="green"
            keyboardType="default"
            onChange={handleChange}
          />
        </View>
        <View>
          <Text style={style.errStyle}>{showErr}</Text>
        </View>
        <AddJobsButton handleSubmit={handleSubmit} disabled={!jobTitle} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddJobs;
