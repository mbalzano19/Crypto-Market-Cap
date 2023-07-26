const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config()
require('./config/database')
   
const app = express();
   
app.use(logger('dev'));
app.use(express.json());

 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// middleware to check and verify a JWT
// assign user object from the JWT to req.user
app.use(require('./config/checkToken'))

const port = process.env.PORT || 3001;
	
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))


app.get('/api/cmcdata', async (req, res) => {
  try {
    // Make the API request to CoinMarketCap here
    // ... (use the fetch or axios library to make the request)
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        'X-CMC_PRO_API_KEY': '1dc8952f-aa61-4928-a9b6-582a185bedae',
      }
    });
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap:", error);
    res.status(500).json({ error: "Failed to fetch data from CoinMarketCap" });
  }
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});