const express = require('express');
const app = express();

// Your server-side API route for fetching data from CoinMarketCap
app.get('/api/cmcdata', async (req, res) => {
  try {
    // Make the API request to CoinMarketCap here
    // ... (use the fetch or axios library to make the request)
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        'X-CMC_PRO_API_KEY': 'your-api-key',
      }
    });
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap:", error);
    res.status(500).json({ error: "Failed to fetch data from CoinMarketCap" });
  }
});