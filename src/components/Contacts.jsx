import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

function Contacts() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>
        <p className="text-lg mb-6">Reach out to us through our social media or email for any inquiries.</p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/mamaafricatours" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.facebook.com/mamaafricatours" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaFacebookF size={28} />
          </a>
          <a href="https://www.twitter.com/mamaafricatours" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaTwitter size={28} />
          </a>
          <a href="https://www.youtube.com/mamaafricatours" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaYoutube size={28} />
          </a>
        </div>

        <div className="text-lg text-gray-700">
          <p>Email: <a href="mailto:info@mamaafricatours.com" className="text-green-600 hover:text-green-800">info@mamaafricatours.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
