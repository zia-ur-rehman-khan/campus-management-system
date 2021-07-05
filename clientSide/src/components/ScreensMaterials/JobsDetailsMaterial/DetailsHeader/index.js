import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DetailsBackIcon from '../DetailsBackIcon/index';

const DetailsHeader = ({navigation}) => {
  return (
    <View style={style.container}>
      <View>
        <DetailsBackIcon navigation={navigation} />
      </View>
      <View style={style.txtContainer}>
        <Text style={style.mainTxt}>Jobs Details</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;

const style = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: 'green',
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
