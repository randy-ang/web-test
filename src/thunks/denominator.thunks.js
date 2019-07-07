import { setValue } from "../reducer/index.action";
import possibleValue from '../util/constant/value.constant';
import { sort, parseIndonesianCurrency } from "../util/common.util";

export const denominateValue = (value) => (dispatch) => {
  const mappedValue = parseIndonesianCurrency(value)
  let valueLeft = parseFloat(mappedValue);
  const sortedPossibleValue = sort(possibleValue, false);
  const valueInfo = sortedPossibleValue.map((val) => {
    const valueUsed = Math.floor(valueLeft / val);
    valueLeft = valueLeft - valueUsed * val;
    return ({used: valueUsed, value: val});
  })
  dispatch(setValue({value: valueInfo, remainder: valueLeft}));
};
