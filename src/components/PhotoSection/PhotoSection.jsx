import React from "react";
import './PhotoSection.css'
import hero from '../../assets/heroimage_xl.png'
import TravelForm from "../TravelForm/TravelForm";
const PhotoSection = () => {
  return (
<section className="hero-section" style={{ backgroundImage: `url(${hero})` }}>


      <div className="hero-content">
        <div className="text-container">
          <h1>Easiest way to get visa</h1>
          <p className="text-p">
            Let us help you get your visa for any country in the world.
          </p>
        </div>
      </div>
      <TravelForm/>
      
    </section>
  );
};

export default PhotoSection;
