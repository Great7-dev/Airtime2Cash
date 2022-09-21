import React from "react";
import { Signupstyle } from "./Signupstyle";
import Logo from "../../assets/Touch on iphone screen.svg";
import Logo6 from "../../assets/group-airtime.svg";
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <Signupstyle>
      {/* left */}
      <div className="left-container">
        <div className="inner-container">
          <p className="text">
            The best platform for your
            <br />
            convenient airtime
            <br />
            exchange
          </p>
          <p className="text2">
            Sell Your airtime into cash anywhere you are in the world and
            receive your money into your wallet instantly
          </p>
          <Link to="/users/login">
          <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
      {/* right */}
      <div>
        <div className="images">
          <img src={Logo} alt="Touch on iphone screen" className="phone"/>
          <img src={Logo6} alt="airtime" className="attach" />
        </div>
      </div>

    </Signupstyle>
  );
};

export default Signup;
