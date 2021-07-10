import { USER_LOGIN } from '../../Actions/LogIn/LogInType';

const initialState = {
  LoginData: false,
};

const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log(action.myLog, "myLog")
      return {
        ...state,
        LoginData: action.myLog,
      };
    default:
      return state;
  }

};

export default LogInReducer;
