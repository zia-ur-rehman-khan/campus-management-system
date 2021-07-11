import { ALL_JOBS, APPLY_JOB } from '../../Actions/ApplyJobs/ApplyJobsTypes';

const initialState = {
  applyJobs: [],
  allJobs: []
};

const applyJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOB:
      return {
        applyJobs: action.job,
      };
    case ALL_JOBS:
      return {
        allJobs: action.payload,
      };
    default:
      return state;
  }
};

export default applyJobReducer;
