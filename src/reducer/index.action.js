import {createAction} from 'redux-actions';
import * as ACTIONS from '../util/constant/actions.constant';

export const setValue = createAction(ACTIONS.SAVE_VALUE);
export const clearValue = createAction(ACTIONS.CLEAR_VALUE);