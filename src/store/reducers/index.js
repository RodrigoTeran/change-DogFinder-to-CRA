// Modules
import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/userReducer";
import indexPageReducer from "./indexPage/indexPageReducer";
import layoutReducer from "./layout/layoutReducer";
import companyReducer from "./company/companyReducer";
import leftDataMapPageReducer from "./leftDataMapPage/leftDataMapPageReducer";
import jarvisReducer from "./jarvis/jarvisReducer";


export default combineReducers({
  userReducer,
  indexPageReducer,
  layoutReducer,
  companyReducer,
  leftDataMapPageReducer,
  jarvisReducer
});