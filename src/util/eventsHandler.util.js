// handles any event (for this test, onEnter is enough)

import noop from 'lodash/noop';

export const onEnter = (func) => (e) => e.keyCode === 13 && func(e)