import React from 'react';
import { useNavigate } from 'react-router-dom';

const Packages = ({ packagesData, onTourSelect }) => {
  const navigate = useNavigate();

  const handleBookNow = (tourName) => {
    onTourSelect(tourName);
    navigate('/booking');
  };

  return (
    
    <div className="container   mx-auto px-4 py-8 font-coolvetica ">
          <div
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('src/assets/img/31.jpg')`,
          height: '50vh',
          width: '160%',
          marginLeft: '-1%',
          
        }}
      >
          <h1 className=" text-white  text-5xl font-bold items-center justify-center mr-[40%] text- bg-opacity-50 p-4 rounded-lg">
        Packages
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packagesData.map((packageItem, index) => (
          <div key={index} className="text-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col">
              <div className="relative h-60 w-full">
                <img
                  src={packageItem.imageUrl}
                  alt={packageItem.name}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">{packageItem.name}</h3>
                  <p className="text-gray-700 mt-2">{packageItem.description}</p>
                </div>
                <button
                  onClick={() => handleBookNow(packageItem.name)}
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;