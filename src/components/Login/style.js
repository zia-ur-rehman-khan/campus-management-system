import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../responsive/responsive';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: hp('95'),
  },
  containerThree: {
    borderRadius: 40,
    height: '100%',
    paddingBottom: 22,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
  },
  coverImgCon: {
    width: '100%',
    height: '100%',
    top: 0,
    borderRadius: 50,
    zIndex: 0,
    position: 'absolute',
    opacity: 0.3,
  },
  coverImg: {
    width: '100%',
    height: '104%',
    borderRadius: 40,
    zIndex: 0,
    position: 'relative',
  },
  txtContainer: {
    paddingHorizontal: 35,
    alignContent: 'flex-start',
    marginTop: wp('8'),
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 5,
    color: 'white',
    paddingLeft: wp('10'),
  },
  icon: {
    position: 'absolute',
    left: 45,
    bottom: 11,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  mainTwo: {
    padding: 10,
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 30,
    zIndex: 5,
    position: 'relative',
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
  },
  loader: {
    // textAlign: 'center',
    // position: 'absolute',
    // top: hp('59.7'),
    // bottom: 0,
    // right: 0,
    // left: 0,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  signupTxt: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
  logInIcon: {
    position: 'absolute',
    left: 15,
  },
});
