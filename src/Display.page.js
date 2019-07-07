import React from 'react';
import './Display.css';
import {connect} from 'react-redux';
import possibleValues from './util/constant/value.constant';
import { sort, splitArray } from './util/common.util';
import { getValueUsed } from './util/denominator.util';
import map from 'lodash/map';
import DisplayValue from './Display.component';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';

const DisplayPage = ({value = []}) => {
  // displayed in ascending order
  const shownValue = value.filter((o) => o.used > 0) // only show those who's used 1 or more times
  const sortedValue = sort(shownValue, false);
  const dividedSorted = sortedValue.length > 5 ? splitArray(sortedValue, 2) : [sortedValue];
  console.log('divided', dividedSorted, sortedValue);
  return (
    <div className="displayContainer">
      {
        map(dividedSorted, (obj) => (
            <section className="sectionContainer">
              {
                map(obj, (val) => (
                  <DisplayValue value={val.value} valueUsed={val.used} key={val.value}/> 
                ))
              }
            </section>
        ))
      }
    </div>
  );
}
const denomState = ({value}) => ({
  value,
})

DisplayPage.propTypes = {
  value: PropTypes.array
}

const denomDispatch = null;

const ConnectedDisplay = connect(denomState, denomDispatch)(DisplayPage)
export default ConnectedDisplay;
