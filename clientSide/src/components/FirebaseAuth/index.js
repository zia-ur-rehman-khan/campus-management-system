import auth from '@react-native-firebase/auth';

const signUp = (firstName, lastName, email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => (firstName, lastName, email, password))
    .catch((err) => {
      console.log(err, 'error');
    });

  console.log(firstName, 'firstName');
  console.log(lastName, 'lastName');
  console.log(email, 'email');
  console.log(password, 'password');
};

const logIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, PasswordInput)
    .then(() => (email, password))
    .catch((err) => {
      console.log(err, 'error');
    });

  console.log(email, 'email');
  console.log(password, 'password');
};

export { signUp, logIn };
