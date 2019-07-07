import React from 'react';
import './Denominator.css';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Denominator, { fields } from './Denominator';
import { validateFields, validateCurrency } from './util/validator.util';
import { denominateValue } from './thunks/denominator.thunks';
import Display from './Display.page';
import { isEmptyOrNull } from './util/common.util';
import PropTypes from 'prop-types';

const formConfig = {
  form: fields.formName,
  onSubmit: ({[fields.denominator]: values}, dispatch, {history}) => {
    dispatch(denominateValue(values, history));
  },
  validate: (values) => ({
    ...validateFields(values, [fields.denominator]), // to check against empty values
    [fields.denominator]: validateCurrency(values[fields.denominator])
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

DenominatorPage.propTypes = {
  value: PropTypes.array,
}

const denomState = ({value}) => ({
  value,
})

const denomDispatch = null;

const ConnectedDenominator = connect(denomState, denomDispatch)(DenominatorPage)

export default ConnectedDenominator;
