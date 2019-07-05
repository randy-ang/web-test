import React from 'react';
import Text from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './field.util.styles';

/**
 * Used only with Field from redux-form
 */

export const TextField = ({
  input,
  meta: { touched, error },
  ...custom
}) => {
  console.log('props', {input, meta: {touched, error}, ...custom})
  return (<div>
        <Text
          error={touched && error}
          {...input}
          {...custom}
          />
        {
        (touched && error) && 
        <FormHelperText 
          style={styles.textError}
        >
          {}
        </FormHelperText>
        }
    </div>)}