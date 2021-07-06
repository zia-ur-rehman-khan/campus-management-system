import {USER_LOGIN} from './LogInType';

export const userLogin = (myLog) => {
  return (dispatch) => {
    dispatch({type: USER_LOGIN, myLog});
  };
};
