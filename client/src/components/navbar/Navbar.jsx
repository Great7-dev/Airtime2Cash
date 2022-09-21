import React from "react";
import { Navbarstyle } from "./Navbarstyles";
import Logo from "../../assets/Airtime2cash.svg";
import { Link } from "react-router-dom";

const Navbar = ({ dashboard }) => {
  return (
    <Navbarstyle>
      <div>
        <img src={Logo} alt="Airtime2cash" className="navbar__logo" />
      </div>
      {!dashboard && (
        <ul className="navbar__links">
          <li className="Home hide">Home</li>
          <li className="hide">About Us</li>
          <li className="hide">Products</li>
          <li className="hide">Contact Us</li>
          <Link to="/users/login">
            <button className="btn">Login</button>
          </Link>
        </ul>
      )}
      {/* Create a div here to insert profile picture and user name that only displays when the dashboard prop is passed into the Navbar component */}
    </Navbarstyle>
  );
};

export default Navbar;
