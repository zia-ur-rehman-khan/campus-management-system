import {YOUR_PROFILE} from '../../Actions/YourProfile/YourProfileType';

const initialState = {
  ProfileData: [],
};

const yourProfileReducer = (state = initialState, action) => {
  console.log('Checkeddd ', action.pro);
  switch (action.type) {
    case YOUR_PROFILE:
      return {
        ProfileData: action.pro,
      };
    default:
      return state;
  }
};

export default yourProfileReducer;
