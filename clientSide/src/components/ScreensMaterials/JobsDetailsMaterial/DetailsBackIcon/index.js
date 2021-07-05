import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import style from '../../../JobsDetails/style';

const DetailsBackIcon = ({navigation}) => {
  const backToJob = () => {
    navigation.navigate('Jobs');
  };
  return (
    <View style={style.arrowContainer}>
      <View>
        <ArrowIcon
          name="arrowleft"
          size={23}
          color="black"
          onPress={backToJob}
          style={style.backIcon}
        />
      </View>
    </View>
  );
};

export default DetailsBackIcon;
