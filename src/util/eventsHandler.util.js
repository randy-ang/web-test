// handles any event (for this test, onEnter is enough)
export const onEnter = (func) => (e) => e.keyCode === 13 && func(e)