import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";
import InformationPopup from "./components/InformationPopup";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoPopupOpen = () => {
    setIsInfoPopupOpen(true);
  };

  const handleInfoPopupClose = () => {
    setIsInfoPopupOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar onAboutClick={handleInfoPopupOpen} />
      <Hero onJoinClick={handleModalOpen} />
      <Features />
      <Testimonials />
      <AppPromo onGetAppClick={handleModalOpen} />
      <Footer onGetAppClick={handleModalOpen} />
      <InformationPopup
        isOpen={isInfoPopupOpen}
        onClose={handleInfoPopupClose}
      />
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default App;
