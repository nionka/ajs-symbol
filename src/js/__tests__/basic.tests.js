import orderByProps from '../app';

test('check sort function orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const keys = ['name', 'level'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, keys)).toEqual(expected);
});

test('check sort function orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const keys = ['attack', 'level', 'name'];

  const expected = [
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, keys)).toEqual(expected);
});

test('check sort function orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const keys = ['attack', 'defence'];

  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(orderByProps(obj, keys)).toEqual(expected);
});
