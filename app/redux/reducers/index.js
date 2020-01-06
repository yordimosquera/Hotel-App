import {combineReducers} from 'redux';
import * as hotelsReducer from './hotels';

export default combineReducers(Object.assign(hotelsReducer));
