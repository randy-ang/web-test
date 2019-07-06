import React, { useEffect } from 'react';
import logo from './logo.svg';
import './Display.css';
import Button from '@material-ui/core/Button';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Denominator, { fields } from './Denominator';
import { validateFields } from './util/validator.util';
import { denominateValue } from './thunks/denominator.thunks';
import possibleValues from './util/constant/value.constant';
import { sort, isEmptyOrNull, goTo, } from './util/common.util';
import { sumTotalUsed, getValueUsed, sumValueUsed } from './util/denominator.util';
import map from 'lodash/map';
import result from 'lodash/result';
import { INDEX_ROUTES } from './util/constant/routes.constant';
import DisplayValue from './Display.component';
import find from 'lodash/find';

const DisplayPage = ({value, history}) => {
  console.log('value', value, 'history', history);
  // redirect if no value is needed to be broken down
  // useEffect(() => {isEmptyOrNull(value) && goTo(history, INDEX_ROUTES.root)}, [history, value]);
  console.log('sumasdasd', sumValueUsed(value));
  // displayed in ascending order
  const sortedValue = sort(possibleValues, false);
  return (
    <div className="displayContainer">
      {
        map(sortedValue, (val) => (
          <DisplayValue value={val} valueUsed={getValueUsed(val, value)} key={val}/> 
        ))
      }
    </div>
  );
}
const denomState = ({value}) => ({
  value,
})

const denomDispatch = null;

const ConnectedDisplay = connect(denomState, denomDispatch)(DisplayPage)
export default ConnectedDisplay;
