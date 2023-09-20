import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailComponent() {
  const [example, setExample] = useState([]);
  const { id } = useParams(); // Access the 'id' parameter from the URL

  useEffect(() => {
    url();
  }, []);

  const url = async () => {
    const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
    const data = await response.json();
    setExample(data.data); // Assuming the data is an object for the specific listing
  };

  const getBackgroundColor = (percentChange) => {
    return percentChange >= 0 ? 'green' : 'red';
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24 Hour % Change</th>
            <th>24 Hour Volume</th>
            <th>Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr key={example.id}>
            <td>
              <a href={`/detail/${example.id}`}>
                {example.name}&nbsp;{example.symbol}
              </a>
            </td>
            <td>${parseFloat(example.priceUsd).toFixed(2)}</td>
            <td style={{ backgroundColor: getBackgroundColor(parseFloat(example.changePercent24Hr)) }}>
              {parseFloat(example.changePercent24Hr).toFixed(2)}
            </td>
            <td>{parseFloat(example.volumeUsd24Hr).toFixed()}</td>
            <td>{parseFloat(example.supply).toFixed()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
