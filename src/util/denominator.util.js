import sumBy from 'lodash/sumBy';
import find from 'lodash/find';
import result from 'lodash/result';

// check multiple values against 0 or more conditions
export const sumTotalUsed = (value) => {
  console.log('we are here', value);
  sumBy(value, (o) => {console.log('obj', o)})
  var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
  sumBy(objects, function(o) { console.log('oasd', o); return o.n; });
}

export const getValueUsed = (value, toBeChecked) => {
  const found = find(toBeChecked, (obj) => obj.value === value);
  const usedVal = result(found, 'used', 0);
  return usedVal;
}

export const sumValueUsed = (values) => sumBy(values, (info) => info.used); 
