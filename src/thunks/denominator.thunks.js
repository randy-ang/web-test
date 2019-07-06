import { setValue, clearValue } from "../reducer/index.action";
// import { setLanguage as setWords, getAvailableLanguage, checkLanguageAvailability } from "../util/language";
import possibleValue from '../util/constant/value.constant';
import map from 'lodash/map';
import { sort, goTo, parseIndonesianCurrency } from "../util/common.util";
import forEach from 'lodash/forEach';
import noop from 'lodash/noop';
import { INDEX_ROUTES } from "../util/constant/routes.constant";

export const denominateValue = (value) => (dispatch) => {
  const mappedValue = parseIndonesianCurrency(value)
  let valueLeft = parseFloat(mappedValue);
  const sortedPossibleValue = sort(possibleValue, true);
  const valueInfo = sortedPossibleValue.map((val) => {
    const valueUsed = Math.floor(valueLeft / val);
    valueLeft = valueLeft - valueUsed * val;
    return ({used: valueUsed, value: val});
  })
  dispatch(setValue(valueInfo));
};
