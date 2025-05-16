import { integerToRoman, romanToInteger } from '../converter.js';
import assert from 'assert';

describe('integerToRoman', () => {
  it('should convert 1 to I', () => {
    assert.strictEqual(integerToRoman(1), 'I');
  });

  it('should convert 1994 to MCMXCIV', () => {
    assert.strictEqual(integerToRoman(1994), 'MCMXCIV');
  });

  it('should throw an error for 0', () => {
    assert.throws(() => integerToRoman(0), /The number must be an integer between 1 and 3999/);
  });
});

describe('romanToInteger', () => {
  it('should convert I to 1', () => {
    assert.strictEqual(romanToInteger('I'), 1);
  });

  it('should convert MCMXCIV to 1994', () => {
    assert.strictEqual(romanToInteger('MCMXCIV'), 1994);
  });

  it('should throw an error for non-canonical input like IIV', () => {
    assert.throws(() => romanToInteger('IIV'), /not in canonical form/);
  });
});
