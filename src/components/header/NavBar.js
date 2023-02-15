import React from "react";

import logo from "../../assets/logo.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="">
        <div className="text-center Socials-Nav">
          <div>+27 67 103 3055</div>
          <a href="www.facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/mcdonald-musimwa-434589124">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className="navbar">
          <picture>
            <img src={logo} alt="" />;
          </picture>
          <nav>
            <a>ELIDZA Home</a>
            <div className="dropdown">
              <button className="dropbtn">
                About The ELIDZS
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a>Our History</a>
                <a>Our Mandate</a>
                <a>Coporate Governance& Board Members</a>
                <a>SEZ incentives</a>
                <a>Sevices</a>
                <a>Science & Technology</a>
                <a>SHEQ Manage</a>
                <a>OUR Impact</a>
                <a>PAIA & POPIA</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Sectors
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a>Automotive</a>
                <a>Agro-processing</a>
                <a>Acqua Culture</a>
                <a>ICT & Electonics</a>
                <a>Business Process OutSourcing(BPO) &Offshore-shoring</a>
                <a>Manufacturing</a>
                <a>Renewable energy</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Opportunities
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a>Tenders</a>
                <a>Employment</a>
                <a>Training/Internships/Bursaries 2023</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                Media Center
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a>Media Statements/Articles</a>
                <a>Publications</a>
                <a>Gallery</a>
                <a>Video</a>
                <a>Virtual Tours</a>
              </div>
            </div>
            <a>Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
