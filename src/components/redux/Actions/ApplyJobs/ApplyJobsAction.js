import { ALL_JOBS, APPLY_JOB } from './ApplyJobsTypes';

export const applyJob = (job) => {
  return (dispatch) => {
    dispatch({ type: APPLY_JOB, job });
  };
};

export const allJobsAction = (payload) => {
  return (dispatch) => {
    dispatch({ type: ALL_JOBS, payload });
  };
};
