import React from "react";
import LogoPNG from "../../../images/Logo.svg";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={LogoPNG} alt="logo" />
    </div>
  );
}

export default Logo;
