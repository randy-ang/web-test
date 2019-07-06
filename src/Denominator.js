import React, {useContext, useState} from 'react';
import {Field} from 'redux-form';
import { TextField } from './util/field.util';
import noop from 'lodash';
import { onEnter } from './util/eventsHandler.util';
import './Denominator.css';
import LanguageContext from './context/language.context';
import PropTypes from 'prop-types';

export const fields = {
  formName: 'denominatorForm',
  denominator: 'denominator',
}

const customFocus = (setFocused, onFocus) => (event) => {
  // when focused, Rp will appear
  setFocused(true);
  onFocus(event);
}

const customBlur = (setFocused, onBlur) => (event) => {
  if(event.target.value.length === 0) { // if there are no value, then the Rp disappears
    setFocused(false);
}  
  onBlur(event);
}

const Denominator = ({handleSubmit = noop, onFocus = noop, onBlur = noop}) => {
  const lang = useContext(LanguageContext);
  const [focused, setFocused] = useState(false);
  return (
    <div className={'denomField'}>
      <Field
        onKeyDown={onEnter(handleSubmit)}
        name={fields.denominator}
        component={TextField}
        label={lang.LABEL.VALUE}
        placeholder={lang.PLACEHOLDER.VALUE}
        InputProps={{className: 'textField', startAdornment: focused && <Currency/>}}
        onFocus={customFocus(setFocused, onFocus)}
        onBlur={customBlur(setFocused, onBlur)}
      />
    </div>
  )
}

Denominator.propTypes = {
  handleSubmit: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}


const Currency = () => {
  const {RP} = useContext(LanguageContext);
  return <section className="currencyContainer">{RP}</section>
}

export default Denominator;