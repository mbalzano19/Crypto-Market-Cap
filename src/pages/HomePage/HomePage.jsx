import { useState, useEffect } from 'react';
import React from 'react'

export default function HomePage() {
  const [example, setExample] = useState([]);

  useEffect(() => {
    url();
  }, []);

  const url = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets"); // Include the protocol (e.g., https://) in the URL
    const data = await response.json();
    setExample(data.data); // Assuming the data is an array and you want to store it in the 'example' state
  };

  return (
    <div>
      <table>
        <tr>
          <th>Coin</th>
          <th>Price</th>
        </tr>
        {example.map((data) => (
          <tr key={data.id}>
            <td>{data.name}&nbsp;{data.symbol}</td>
            <td>{data.priceUsd}</td>
          </tr>
        ))}
      </table>
    </div>
  );
  
  
}
