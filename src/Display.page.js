import React from 'react';
import './Display.css';
import {connect} from 'react-redux';
import possibleValues from './util/constant/value.constant';
import { sort } from './util/common.util';
import { getValueUsed } from './util/denominator.util';
import map from 'lodash/map';
import DisplayValue from './Display.component';

const DisplayPage = ({value}) => {
  // redirect if no value is needed to be broken down
  // useEffect(() => {isEmptyOrNull(value) && goTo(history, INDEX_ROUTES.root)}, [history, value]);
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
