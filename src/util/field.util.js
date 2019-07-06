import React from 'react';
import Text from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './field.util.styles';
import getLanguage from './language';

/**
 * Used only with Field from redux-form
 */

export const TextField = ({
  input,
  meta: { touched, error },
  label,
  ...custom
}) => {
  return (<div>
        <Text
          error={touched && !!error}
          label={`${label}${(touched && !!error) ? '*' : ''}`}
          {...input}
          {...custom}
          />
        {
        (touched && error) && 
        <FormHelperText 
          style={styles.textError}
        >
          {`* ${getLanguage('ERROR')[error]}`}
        </FormHelperText>
        }
    </div>)}