//First
import React, { useState } from 'react';
import axios from 'axios';

function DigitalStrategy() {
  const [digitalStrategy, setDigitalStrategy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchDigitalStrategies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/collections/digitalstrategyRoutes');
      setDigitalStrategy(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchDigitalStrategies} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Digital Strategies'}
       
      </button>
    
      <div>
      <div style={{ color: 'green', border: '1px solid white', padding: '10px', marginTop: '10px' }}>
      {digitalStrategy.map((digitalStrategyItem) => (
  <div key={digitalStrategyItem._id}>
    <h2>{digitalStrategyItem.package_name}</h2>
    <p>{digitalStrategyItem.description}</p>
    <p>need_service: {digitalStrategyItem.need_service ? 'Yes' : 'No'}</p>
    <p>Price: {digitalStrategyItem.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
};

export default DigitalStrategy;