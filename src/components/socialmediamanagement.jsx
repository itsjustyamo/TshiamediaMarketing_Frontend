//First
import React, { useState } from 'react';
import axios from 'axios';

function SocialMediaManagement() {
  const [SocialMediaManagement, setSocialMediaManagement] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchDigitalStrategies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/collections/SocialMediaManagementRoutes');
      setSocialMediaManagement(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
   
   <img src='src/assets/IMG_6467.JPG' alt='digital' style={{ width: '300px', height: '300px', marginBottom: '20px' }}></img>
        
   <br/>
      <button onClick={fetchDigitalStrategies} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Social Media Management'}
       
      </button>
    
      <div>
      <div style={{ color: 'white', padding: '10px', marginTop: '10px' }}>
      {SocialMediaManagement.map((SocialMediaManagementItem) => (
  <div key={SocialMediaManagementItem._id}>
    <h2>{SocialMediaManagementItem.package_name}</h2>
    <p>{SocialMediaManagementItem.description}</p>
    <p>need_service: {SocialMediaManagementItem.need_service ? 'Yes' : 'No'}</p>
    <p>Price: {SocialMediaManagementItem.price}</p>
    <button className="bg-green-500 hover:bg-green-600 text-white background-color-green font-bold py-2 px-4 rounded">
           Read More</button>
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
};

export default SocialMediaManagement;
