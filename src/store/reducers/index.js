import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import testReducer from './testReducer';

export const rootReducers = combineReducers({
  routing: routerReducer,
  testReducer
  });
