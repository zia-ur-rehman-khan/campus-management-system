import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: hp('25'),
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  txtContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  dotOne: {
    height: 7,
    width: 7,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dotTwo: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  textOne: {
    color: 'white',
    marginLeft: 7,
    fontWeight: 'bold',
  },
  textTwo: {
    color: 'white',
    marginLeft: 5,
    fontSize: 10,
  },
  containerTwo: {
    marginTop: 20,
    marginHorizontal: 8,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 18,
  },
  icon: {
    position: 'absolute',
    bottom: 14,
  },
  logOut: {
    marginHorizontal: hp('8'),
  },
});
