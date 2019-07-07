import React, { useContext } from 'react';
import './Display.css';
import {connect} from 'react-redux';
import { splitArray } from './util/common.util';
import map from 'lodash/map';
import DisplayValue from './Display.component';
import PropTypes from 'prop-types';
import sumBy from 'lodash/sumBy';
import LanguageContext from './context/language.context';

const DisplayPage = ({value: val = {}}) => {
  const {NO_CHANGE, REMAINDER_LEFT} = useContext(LanguageContext);
  const {remainder, value} = val;
  // displayed in ascending order
  const shownValue = value.filter((o) => o.used > 0) // only show those who's used 1 or more times
  const totalUsed = sumBy(shownValue, (o) => o.used);
  const dividedSorted = shownValue.length > 5 ? splitArray(shownValue, 2) : [shownValue];
  return (
    <div className="displayContainer">
      {
        totalUsed <= 0 ?
        <p className="text">{NO_CHANGE}</p> 
        :
        <div>{
        map(dividedSorted, (obj, key) => (
            <section className="sectionContainer" key={`denom${key}`}>
              {
                map(obj, (val) => (
                  <DisplayValue value={val.value} valueUsed={val.used} key={val.value}/> 
                ))
              }
            </section>
        ))}
        {
          remainder && <p className="text">{REMAINDER_LEFT(remainder)}</p>
        }
        </div>
      }
    </div>
  );
}
const denomState = ({value}) => ({
  value,
})

DisplayPage.propTypes = {
  value: PropTypes.object
}

const denomDispatch = null;

const ConnectedDisplay = connect(denomState, denomDispatch)(DisplayPage)
export default ConnectedDisplay;
