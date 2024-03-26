import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Footer () {
  return (
      <div className='footer'>
       <footer>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* <div className='footerinfo'>
                        <h2 className="text-white text-lg font-bold">Tshiamedia Marketing</h2>
                        <p className="text-gray-400">Planned. Personalized. Persistent. </p>
                    </div> */}
                    {/* <div className='footercontact'>
                        <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">123 Street Name</p>
                        <p className="text-gray-400">City, State, Zip Code</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div> */}
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 Tshiamedia Marketing. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </div>
  );
};

export default Footer;