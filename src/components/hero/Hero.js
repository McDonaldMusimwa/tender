import React from "react";
import hero from "../../assets/hero.jpg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="heroImage" src={hero} alt="elephant" />
      <div className="wording">
        <h1>An Engineered Globally Competitive Industrial Complex</h1>
        <p>
          The East London Industrial Development Zone (IDZ) is a world-class
          engineered efficient complex for globally competitive manufactures.
        </p>
        <button>For more information contact us</button>
      </div>
    </div>
  );
};

export default Hero;
