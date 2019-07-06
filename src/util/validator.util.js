import forEach from 'lodash/forEach';
import result from 'lodash/result';

export const validateFields = (values, fields) => {
  let errors = {};
  forEach(fields, (fieldName) => {
    if(!result(values, fieldName, ''))
      errors[fieldName] = 'REQUIRED_FIELD';
  });
  return errors;
}

const validateFormattedCurrency = (value) => {
  // no Rp is validated because it is provided in the textfield
  // Regex for Rp -> /^((Rp)? ?)([0-9]{0,3}((\.[0-9]{3})*(,[0-9]{1,2})?)?)$/g
  return /^([0-9]{0,3}((\.[0-9]{3})*(,[0-9]{1,2})?)?)$/g.test(value);
}
// no Rp is validated because it is provided in the textfield
  // Regex for Rp -> /^((\R\p)?\ ?)([0-9]*(\,[0-9]{1,2})?)$/g
const validateUnformattedCurrency = (value) => /^([0-9]*(,[0-9]{1,2})?)$/g.test(value);

export const validateCurrency = (value) => {
  if (!(validateFormattedCurrency(value) || validateUnformattedCurrency(value))) return 'INVALID_CURRENCY';
}

