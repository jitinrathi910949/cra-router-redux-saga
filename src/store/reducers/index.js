import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";

export const rootReducers = combineReducers({
  routing: routerReducer
  });