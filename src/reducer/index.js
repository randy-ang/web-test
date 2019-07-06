import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import value from './value.reducer';

export default combineReducers({
  form,
  value,
})