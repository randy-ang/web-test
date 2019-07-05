import { SAVE_DENOMINATOR, CLEAR_DENOMINATOR } from '../util/constant/actions.constant';

const defaultState = {};

export default function config (state = defaultState, action) {
  switch (action.type) {
  case SAVE_DENOMINATOR: {
    return {...state, ...action.payload};
  }
  case CLEAR_DENOMINATOR: {
    return defaultState;
  }
  default: {
    return state;
  }
  }
}
