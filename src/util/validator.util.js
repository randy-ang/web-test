import forEach from 'lodash/forEach';
import result from 'lodash/result';

export const validateFields = (values, fields) => {
  let errors = {};
  forEach(fields, (fieldName) => {
    if(!result(values, fieldName, ''))
      errors[fieldName] = 'REQUIRED_FIELD';
  })
  return errors;
}

