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
import { sort, isEmptyOrNull, goTo } from './util/common.util';
import map from 'lodash/map';
import result from 'lodash/result';
import { INDEX_ROUTES } from './util/constant/routes.constant';


const DisplayValue = ({value, valueUsed}) => {
  return (
    valueUsed ? 
    <div>
      {value}:
      {valueUsed},
      <div id={`rp${value}`} className="size"/>
    </div> : null
  );
}

export default DisplayValue;
