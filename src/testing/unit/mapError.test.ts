import { mapError } from '../../frontend/utils/funcs/mapError';
import { expect, test } from '@jest/globals';

test('mapError function works properly', () => {
  expect(
    mapError([
      { field: 'fieldOne', message: 'messageOne' },
      { field: 'fieldTwo', message: 'messageTwo' },
    ])
  ).toEqual({ fieldOne: 'messageOne', fieldTwo: 'messageTwo' });
});
