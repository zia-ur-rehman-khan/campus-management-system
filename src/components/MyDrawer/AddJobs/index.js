import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import style from './style';
import AddJobsHeader from '../../ScreensMaterials/Headerss/AddJobsHeader/index';
import AddJobsImag from '../../ScreensMaterials/AddJobsMaterial/AddJobsImag/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AddJobsButton from '../../ScreensMaterials/AddJobsMaterial/AddJobsButton/index';
import AddJobsDropDown from '../../ScreensMaterials/AddJobsMaterial/AddJobsDropDown/index';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

const AddJobs = ({navigation}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryPackage, setSalaryPackage] = useState('');
  const [requirement, setRequirement] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [showErr, setShowErr] = useState('');
  const [myFirstName, setMyFirstName] = useState('');
  const [myLastName, setMyLastName] = useState('');

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`/NewUsers/${uid}`)
      .on('value', (snapshot) => {
        let mySnap = snapshot.val();
        let firstName = mySnap.firstName;
        let lastName = mySnap.lastName;
        setMyFirstName(firstName);
        setMyLastName(lastName);
      });
  }, []);

  const handleSubmit = () => {
    try {
      if (
        jobTitle &&
        salaryPackage &&
        requirement &&
        designation &&
        description
      ) {
        const uid = firebase.auth().currentUser?.uid;
        database().ref(`/addJobs/${uid}`).push({
          jobTitle,
          salaryPackage,
          requirement,
          experience,
          designation,
          description,
          myFirstName,
          myLastName,
        });
        setJobTitle('');
        setSalaryPackage('');
        setRequirement('');
        setDesignation('');
        setDescription('');
        setExperience('');
        navigation.navigate('Jobs');
        alert('Posting Success... !');
      } else {
        setShowErr('All Fields Are Required');
      }
    } catch (err) {
      console.log('error ', err?.message);
    }
  };

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
