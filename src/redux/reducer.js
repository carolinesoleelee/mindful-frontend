import { combineReducers } from "redux";

const emotionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_EMOTIONS':
      return action.emotions
    default:
      return state;
  }
}

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case 'LOADING_EMOTIONS':
      return true
    case 'FETCHED_EMOTIONS':
      return false
    default:
      return state;
  }
}

const timesheetsReducer = ( state = [], action) => {
  switch(action.type){
    case 'CREATED_TIMESHEETS':
      return action.timesheets
    default:
      return state
  }
}

const fetchedTimesheetsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_TIMESHEETS':
      return action.allTimesheets
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  emotions: emotionsReducer,
  loading: loadingReducer,
  timesheets: timesheetsReducer,
  allTimesheets: fetchedTimesheetsReducer,
});


export default rootReducer;
