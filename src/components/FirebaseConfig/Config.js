import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default () => {
  return {
    firebase,
    auth,
    database,
  };
};
