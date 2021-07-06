import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

const MenuIcon = ({navigation}) => {
  return (
    <View style={styles.iconContainer}>
      <Icon
        name="menu"
        color="white"
        size={27}
        style={styles.mainIcon}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  mainIcon: {
    marginBottom: wp('2'),
    marginLeft: wp('4'),
  },
});
