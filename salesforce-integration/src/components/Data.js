import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data') // Adjust the endpoint to your need
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? data.map(item => (
        // Adjust this based on the structure of your data
        <div key={item.id}>{item.name}</div>
      )) : 'Loading...'}
    </div>
  );
}

export default DataComponent;
