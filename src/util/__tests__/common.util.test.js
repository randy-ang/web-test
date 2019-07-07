import * as util from '../common.util';

describe('sort', () => {
  it('sort by ascending', () => {
      const dummyValues = [3,1,2];
      const expected = [1,2,3];
      expect(util.sort(dummyValues, true)).toEqual(expected);
  });
  it('sort by descending', () => {
    const dummyValues = [1,3,2];
    const expected = [3,2,1];
    expect(util.sort(dummyValues, false)).toEqual(expected);
}); 
});

describe('is empty or null', () => {
  it('positive test', () => {
    const dummyValues = [{}, [], undefined, null, ''];
    const expected = true;
    expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions && util.isEmptyOrNull(conditions)), true)).toEqual(expected);
  });
  it('negative test', () => {
    const dummyValues = [5, 'a', ['a'], {a: 'a'}, false, true];
    const expected = false;
    expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions || util.isEmptyOrNull(conditions)), false)).toEqual(expected);
  });
});

describe('parse currency', () => {
    describe('positive tests', () => {
      describe("whole number", () => {
        it('pre-thousand values', () => {
          const dummyValues = "1";
          const expected = "1";
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
        it('thousand+ values', () => {
          const dummyValues = "1.000.000";
          const expected = "1000000";
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
      });
      describe("with decimal", () => {
        it('one decimal place', () => {
          const dummyValues = "10,0";
          const expected = "10.0";
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
        it('two decimal place', () => {
          const dummyValues = "10,00";
          const expected = "10.00";
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
      });
    });
    
    describe('negative tests', () => {
      describe("whole number", () => {
        it('pre-thousand values', () => {
    //   const dummyValues = ['100.0', '100,', '100.00', '100,000'];
    //   const dummyValues = ['100.00, 10.00, 1000.000'];
          const dummyValues = '100';
          const expected = dummyValues;
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
        it('thousand+ values', () => {
          const dummyValues = "1000.000";
          const expected = dummyValues;
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
      });
      describe("with decimal", () => {
        it('one decimal place', () => {
          const dummyValues = "10.0";
          const expected = dummyValues;
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
        it('two decimal place', () => {
          const dummyValues = "10.00";
          const expected = dummyValues;
          expect(util.parseIndonesianCurrency(dummyValues)).toEqual(expected);
        });
      });
    });
});

it("split array", () => {
  const dummyValues = [1,2,3,4,5,6,7,8,9];
  const expected = [[1,2,3,4], [5,6,7,8,9]];
  expect(util.splitArray(dummyValues, 2)).toEqual(expected); 
});