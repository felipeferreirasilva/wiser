import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import auth from "./modules/auth";

const reducers = combineReducers({
  auth,
});

export default createStore(reducers, applyMiddleware(thunk));
