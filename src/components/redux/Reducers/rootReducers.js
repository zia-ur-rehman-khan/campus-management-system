import {combineReducers} from 'redux';
import applyJobReducer from '../Reducers/ApplyJobsReducer/ApplyJobsReducer';
import yourProfileReducer from '../Reducers/YourProfile/YourProfileReducer';
import CompanyProfileReducer from '../Reducers/CompanyProfile/CompanyProfileReducer';
import RollReducer from '../Reducers/RollReducer/RollReducer';
import LogInReducer from '../Reducers/LogIn/LogInReducer';

const rootReducer = combineReducers({
  job: applyJobReducer,
  pro: yourProfileReducer,
  com: CompanyProfileReducer,
  roll: RollReducer,
  myLog: LogInReducer,
});

export default rootReducer;
