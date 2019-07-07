import * as validator from '../validator.util';

describe('validate Required Fields', () => {
  it('emptyField, required error', () => {
    const dummyValues = {emptyField: '', nonEmptyField: 'hello', emptyNotRequired: '', nonEmptyNotRequired: 'goodbye'};
    const dummyFields = ['emptyField', 'nonEmptyField'];
    const expected = {emptyField: 'REQUIRED_FIELD'};
    expect(validator.validateFields(dummyValues, dummyFields)).toEqual(expected);
  });
});

describe('validate formatted currency', () => {
  describe('decimal places', () => {
    it('positive tests', () => {
      const dummyValues = ['1', '1,0', '1,00', '100', '100,0', '100,00'];
      const expected = false;
      expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions || !!validator.validateCurrency(conditions)), false)).toEqual(expected);
    });
    it('negative tests', () => { 
      const dummyValues = ['100.0', '100,', '100.00', '100,000'];
      const expected = true;
      expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions || !!validator.validateCurrency(conditions)), false)).toEqual(expected);
    });
  });
    describe('thousand places', () => {
    it('positive tests', () => {
      const dummyValues = ['100.000', '10.000', '1.000.000'];
      const expected = false;
      expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions || !!validator.validateCurrency(conditions)), false)).toEqual(expected);
    });
    it('negative tests', () => { 
      const dummyValues = ['100.00, 10.00, 1000.000'];
      const expected = true;
      expect(dummyValues.reduce(((sumConditions, conditions) => sumConditions || !!validator.validateCurrency(conditions)), false)).toEqual(expected);
    });
  });
});