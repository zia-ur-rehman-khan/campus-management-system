import {APPLY_JOB} from '../../Actions/ApplyJobs/ApplyJobsTypes';

const initialState = {
  applyJobs: [],
};

const applyJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOB:
      return {
        applyJobs: action.job,
      };
    default:
      return state;
  }
};

export default applyJobReducer;
