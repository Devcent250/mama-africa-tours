import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

const NavMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-8 left-0 w-full z-50 ">
      <div className="absolute -top-[-15px] left-12 z-10">
        <img src="/logo.png" alt="Mama Africa Logo" className="h-24 w-25 object-cover" />
      </div>

      
      <nav className="bg-white ">
        <div className="container mx-auto flex justify-center items-center py-4">
         
          <ul className={`flex-col ml-64 justify-center items-center text-center md:ml-0 md:flex md:flex-row md:space-x-6 text-green-600  font-coolvetica ${isMobileMenuOpen ? "flex" : "hidden"} md:flex`}>
            <li><Link to="/" className="hover:text-green-800">Home</Link></li>
            <li><Link to="/who-we-are" className="hover:text-green-800">Who We Are</Link></li>
            <li><Link to="/services1" className="hover:text-green-800">Services</Link></li>
            <li><Link to="/packages" className="hover:text-green-800">Packages</Link></li>
            <li><Link to="/contact-us" className="hover:text-green-800">Contact Us</Link></li>
          </ul>

          
          <div className="md:hidden ml-auto" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-green-600 cursor-pointer" size={24} />
            ) : (
              <AiOutlineMenu className="text-green-600 cursor-pointer" size={24} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
