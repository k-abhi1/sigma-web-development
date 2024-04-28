// You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card ?

import React, { useState, useEffect } from 'react';

function Card({ item }) {
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Other data: {item.otherData}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
