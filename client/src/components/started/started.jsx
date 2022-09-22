import React from "react";
import { Startedstyle } from "./startedstyles";
import Logo from "../../assets/Man.svg";
import {Link} from "react-router-dom"

const Started = () => {
  return (
    <Startedstyle>
      {/* left side */}
      <div className="left-container">
        {/* 1 */}
        <div className="test">
        <p className="text">
            Surplus Airtime?
            <br/>
            Don’t worry we <br/>
            got you covered
          </p>
          <p className="text1">
            Having trouble selling your overloaded airtime? You don't have to
            <br/>
            worry any longer because with this app you can get paid instantly
            <br/> for your airtime.
          </p>
          <Link to="/signup">
        <button className="btn">Get Started</button>
          </Link>
        </div>
        </div>
    
      <div className="navbar_logo">
        <img src={Logo} alt="man" />
      </div>
    </Startedstyle>
  );
};

export default Started;
