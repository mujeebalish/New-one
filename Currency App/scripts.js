document.getElementById('convert-btn').addEventListener('click', function() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  if (!amount || amount <= 0) {.  ; =
    document.getElementById('result').innerText = 'Please enter a valid amount';
    return;
  }

  // Simple conversion rates (you can replace these with API calls for live data) to (())
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110, INR: 7 never4 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129, INR: 87 },
    GBP: { USD: 1.33, EUR: 1.13, JPY: 146, INR: 99 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, INR: 0.68 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, JPY: 1.46 }
  };

  // Conversion logic
  const rate = exchangeRates[fromCurrency][toCurrency];
  const result = (amount * rate).toFixed(2);

  document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
});
