// tests.js
const expect = chai.expect;

describe('integerToRoman - Valid Inputs', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal("I");
  });

  it('should convert 2 to "II"', function() {
    expect(integerToRoman(2)).to.equal("II");
  });

  it('should convert 5 to "V"', function() {
    expect(integerToRoman(5)).to.equal("V");
  });

  it('should convert 50 to "L"', function() {
    expect(integerToRoman(50)).to.equal("L");
  });

  it('should convert 90 to "XC"', function() {
    expect(integerToRoman(90)).to.equal("XC");
  });

  it('should convert 3000 to "MMM"', function() {
    expect(integerToRoman(3000)).to.equal("MMM");
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });
});

describe('integerToRoman - Invalid Inputs', function() {
  it('should throw error for 0', function() {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('should throw error for -5', function() {
    expect(() => integerToRoman(-5)).to.throw();
  });

  it('should throw error for 4000', function() {
    expect(() => integerToRoman(4000)).to.throw();
  });

  it('should throw error for 4100', function() {
    expect(() => integerToRoman(4100)).to.throw();
  });

  it('should throw error for non-integer 10.5', function() {
    expect(() => integerToRoman(10.5)).to.throw();
  });
});

describe('romanToInteger - Valid Inputs', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger("I")).to.equal(1);
  });

  it('should convert "II" to 2', function() {
    expect(romanToInteger("II")).to.equal(2);
  });

  it('should convert "V" to 5', function() {
    expect(romanToInteger("V")).to.equal(5);
  });

  it('should convert "L" to 50', function() {
    expect(romanToInteger("L")).to.equal(50);
  });

  it('should convert "XC" to 90', function() {
    expect(romanToInteger("XC")).to.equal(90);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });
});

describe('romanToInteger - Invalid Inputs', function() {
  it('should throw error for empty string', function() {
    expect(() => romanToInteger("")).to.throw();
  });

  it('should throw error for "IIII"', function() {
    expect(() => romanToInteger("IIII")).to.throw();
  });

  it('should throw error for "VV"', function() {
    expect(() => romanToInteger("VV")).to.throw();
  });

  it('should throw error for "XXXX"', function() {
    expect(() => romanToInteger("XXXX")).to.throw();
  });

  it('should throw error for "VVV"', function() {
    expect(() => romanToInteger("VVV")).to.throw();
  });

  it('should throw error for invalid characters "A"', function() {
    expect(() => romanToInteger("A")).to.throw();
  });
});
