import { useState, useEffect } from 'react';
import React from 'react'

import './HomePage.css'

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

  const getBackgroundColor = (percentChange) => {
    return percentChange >= 0 ? 'green' : 'red';
  };

  return (
    <div className='bigdiv'>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24 Hour % Change</th>
          <th>24 Hour Volume</th>
          <th>Supply</th>
        </tr>
        {example.map((data) => (
          <tr key={data.id}>
            <td>
              <a href={`/detail/${data.id}`}>
                {data.name}&nbsp;({data.symbol})
              </a>
            </td>
            <td>${parseFloat(data.priceUsd).toFixed(2)}</td>
            <td style={{ color: getBackgroundColor(parseFloat(data.changePercent24Hr)) }}>
              {parseFloat(data.changePercent24Hr).toFixed(2)}%
            </td>
            <td>{parseFloat(data.volumeUsd24Hr).toFixed()}</td>
            <td>{parseFloat(data.supply).toFixed()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
