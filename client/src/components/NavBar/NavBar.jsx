import React, { useState } from "react";
import { Navbarstyle } from "./Navbarstyles";
import Logo from "../../assets/Airtime2cash.svg";
import { Link } from "react-router-dom";
import CardT from "../../pages/updateprofile/CardT";
import { set } from "react-hook-form";
import { useEffect } from "react";

const Navbar = ({Name}) => {
  let dashboard;
const currentUser=localStorage.getItem("name")
localStorage.getItem("token") ? (dashboard = true) : (dashboard = false);
const [display, setDisplay] = useState("none");
<<<<<<< HEAD

=======
const handleClick = () => {
  if (display === "none") {
    setDisplay("flex");
  } else {
    setDisplay("none");
  }
}
>>>>>>> 3e3d281b1ec1af2e2daddfab99e9ec7d2ad7bffe

const handleClick = () => {
if (display === "none"){
  setDisplay("flex");
 

}else{
  setDisplay("none");
}
}


  return (
    <Navbarstyle>
      <div>
        <a href="/"><img src={Logo} alt="Airtime2cash" className="navbar__logo"/></a>
      </div>
      {!dashboard ? (
        <ul className="navbar__links">
          <li className="Home hide">Home</li>
          <li className="hide">About Us</li>
          <li className="hide">Products</li>
          <li className="hide">Contact Us</li>
          <Link to="/login">
            <button className="btnn">Login</button>
          </Link>
        </ul>
      ) : (
        <ul className="navbar__links" onClick={handleClick}>
<<<<<<< HEAD
      <img src="https://i.pinimg.com/564x/e9/39/f7/e939f772951d80f1811a5b6c2b16089c.jpg" alt="Airtime2cash" style={{borderRadius:'80px', width:'30px'}} />
        <CardT display={display}/>
=======
      <img src="https://i.pinimg.com/564x/e9/39/f7/e939f772951d80f1811a5b6c2b16089c.jpg" alt="Airtime2cash" style={{borderRadius:'80px', width:'30px'}}/>
        <p class="currentUser">{currentUser}</p>
      <CardT display={display}/>
>>>>>>> 3e3d281b1ec1af2e2daddfab99e9ec7d2ad7bffe
        </ul>
      )}

    </Navbarstyle>
  );
};

export default Navbar;
