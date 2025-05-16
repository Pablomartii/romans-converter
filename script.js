import { integerToRoman, romanToInteger } from './converter.js';

/**
 * Handles the conversion process when the user clicks the convert button.
 */
function handleConversion() {
  const mode = document.getElementById('conversionMode').value;
  const input = document.getElementById('inputValue').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        throw new Error('Please enter a valid integer number.');
      }
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;
    } else if (mode === 'romanToInt') {
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;
    }
  } catch (error) {
    errorDiv.textContent = error.message;
  }
}

document.getElementById('convertButton').addEventListener('click', handleConversion);
