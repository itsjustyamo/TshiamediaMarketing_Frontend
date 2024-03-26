import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

      const Navbar = () => {
    return (
      <div className='headstyle'>
     <header className="bg-gradient-to-r from-gray-200 to-green-500 text-white py-4 w-full">
     <div className="container mx-auto">
            <nav className="justify-between items-center px-8">
                <div className="text-xl font-bold">Your Logo</div>

                <ul className="flex space-x-4">
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Home</button>
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Services</button>
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Testimonials</button>
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Contact Us</button>
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Login</button>
                   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                </ul>

               </nav>
            </div>
        </header>
  </div>
  );
};

export default Navbar;