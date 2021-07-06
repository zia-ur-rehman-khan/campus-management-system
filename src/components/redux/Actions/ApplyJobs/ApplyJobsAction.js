import {APPLY_JOB} from './ApplyJobsTypes';

export const applyJob = (job) => {
  return (dispatch) => {
    dispatch({type: APPLY_JOB, job});
  };
};
