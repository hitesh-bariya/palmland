import { combineReducers } from "redux";
import modelReducer from "./Model/modelReducer";
import appReducer from "./App/appReducer";
import authReducer from "./Auth/authReducer";

const rootReducer = combineReducers({
  model: modelReducer,
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
