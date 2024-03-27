import React from 'react';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";
import DigitalStrategy from "../components/digitalstrategy";
import GraphicDesign from "../components/graphicdesign";
import SocialMediaManagement from "../components/socialmediamanagement";
import WebDevelopment from "../components/webdevelopment";

function Services (){
  return (
    <>
      <Navbar/>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Our Services</h1>
        <p>Welcome to our services page. Below, you'll find a brief overview of each service we offer.</p>

        <h2>Digital Strategy</h2>
        <p>Our digital strategy services focus on developing comprehensive plans to help businesses achieve their online goals. We analyze market trends, competitor strategies, and customer behavior to create tailored digital strategies that drive results.</p>
        <DigitalStrategy/>

        <h2>Graphic Design</h2>
        <p>Our graphic design services are aimed at creating visually stunning assets that resonate with your target audience. From logos and branding materials to marketing collateral and website graphics, we bring your brand to life through captivating design.</p>
        <GraphicDesign/>

        <h2>Social Media Management</h2>
        <p>Our social media management services encompass everything from content creation and posting to community engagement and analytics. We help businesses build and maintain a strong presence on social media platforms to connect with their audience and drive engagement.</p>
        <SocialMediaManagement/>

        <h2>Web Development</h2>
        <p>Our web development services focus on building custom websites that are visually appealing, user-friendly, and optimized for performance. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to bring your vision to life.</p>
        <WebDevelopment/>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
