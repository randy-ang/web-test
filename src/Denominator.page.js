import React from 'react';
import logo from './logo.svg';
import './Denominator.css';
import Button from '@material-ui/core/Button';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Denominator, { fields } from './Denominator';
import { validateFields, validateCurrency } from './util/validator.util';
import { denominateValue } from './thunks/denominator.thunks';
import Display from './Display.page';
import { isEmptyOrNull, parseIndonesianCurrency } from './util/common.util';

const formConfig = {
  form: fields.formName,
  onSubmit: ({[fields.denominator]: values}, dispatch, {history}) => {
    dispatch(denominateValue(values, history));
  },
  validate: (values, props) => ({
    ...validateFields(values, [fields.denominator]), // to check against empty values
    [fields.denominator]: validateCurrency(values[fields.denominator])
    // [fields.name.username]: validateEmail(values[fields.name.username]),
  })
}

const DenominatorForm = reduxForm(formConfig)(Denominator)

const DenominatorPage = ({value, ...props}) => {
  return (
    <div className="container">
      {
        !isEmptyOrNull(value) && <Display value={value}/>
      }
    <div className="denomField">
      <DenominatorForm {...props}/>
    </div>
    </div>
  );
}

const denomState = ({value}) => ({
  value,
})

const denomDispatch = null;

const ConnectedDenominator = connect(denomState, denomDispatch)(DenominatorPage)

export default ConnectedDenominator;
