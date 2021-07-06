import {MY_ROLL} from '../../Actions/Rolls/RollsType';

const initialState = {
  Student: '',
};

const RollReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_ROLL:
      return {
        Student: action.roll,
      };
    // console.log('Checkeddd ', action.roll);
    default:
      return state;
  }
};

export default RollReducer;
