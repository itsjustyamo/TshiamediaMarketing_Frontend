import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

      const Navbar = () => {
    return (
      <div className='headstyle'>
     <header className="bg-gradient-to-r from-gray-200 to-green-500 text-white py-4 w-full">
     <div className="container mx-auto">
            <nav className="justify-between items-center px-8">
               

                <div className="flex space-x-4">
                  

                  {/* Home */}
                <button onClick={() => {
                   window.location.href = "http://localhost:5173";
                   }}className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Home</button>
                  
                  {/* Services */}
                  <button onClick={() => {
                   window.location.href = "http://localhost:5173/services";
                  }}className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Services</button>


                  

                   {/*Contact Us*/}
                   <button   onClick={() => {
                   window.location.href = "http://localhost:5173/contactus";
                  }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Contact Us</button> 

                   {/* Log In/ Sign Up */}
                   <button onClick={() => {
                   window.location.href = "http://localhost:5173/login";
                   }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Login/Sign Up</button>
                   
                   
                </div>

               </nav>
            </div>
        </header>
  </div>
  );
};

export default Navbar;