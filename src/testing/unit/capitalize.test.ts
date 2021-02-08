import { describe, expect, it } from '@jest/globals';
import { capitalize } from '../../frontend/utils/funcs/capitalize';

describe('capitalize function', () => {
  it('should capitalize strings', () => {
    expect(capitalize('martin')).toBe('Martin');
    expect(capitalize('m')).toBe('M');
  });
});
