
import { combineReducers } from 'redux';
import LoanJourneyReducer from './loan_journey'
import LoanJourneyActivePageReducer from '../../containers/loan_journey/store/reducer/loan_journey_active_page';



const rootReducer = combineReducers({
  LoanJourneyReducer,
  LoanJourneyActivePageReducer,
});

export default rootReducer;