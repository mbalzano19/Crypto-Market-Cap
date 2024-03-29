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

        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24 Hour % Change</th>
            <th>24 Hour Volume</th>
            <th>Supply</th>
          </tr>
        </thead> */}

          {/* <tr key={example.id}> */}
                <h1>
                {example.name}&nbsp;({example.symbol})
                </h1>
                <h2>${parseFloat(example.priceUsd).toFixed(2)}</h2>
                <h2 id='twofour' style={{ color: getBackgroundColor(parseFloat(example.changePercent24Hr)) }}>
              {parseFloat(example.changePercent24Hr).toFixed(2)}%
            </h2>


            {/* <td>${parseFloat(example.priceUsd).toFixed(2)}</td> */}
            {/* <td id='twofour' style={{ backgroundColor: getBackgroundColor(parseFloat(example.changePercent24Hr)) }}>
              {parseFloat(example.changePercent24Hr).toFixed(2)}
            </td> */}
            <td>{parseFloat(example.volumeUsd24Hr).toFixed()}</td>
            <td>{parseFloat(example.supply).toFixed()}</td>
          {/* </tr> */}


    </div>
  );
}
