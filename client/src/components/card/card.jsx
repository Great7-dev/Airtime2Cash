import React from "react";
import { Cardstyle } from "./cardstyle";
import Logo from "../../assets/Rectangle.svg";
import Logo2 from "../../assets/Login.svg"
import Logo3 from "../../assets/Dashboard.svg"
import Logo4 from "../../assets/Vector.svg";

const Card = () => {
  return (
    <Cardstyle>
      <div className="steps">
        <img src={Logo} alt="Rectangle" className="rectangle"/>
        <div className="content">
            <p className="text">
            Change Surplus Airtime
            <br /> to Real Cash
          </p>
          <p className="text1">
            In three simple steps, change airtime to cash
          </p>
        </div>
      </div>


      <div className="boxes">
        <div className="login box">
            <img src={Logo2} alt="Login"  />
            <div>
            <h3 className="text2">Login or Register</h3>
            </div>
            <p className="text3">First you have to create an account for your<br/> transactions or Login if you alraedy have an account</p>
        </div>
        <div className="deposit box">
            <img src={Logo3} alt="Deposit" />
            <div>
            <h3 className="text2">Deposit From Dashboard</h3>
            </div>
            <p className="text3">Deposit your airtime to your account and<br/> wait for the confirmation</p>
        </div>
        <div className="convert box">
            <img src={Logo4} alt="Convert" />
            <div>
            <h3 className="text2">Convert</h3>
            </div>
            <p className="text3">Convert your airtime to cash and get paid<br/> instantly</p>
      </div>
        </div>
    </Cardstyle>
  );
};

export default Card;
