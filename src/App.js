import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Denominator, { fields } from './Denominator';
import { validateFields } from './util/validator.util';
import DenominatorPage from './Denominator.page';

const App = () => {
  return (
    <div className="App">
      <DenominatorPage/>
    </div>
  );
}

export default App;
