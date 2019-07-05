import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Denominator, { fields } from './Denominator';
import { validateFields } from './util/validator.util';

const formConfig = {
  form: fields.formName,
  onSubmit: (values, dispatch, props) => {
    console.log('values', values);
  },
  // validate: (values, props) => ({
  //   // ...validateFields(values, [fields.name.username, fields.name.password]),
  //   // [fields.name.username]: validateEmail(values[fields.name.username]),
  // })
}

const DenominatorForm = reduxForm(formConfig)(Denominator)

const DenominatorPage = (props) => {
  return (
    <div className="App">
      <DenominatorForm/>
    </div>
  );
}

export default DenominatorPage;
