import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';

const AddJobsDropDown = ({experience, setExperience}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Picker
          selectedValue={experience}
          onValueChange={(itemValue, itemIndex) => setExperience(itemValue)}>
          <Picker.Item label="Beginner" value="Beginner" color="green" />
          <Picker.Item
            label="Junior Developer"
            value="Junior Developer"
            color="green"
          />
          <Picker.Item
            label="Senior Developer"
            value="Senior Developer"
            color="green"
          />
          <Picker.Item
            label="Lead Developer"
            value="Lead Developer"
            color="green"
          />
          <Picker.Item
            label="Full Stack Developer"
            value="Full Stack Developer"
            color="green"
          />
          <Picker.Item
            label="Front End Developer"
            value="Front End Developer"
            color="green"
          />
          <Picker.Item
            label="Back End Developer"
            value="Back End Developer"
            color="green"
          />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: hp('6.7'),
    width: wp('88'),
    borderWidth: 1,
    paddingLeft: 2,
    marginTop: wp('5'),
    borderColor: 'green',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default AddJobsDropDown;
