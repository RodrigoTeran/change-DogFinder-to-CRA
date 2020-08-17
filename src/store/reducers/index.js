// Modules
import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/userReducer";
import indexPageReducer from "./indexPage/indexPageReducer";
import layoutReducer from "./layout/layoutReducer";


export default combineReducers({
  userReducer,
  indexPageReducer,
  layoutReducer
});