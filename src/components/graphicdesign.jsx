//First
import React, { useState } from 'react';
import axios from 'axios';

function GraphicDesign() {
  const [graphicDesign, setGraphicDesign] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchGraphicdesign = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/collections/graphicDesignRoutes');
      setGraphicDesign(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <img src='src/assets/IMG_6469.JPG' alt='digital' style={{ width: '300px', height: '300px', marginBottom: '20px' }}></img>
        
    
      <button onClick={fetchGraphicdesign} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Graphic Design'}
       
      </button>
    
      <div>
      <div style={{ color: 'white', padding: '10px', marginTop: '10px' }}>
      {graphicDesign.map((graphicDesignItem) => (
  <div key={graphicDesignItem._id}>
    <h2>{graphicDesignItem.package_name}</h2>
    <p>{graphicDesignItem.description}</p>
    <p>need_service: {graphicDesignItem.need_service ? 'Yes' : 'No'}</p>
    <p>Price: {graphicDesign.price}</p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
           Read More</button>
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
};

export default GraphicDesign;
