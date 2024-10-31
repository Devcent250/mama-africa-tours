import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const isLargeScreen = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth >= 1024;
  }
  return true;
};

const HeroSection = () => {
  const images = [
    "src/assets/img/10.jpg",
    "src/assets/img/07.jpg",
    "src/assets/img/26.jpg",
    "src/assets/img/04.jpg",
    "src/assets/img/05.jpg",
    "src/assets/img/06.jpg",
    "src/assets/img/08.jpg",
    "src/assets/img/09.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(isLargeScreen());
  const navigate = useNavigate();

  useEffect(() => {
    if (isAutoSliding) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000);

      return () => clearInterval(slideInterval);
    }
  }, [images.length, isAutoSliding]);

  useEffect(() => {
    const handleResize = () => {
      setIsAutoSliding(isLargeScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center font-coolvetica "
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
     
      <div className="absolute inset-0 bg-black opacity-50"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold font-abhaya">
          Explore the wild with us
        </h1>
        <p className="mt-2 lg:mt-4 text-lg lg:text-xl">
          Safety to the wild only comes when you travel with those who
          understand the wild.
        </p>
        <button
          onClick={handleBookingClick}
          className="mt-4 lg:mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 lg:px-6 rounded-full animate-bounce"
        >
          BOOK NOW
        </button>
      </div>

     
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

    
      <div
        id="services"
        className="absolute bottom-[-16px] w-full py-4 text-center"
      >
        <h2 className="text-5xl lg:text-3xl font-bold text-black">
          <span className="bg-white text-green-500 py-1 px-12 inline-block rounded-t-lg shadow-md">
            Our Services
          </span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;