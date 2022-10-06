import React from "react";
import Vector from "./img/Vector.svg";
import "./Checkmail.css";
import axios from "../../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { handleResend } from "../../api/auth";
const CheckMail = () => {
  const navigate = useNavigate()
  

  const goBack = () => {
    navigate('/login')
  }

  return (
    <div className="checkmail-container">
      <ToastContainer />
    <div className="outerParent-div">
      <div className="parent-div">
        <div className="img_container">
          <img src={Vector} alt="mail" />
        </div>

        <h1 className="urmail">Check your mail</h1>

        <div className="parent-paragraph">
          <p className="paragraph">
            We sent a password reset link to your email. Please clikc the link
            to reset your password
          </p>
          
        </div>

        <div className="parent_btn">
        <p className="second-paragraph">
            Don’t receive the email? <span onClick={handleResend}>Click to Resend link </span>
          </p>

          <button className='login-btn' onClick={goBack}>Back to Login</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckMail;
