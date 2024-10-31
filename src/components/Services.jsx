import React from 'react';
import { Link } from 'react-scroll';

const services = [
  { 
    img: 'src/assets/img/13.jpg', 
    title: 'Gorilla Trekking Tours', 
    description: 'Experience the majestic mountain gorillas in their natural habitat with our expert guides.' 
  },
  { 
    img: 'src/assets/img/04.jpg', 
    title: 'Cultural Tours', 
    description: 'Discover Rwanda’s rich history and vibrant traditions through our guided cultural tours.' 
  },
  { 
    img: 'src/assets/img/06.jpg', 
    title: 'Nature and Wildlife Safaris', 
    description: 'Explore the diverse wildlife of Rwanda’s national parks with thrilling safari adventures.' 
  },
  { 
    img: 'src/assets/img/08.jpg', 
    title: 'Bird Watching Tours', 
    description: 'Enjoy birdwatching in Rwanda’s lush forests and spot rare bird species in their habitats.' 
  },
  { 
    img: 'src/assets/img/09.jpg', 
    title: 'Adventure Activities', 
    description: 'From hiking to zip-lining, embark on exciting adventure tours across Rwanda’s landscapes.' 
  },
  { 
    img: 'src/assets/img/17.jpg', 
    title: 'Community and Eco-Tours', 
    description: 'Support local communities while exploring eco-friendly tours that promote sustainable tourism.' 
  },
];

const Services = () => {
  return (
    <>
      

         
      <section id="services" className="py-16  mt-[40px] mb-[96px] font-coolvetica ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative bg-white shadow-md w-full h-full overflow-hidden rounded-lg transition-transform transform hover:scale-105 duration-300 group"
              >
          
                <div className="relative w-full h-full">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
            
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{service.title}</h3>

                
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
