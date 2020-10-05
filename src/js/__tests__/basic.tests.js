/* eslint-disable no-unused-vars */
import Validator from '../Validator';

test('checking of the class Validator for name', () => {
  function createValidator(name) {
    const test = new Validator(name);
    return test.name;
  }

  const expexted = 'Oleg11R';

  expect(createValidator('Oleg11R')).toEqual(expexted);
});

test('checking of the class Validator for name', () => {
  function createValidator(name) {
    const test = new Validator(name);
    return test.name;
  }

  const expexted = 'Irina-123_br';

  expect(createValidator('Irina-123_br')).toEqual(expexted);
});

test('checking of the class Validator for name', () => {
  function createValidator() {
    const test = new Validator('Oleg:125');
  }

  expect(createValidator).toThrowError(new Error('Имя не подходит'));
});

test('checking of the class Validator for name', () => {
  function createValidator() {
    const test = new Validator('Oleg-1252');
  }

  expect(createValidator).toThrowError(new Error('Имя не подходит'));
});

test('checking of the class Validator for name', () => {
  function createValidator() {
    const test = new Validator('12Oleg-Pf');
  }

  expect(createValidator).toThrowError(new Error('Имя не подходит'));
});
