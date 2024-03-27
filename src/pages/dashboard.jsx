import React from 'react';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";

const Dashboard = () => {
  const handleServicesClick = () => {
    window.location.href = 'http://localhost:5173/services';
  };

  return (
    <>
      <Navbar/>
      <div style={{ textAlign: 'center', padding: '50px' }}>
      
        <h1>Welcome to Tshiamedia Marketing</h1>
        <div className="text-xl font-bold">
                  <img src='src/assets/TshiaMedia+clean+background+logo.png' alt='logo' style={{ width: '50px', height: '50px', marginBottom: '20px' }}></img>
                </div> 
        <p>Tshiamedia Marketing is a full-service marketing agency dedicated to helping businesses thrive in the digital world. With a focus on innovation and creativity, we offer a wide range of marketing solutions tailored to meet the unique needs of each client.</p>
        <p>At Tshiamedia, we believe in the power of strategic planning, personalized campaigns, and persistent efforts to drive results. Our team of experts specializes in digital marketing, social media management, content creation, branding, and more.</p>
        <p>Our slogan is: Planned, Personalised, and Persistent. This reflects our commitment to delivering customized strategies that align with your business objectives and goals.</p>
        <p>Whether you're a startup looking to establish your brand presence or a seasoned business aiming to expand your reach, we are here to help you succeed. Let us bring your marketing efforts to life and elevate your brand to new heights.</p>
        <button onClick={handleServicesClick} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', backgroundColor: 'green', color: '#fff', border: 'none', cursor: 'pointer' }}>Services</button>
      </div>
      <img src='src/assets/IMG_6468.JPG' alt='digital' style={{ width: '20px', height: '20px', marginBottom: '20px' }}></img>
      <Footer/>
    </>
  );
};

export default Dashboard;
