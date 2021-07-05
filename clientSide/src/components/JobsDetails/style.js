import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b3b3',
    height: hp('95'),
  },
  containerTwo: {
    flexDirection: 'row',
    marginTop: wp('2'),
    marginLeft: wp('1'),
  },
  arrowContainer: {
    flex: 1,
    marginLeft: wp('3'),
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('3'),
    position: 'relative',
  },
  backIcon: {
    height: 50,
    marginTop: wp('2'),
    color: '#f1f1f1',
  },
  num: {
    flexDirection: 'row',
    fontSize: 17,
  },
  jobTitle: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: wp('30.5'),
  },
  text: {
    color: 'black',
    padding: 1,
    fontSize: 17,
    maxWidth: wp('90'),
  },
  containerThree: {
    flexDirection: 'row',
    marginLeft: wp('1'),
  },
  numTwo: {
    fontSize: 17,
  },
  salaryPkg: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardChild: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#f1f1f1',
    width: wp('95'),
    borderRadius: 20,
    padding: wp('2'),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  tiTle: {
    padding: 1,
    fontSize: 17,
    maxWidth: wp('55'),
  },
  containerFour: {
    flexDirection: 'row',
    marginLeft: wp('1'),
  },
  numThree: {
    fontSize: 17,
  },
  myRequire: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: wp('30.5'),
  },
  requireTitle: {
    padding: 1,
    fontSize: 17,
    maxWidth: wp('58'),
  },
  containerFive: {
    flexDirection: 'row',
    marginLeft: wp('1'),
  },
  numFour: {
    fontSize: 17,
  },
  expe: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: wp('30.5'),
  },
  expeTitle: {
    padding: 1,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  containerSix: {
    flexDirection: 'row',
    marginLeft: wp('1'),
  },
  numSix: {
    fontSize: 17,
  },
  resigSt: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: wp('30.5'),
  },
  resigTitle: {
    padding: 1,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  containerSaven: {
    flexDirection: 'row',
    marginLeft: wp('1'),
  },
  numSaven: {
    fontSize: 17,
  },
  desc: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: wp('30.5'),
  },
  descTitle: {
    padding: 1,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
    marginVertical: wp('2'),
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
