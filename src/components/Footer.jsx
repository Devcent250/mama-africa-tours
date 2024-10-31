import React from 'react';
import { Link } from "react-router-dom";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer id='contact-us' className="bg-green-800 text-white py-8 font-coolvetica ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">
    
        <div className="flex flex-col items-center md:items-start ml-12">
          <img src="/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />
          <div className="flex space-x-4">
         
             <a href="#" aria-label="Twitter">
              <XIcon fontSize="small" style={{ color: 'white' }} />
            </a>
        
            <a href="#" aria-label="Facebook">
              <FacebookRoundedIcon fontSize="small" style={{ color: 'white' }} />
            </a>
          
            <a href="#" aria-label="Instagram">
              <InstagramIcon fontSize="small" style={{ color: 'white' }} />
            </a>
         
            <a href="#" aria-label="YouTube">
              <YouTubeIcon fontSize="small" style={{ color: 'white' }} />
            </a>
           
          </div>
        </div>

      
        <div className="flex flex-col items-center md:items-start">
          <h3 className=" mb-2 text-green-500">Address</h3>
          <p>Kigali, Nyarugenge</p>
          <p>KN 254 St.</p>
          <p>info@mamaafrica.com</p>
        </div>

      
         <div className="flex flex-col items-center md:items-start">
          <h3 className=" mb-2 text-green-500">More about us</h3>
          <p><Link to="/who-we-are">Who we are</Link></p>
          <p><Link to="/services1">Services</Link></p>
          <p><Link to="/packages">Packages</Link></p>
         
        </div>

       
        <div className="flex flex-col items-center md:items-start">
          <h3 className=" mb-2">Register for our news updates</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
      </div>

    
      <div className="mt-8 border-t border-white pt-4 text-center">
        <p className="text-sm">© mamafrica - Powered by Crox Media</p>
      </div>
    </footer>
  );
};

export default Footer;
