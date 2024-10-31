import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/HeroSection';
import Services from './components/Services';
import Services1 from './components/Services1';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Booking from './components/Booking';
import About from "./components/About";
import Packages from "./components/Packages";
import Contacts from "./components/Contacts";
import BackToTop from "./components/BackToTop";

// Data for all the packages (can be moved to a separate file later if needed)
const packagesData = [
  {
    name: 'Mountain Gorilla Expeditions',
    description: "Guided treks to see the iconic mountain gorillas in Volcanoes National Park.",
    imageUrl: 'src/assets/img/20.jpg',
  },
  {
    name: 'Guided Birding Tours',
    description: "Discover Rwanda's rich avian diversity, with expert guides in key locations like Akagera and Nyungwe.",
    imageUrl: 'src/assets/img/18.jpg',
  },
  {
    name: 'Nyungwe Forest Adventures',
    description: "Chimpanzee tracking and canopy walks in one of Africa's oldest rainforests.",
    imageUrl: 'src/assets/img/08.jpg',
  },
  {
    name: 'Akagera National Park Safaris',
    description: "Guided game drives to spot the Big Five and other wildlife.",
    imageUrl: 'src/assets/img/07.jpg',
  },
  
  // Add more packages here
];

function App() {
  const [selectedTour, setSelectedTour] = useState('');

  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
  };

  return (
    <Router>
      <div>
        {/* Header and NavMenu visible on all pages */}
        <Header />
        <NavMenu />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Offers />
              <MissionVision />
            </>
          } />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/services1" element={<Services1 />} />
          
          {/* Pass the packagesData and handleTourSelect as props to Packages */}
          <Route path="/packages" element={<Packages packagesData={packagesData} onTourSelect={handleTourSelect} />} />
          
          {/* Pass selectedTour to Booking */}
          <Route path="/booking" element={<Booking selectedTour={selectedTour} packagesData={packagesData} />} />

          <Route path="/contact-us" element={<Contacts />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;