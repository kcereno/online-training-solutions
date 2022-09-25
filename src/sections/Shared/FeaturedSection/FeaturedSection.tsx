import React from "react";
import { Container } from "react-bootstrap";

import logo1 from "../../../assets/images/logos/business-insider.png";
import logo2 from "../../../assets/images/logos/forbes.png";
import logo3 from "../../../assets/images/logos/techcrunch.png";
import logo4 from "../../../assets/images/logos/the-new-york-times.png";
import logo5 from "../../../assets/images/logos/usa-today.png";
import "./FeaturedSection.scss";

const FeaturedSection = () => {
  return (
    <section className=" text-white section">
      <h2 className="text-center subheading"> Featured In</h2>
      <div className="marquee">
        <div className="track">
          <div className="logos ">
            <img src={logo1} alt="Business Insider" />
            <img src={logo2} alt="Forbes" />
            <img src={logo3} alt="TechCrunch" />
            <img src={logo4} alt="The New York Times" />
            <img src={logo5} alt="USA Today" />
            <img src={logo1} alt="Business Insider" />
            <img src={logo2} alt="Forbes" />
            <img src={logo3} alt="TechCrunch" />
            <img src={logo4} alt="The New York Times" />
            <img src={logo5} alt="USA Today" />
            <img src={logo1} alt="Business Insider" />
            <img src={logo2} alt="Forbes" />
            <img src={logo3} alt="TechCrunch" />
            <img src={logo4} alt="The New York Times" />
            <img src={logo5} alt="USA Today" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
