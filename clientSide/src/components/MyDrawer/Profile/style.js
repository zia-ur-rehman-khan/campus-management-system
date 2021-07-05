import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('95'),
  },
  img: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('10'),
  },
  txtContainer: {
    paddingHorizontal: hp('5'),
    marginTop: wp('10'),
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 5,
    color: 'black',
    paddingLeft: wp('10'),
  },
  icon: {
    position: 'absolute',
    left: 45,
    bottom: 11,
  },
  btnIcon: {
    position: 'absolute',
    left: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  dateOB: {
    textAlign: 'center',
    color: 'green',
    marginTop: wp('8'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  selectedImg: {
    marginTop: wp('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: wp('100'),
    height: hp('15'),
  },
  datePicker: {
    height: hp('5'),
    width: hp('40'),
    marginTop: wp('2'),
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cvUploaded: {
    alignSelf: 'center',
    height: hp('4'),
    width: hp('25'),
    backgroundColor: '#b3b3b3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5'),
  },
  cvMain: {
    color: 'white',
    fontWeight: 'bold',
  },
  errStyle: {
    textAlign: 'center',
    color: 'red',
  },
});
