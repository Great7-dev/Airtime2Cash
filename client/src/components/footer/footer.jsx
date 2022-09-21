import React from "react";
import { Footerstyle } from "./footerstyle";
import Logo from "../../assets/Footer.svg";
import Logo2 from "../../assets/Social Links.svg";

const Footer = () => {
  return (
    <Footerstyle>
      <div className="logo-container">
        <img src={Logo} alt="Footer" />
        <p className="text">Airtime2Cash</p>
        {/* <p className="text">Airtime2Cash</p> */}
      </div>
      <div className="secondary-text-container">
        <p>Home</p>
        <p>About Airtime2Cash</p>
        <p>Contact</p>
      </div>
      <div className="links">
        <div className="info-links">
          <p className="text3">© 2022 Airtme2cash. All rights reserved</p>
          <img className="img" src={Logo2} alt="Footer" />
        </div>
      </div>

      {/* <div className="footer-container">
                <div className="footer-logo">
                </div>
                <div className='footer-text'>
                </div>
                <div className="footer-copyright">
                </div>
            </div>        */}
    </Footerstyle>
  );
};
export default Footer;
