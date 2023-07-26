import React, { useState, useEffect } from 'react';

export default function OrderHistoryPage() {
  const [cmc, setCmc] = useState([]);

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch('/api/cmcdata');
      const data = await response.json();
      console.log('datadatadata', data);
      setCmc(data.data); // Set the 'data' array as the state
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24 Hour % Change</th>
          <th>24 Hour Volume</th>
          <th>Supply</th>
        </tr>
        {Array.isArray(cmc) && cmc.length > 0 ? (
          cmc.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}&nbsp;{crypto.symbol}</td>
              <td>${parseFloat(crypto.quote.USD.price).toFixed(2)}</td>
              <td>{parseFloat(crypto.quote.USD.percent_change_24h).toFixed(2)}</td>
              <td>{parseFloat(crypto.quote.USD.volume_24h).toFixed()}</td>
              <td>{parseFloat(crypto.circulating_supply).toFixed()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Loading data...</td>
          </tr>
        )}
      </table>
    </div>
  );
}
