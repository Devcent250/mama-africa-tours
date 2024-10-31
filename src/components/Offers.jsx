import React from 'react';

const Offers = () => {

  const services = [
    {
      icon: 'src/assets/img/self-guide.png',
      title: 'Self Guide',
      description:
        'We offer a self-guide option that empowers you to navigate our platform at your own pace.',
    },
    {
      icon: 'src/assets/img/BestServices.png',
      title: 'Best Services',
      description:
        'We offer relaxation services with skilled staff and top-notch equipment for an unforgettable safari experience.',
    },
    {
      icon: 'src/assets/img/Affordable-Services.png',
      title: 'Affordable Prices',
      description:
        'Our offers are affordable travel without compromising adventure. Explore nature’s wonders without breaking the bank.',
    },
  ];

  return (
    <div className="bg-green-600 py-10 mt-[-72px] font-coolvetica ">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
            
              <div className="mb-4">
                <img src={service.icon} alt={service.title} className="mx-auto w-12 h-12 object-cover" />
              </div>
           
              <h3 className="text-xl mb-2">{service.title}</h3>
            
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
