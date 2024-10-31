import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16  text-black font-coolvetica ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold   mt-[-10px]">Our Mission</h3>
          <p className='text-left ml-24 mr-9'>
            At Mama Africa Tours, our mission is to provide unforgettable travel experiences that connect guests to the culture, 
            history, and natural beauty of Rwanda. We prioritize personalized service, sustainability, and community 
            engagement, ensuring each journey is enriching, safe, and memorable for every traveler.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mt-[-30px] ">Our Vision</h3>
          <p className='text-left ml-24'>
            At Mama Africa Tours, our vision is to be the premier choice for travelers seeking authentic experiences in Rwanda. 
            We aim to inspire a love for exploration while promoting sustainable tourism that benefits local communities, 
            enriching both our guests and the environments they visit.
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default MissionVision;
