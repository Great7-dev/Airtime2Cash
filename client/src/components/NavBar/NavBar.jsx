import React from "react";
import { Navbarstyle } from "./Navbarstyles";
import Logo from "../../assets/Airtime2cash.svg";
import { Link } from "react-router-dom";

const Navbar = ({  link, Name, clickEvent }) => {
  let dashboard;
localStorage.getItem("token") ? (dashboard = true) : (dashboard = false);
console.log(dashboard)
  return (
    <Navbarstyle>
      <div>
        <img src={Logo} alt="Airtime2cash" className="navbar__logo" />
      </div>
      {!dashboard ? (
        <ul className="navbar__links">
          <li className="Home hide">Home</li>
          <li className="hide">About Us</li>
          <li className="hide">Products</li>
          <li className="hide">Contact Us</li>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </ul>
      ) : (
        <ul className="navbar__links">
          <li className="Home hide">{Name}</li>
          <img src={link} alt="Airtime2cash" style={{borderRadius:'100px', width:'40px'}} onClick={clickEvent}/>
        </ul>
      )}

    </Navbarstyle>
  );
};

export default Navbar;
