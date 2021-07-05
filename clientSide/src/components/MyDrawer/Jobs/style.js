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
    width: 85,
    height: 85,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('4'),
  },
  loader: {
    justifyContent: 'center',
    height: hp('60'),
  },
  bottomTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    borderWidth: 1,
    borderColor: 'green',
    width: wp('90'),
    height: hp('83'),
    alignSelf: 'center',
    margin: wp('3'),
    borderRadius: wp('7'),
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: wp('3'),
    backgroundColor: 'green',
  },
  bottomTxt: {
    fontWeight: 'bold',
    color: 'green',
  },
  touchAbleContent: {
    width: wp('80'),
    height: hp('15'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('5'),
    borderRadius: wp('5'),
    padding: wp('3'),
    backgroundColor: '#b3b3b3',
  },
  teXt: {
    maxWidth: wp('100'),
    maxHeight: hp('5'),
    fontWeight: 'bold',
    color: '#f1f1f1',
    letterSpacing: 0.6,
    lineHeight: hp('2.4'),
    borderBottomWidth: 1,
    borderColor: '#00ff00',
  },
  posterName: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    textAlign: 'center',
    color: 'white',
    width: wp('50'),
    borderRadius: wp('30'),
    backgroundColor: '#b3b3b3',
    marginTop: wp('0.3'),
  },
});
