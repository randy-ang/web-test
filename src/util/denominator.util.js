import sumBy from 'lodash/sumBy';
import find from 'lodash/find';
import result from 'lodash/result';

// check multiple values against 0 or more conditions
export const sumTotalUsed = (value) => sumBy(objects, (o) => o.used);

export const getValueUsed = (value, toBeChecked) => {
  const found = find(toBeChecked, (obj) => obj.value === value);
  const usedVal = result(found, 'used', 0);
  return usedVal;
}

export const sumValueUsed = (values) => sumBy(values, (info) => info.used); 
