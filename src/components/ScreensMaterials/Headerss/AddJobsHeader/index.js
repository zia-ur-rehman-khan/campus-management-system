import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from '../../../responsive/responsive';
import MenuIcon from '../../MenuIcon/index';

const AddJobsHeader = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.txtContainer}>
        <Text style={style.mainTxt}>Welcome To Add Jobs Page</Text>
      </View>
      <View style={style.menuIcon}>

        <MenuIcon navigation={navigation} />
      </View>
    </View>
  );
};

export default AddJobsHeader;

const style = StyleSheet.create({
  container: {
    width: '100%',
    // height: '7%',
    backgroundColor: 'green',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('3'),
  },
  mainTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuIcon: {
    position: "absolute",
    left: 0,
    top: 0,
  }
});
