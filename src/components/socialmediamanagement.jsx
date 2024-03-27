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
      <button onClick={fetchDigitalStrategies} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Social Media Management'}
       
      </button>
    
      <div>
      <div style={{ color: 'green', border: '1px solid white', padding: '10px', marginTop: '10px' }}>
      {SocialMediaManagement.map((SocialMediaManagementItem) => (
  <div key={SocialMediaManagementItem._id}>
    <h2>{SocialMediaManagementItem.package_name}</h2>
    <p>{SocialMediaManagementItem.description}</p>
    <p>need_service: {SocialMediaManagementItem.need_service ? 'Yes' : 'No'}</p>
    <p>Price: {SocialMediaManagementItem.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div> 
  );
};

export default SocialMediaManagement;
