import { integerToRoman, romanToInteger } from './converter.js';

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

    // Evento de conversión (cuando el botón se pulsa con éxito)
    if (typeof gtag === 'function') {
      gtag('event', 'conversion_click', {
        event_category: 'interaction',
        event_label: 'User clicked convert'
      });
    }

  } catch (error) {
    errorDiv.textContent = error.message;
  }
}

// Escuchar clic en el botón Convertir
document.getElementById('convertButton').addEventListener('click', handleConversion);

// Escuchar cambio de modo en el dropdown
document.getElementById('conversionMode').addEventListener('change', (e) => {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion_mode_changed', {
      event_category: 'interaction',
      event_label: `Mode changed to ${e.target.value}`
    });
  }
});
