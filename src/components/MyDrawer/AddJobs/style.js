import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100'),
  },
  img: {
    width: hp('13'),
    height: hp('13'),
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('3'),
  },
  txtContainer: {
    paddingHorizontal: wp('6'),
    marginTop: wp('5'),
    alignContent: 'flex-start',
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    color: 'green',
    paddingLeft: wp('3'),
  },
  dcText: {
    borderWidth: 1,
    borderColor: 'green',
    color: 'green',
    paddingLeft: wp('3'),
    paddingBottom: wp('12'),
  },
  dcContainer: {
    width: wp('89'),
    marginTop: wp('5'),
    marginLeft: wp('6'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 7,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'green',
    width: '88%',
    // borderRadius: 20,
  },
  loader: {
    position: 'absolute',
    top: hp('59.7'),
    bottom: 0,
    right: 0,
    left: 0,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  errStyle: {
    textAlign: 'center',
    color: 'red',
    marginTop: 5,
  },
});
