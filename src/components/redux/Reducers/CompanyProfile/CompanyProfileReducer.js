import {COMPANY_PROFILE} from '../../Actions/CompanyProfile/CompanyProfileType';

const initialState = {
  CompanyData: [],
};

const CompanyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_PROFILE:
      return {
        CompanyData: action.com,
      };
    default:
      return state;
  }
};

export default CompanyProfileReducer;
