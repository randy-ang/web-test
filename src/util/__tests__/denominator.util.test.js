import * as denom from '../denominator.util';

describe('sum of money used', () => {
  it('positive tesst', () => {
    const dummy = [{used: 50}, {used: 30}];
    const expected = 80;
    expect(denom.sumTotalUsed(dummy)).toEqual(expected);
  });
  describe('negative tests', () => {
    it('empty object inside array', () => {
      const dummy = [{}, {used: 30}];
      const expected = 30;
      expect(denom.sumTotalUsed(dummy)).toEqual(expected);
    });
    it('empty object', () => {
      const dummy = {};
      const expected = 0;
      expect(denom.sumTotalUsed(dummy)).toEqual(expected);
    })
  });
})

describe('get key \'used\' from a certain \'value\'', () => {
  it('positive test', () => {
    const dummy = [{value: 500, used: 10}, {value: 200, used: 30}];
    const expected = 10;
    expect(denom.getValueUsed(500, dummy)).toEqual(expected);
  });
  describe('negative tests', () => {
    it('value that doesn\'t exist', () => {
      const dummy = [{value: 500, used: 10}, {value: 200, used: 30}];
      const expected = 0;
      expect(denom.getValueUsed(50, dummy)).toEqual(expected);
    });
    it('empty object', () => {
      const dummy = {};
      const expected = 0;
      expect(denom.getValueUsed(50, dummy)).toEqual(expected);
    });
  });
})