import {YOUR_PROFILE} from './YourProfileType';

export const yourProfile = (pro) => {
  return (dispatch) => {
    dispatch({type: YOUR_PROFILE, pro});
  };
};
