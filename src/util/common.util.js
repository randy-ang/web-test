import isEmpty from 'lodash/isEmpty';

const sortByAsc = (values) => {
  if(typeof(values) !== 'object') return values;
  return values.sort((a, b) => b - a);
}

const sortByDesc = (values) => {
  if(typeof(values) !== 'object') return values;
  return values.sort((a, b) => a - b);
}

// true is ascending, false is descending
export const sort = (values, asc) => asc ? sortByAsc(values) : sortByDesc(values)

export const goTo = (history, link) => history.push(link);

// object === false is to check if the object passed is false or not
// if false, then it's probably intended
export const isEmptyOrNull = (object) => object === false ? false : isEmpty(object) || !object;

export const parseIndonesianCurrency = (value) => {
  // remove all dots (position in thousands)
  // replace comma with dots (to be used with parseFloat)
  return value.replace(/\./g, '').replace(/,/, '.');
}

// split array into n parts
export const splitArray = (array = [], noOfArray = 1) => {
  let retArray = [];
  const indexJump = array.length/noOfArray;
  let index = 0;
  while (index < array.length) {
    const nextIndex = index + indexJump;
    retArray.push(array.slice(index, nextIndex));
    index = nextIndex;
  }
  return retArray;
}