import {MY_ROLL} from './RollsType';

export const myRoll = (roll) => {
  return (dispatch) => {
    dispatch({type: MY_ROLL, roll});
  };
};
