import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import denominator from './denominator.reducer';

export default combineReducers({
  form,
  denominator,
})