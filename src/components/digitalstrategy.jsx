import React, { useState } from 'react';
import axios from 'axios';

function DigitalStrategy() {
  const [digitalStrategy, setDigitalStrategy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

// Fetch Data
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
      <img src='src/assets/IMG_6470.PNG' alt='digital' style={{ width: '300px', height: '300px', marginBottom: '20px' }}></img>
      <br/>

      <div className='head'>
      <button onClick={fetchDigitalStrategies} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Digital Strategies'}
       
      </button> 
      </div>
    
      <div>
      <div style={{ color: 'white', padding: '10px', marginTop: '10px' }}>
      {digitalStrategy.map((digitalStrategyItem) => (
  <div key={digitalStrategyItem._id}>
    <h2>{digitalStrategyItem.package_name}</h2>
    <p>{digitalStrategyItem.description}</p>
    <p>need_service: {digitalStrategyItem.need_service ? 'Yes' : 'No'}</p>
    <p>Price: {digitalStrategyItem.price}</p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
           Read More</button>
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
};

export default DigitalStrategy;
