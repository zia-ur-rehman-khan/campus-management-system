import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropDown = ({selectedValue, setSelectedValue}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AntDesign name="wifi" size={17} color="green" style={styles.icon} />
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Company" value="Company" color="green" />
          <Picker.Item label="Student" value="Student" color="green" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: hp('5.4'),
    width: wp('75'),
    borderWidth: 1,
    paddingLeft: wp('8'),
    borderColor: 'green',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    position: 'absolute',
    left: 11,
    bottom: 11,
  },
});

export default DropDown;
