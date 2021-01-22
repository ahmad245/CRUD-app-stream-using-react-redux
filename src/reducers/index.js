import {combineReducers} from 'redux';
import auth from './auth';
import { reducer } from 'redux-form';
import streamReducer from './stream';



export default combineReducers({
  auth,
  form:reducer,
  streams:streamReducer
})