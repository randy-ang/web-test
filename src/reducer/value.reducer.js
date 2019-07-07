import { SAVE_VALUE, CLEAR_VALUE } from '../util/constant/actions.constant';

const defaultState = [];

export default function config (state = defaultState, action) {
  switch (action.type) {
  case SAVE_VALUE: {
    return action.payload;
  }
  case CLEAR_VALUE: {
    return defaultState;
  }
  default: {
    return state;
  }
  }
}
