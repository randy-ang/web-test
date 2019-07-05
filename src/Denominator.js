import React from 'react';
import {Field} from 'redux-form';
import { TextField } from './util/field.util';
import Button from '@material-ui/core/Button';
import noop from 'lodash';

export const fields = {
  formName: 'denominatorForm',
  denominator: 'denominator',
}

const Denominator = ({handleSubmit = noop}) => {
  
  return (
    <div>
    <Field
      name={fields.denominator}
      component={TextField}
      label={'Hello World'}
    />
    <Button variant="contained" color="primary" onClick={handleSubmit}>
        Primary
      </Button>
    </div>
  )
}

export default Denominator;