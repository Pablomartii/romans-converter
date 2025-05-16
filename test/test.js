import { expect } from 'chai';
import { integerToRoman, romanToInteger } from '../script.js';

describe('Roman Converter Tests', () => {
  describe('integerToRoman()', () => {
    it('should convert 10 to "X"', () => {
      expect(integerToRoman(10)).to.equal('X');
    });

    it('should convert 3999 to "MMMCMXCIX"', () => {
      expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
    });

    it('should throw an error for non-integer input (e.g. 10.5)', () => {
      expect(() => integerToRoman(10.5)).to.throw();
    });
  });

  describe('romanToInteger()', () => {
    it('should convert "X" to 10', () => {
      expect(romanToInteger('X')).to.equal(10);
    });

    it('should convert "MMMCMXCIX" to 3999', () => {
      expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
    });

    it('should throw an error for invalid roman numeral (e.g. "IIII")', () => {
      expect(() => romanToInteger('IIII')).to.throw();
    });
  });
});
