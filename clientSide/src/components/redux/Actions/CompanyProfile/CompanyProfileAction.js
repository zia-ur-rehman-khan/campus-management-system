import {COMPANY_PROFILE} from './CompanyProfileType';

export const companyProfile = (com) => {
  return (dispatch) => {
    dispatch({type: COMPANY_PROFILE, com});
  };
};
