import React from "react";

/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './SocialsNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faLinkedin,faYoutube} from "@fortawesome/free-brands-svg-icons";


const SocialsNav = () => {
  return (
    <div className="text-center Socials-Nav">
      <div>+27 67 103 3055</div>
      <a href="www.facebook"><FontAwesomeIcon icon={faFacebook}/></a>
      <a href="https://www.linkedin.com/in/mcdonald-musimwa-434589124"><FontAwesomeIcon icon={faLinkedin}/></a>
      <a href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig"><FontAwesomeIcon icon={faYoutube}/></a>
      
    </div>
  );
};

export default SocialsNav;
