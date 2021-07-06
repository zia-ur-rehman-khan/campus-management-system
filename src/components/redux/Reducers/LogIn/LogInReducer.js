import {USER_LOGIN} from '../../Actions/LogIn/LogInType';

const initialState = {
  LoginData: [],
};

const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        LoginData: action.myLog,
      };
    default:
      return state;
  }
};

export default LogInReducer;
