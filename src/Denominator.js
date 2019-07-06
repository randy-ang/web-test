import React, {useEffect, useContext} from 'react';
import {Field} from 'redux-form';
import { TextField } from './util/field.util';
import Button from '@material-ui/core/Button';
import noop from 'lodash';
import { onEnter } from './util/eventsHandler.util';
import './Denominator.css';
import LanguageContext from './context/language.context';
import styles from './Denominator.styles';

export const fields = {
  formName: 'denominatorForm',
  denominator: 'denominator',
}

const Denominator = ({handleSubmit = noop}) => {
  const lang = useContext(LanguageContext);
  return (
    <div className={'denomField'}>
      <Field
        onKeyDown={onEnter(handleSubmit)}
        name={fields.denominator}
        component={TextField}
        label={lang.LABEL.VALUE}
        placeholder={lang.PLACEHOLDER.VALUE}
        InputProps={{className: 'textField', startAdornment: <Currency/>}}
      />
    </div>
  )
}

const Currency = () => {
  const {RP} = useContext(LanguageContext);
  return <section className="currencyContainer">{RP}</section>
}

export default Denominator;