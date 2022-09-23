import React, { useState } from "react";
import "./Login.css";
import Logo from "../utils/Logo/Logo";
import InputField from "../utils/Input/Input";
import SubmitButton from "../utils/SubmitButton/SubmitButton";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const DivPara = styled.div`
  width: 100%;
  margin-top: -11px;
  margin-bottom: 40px;
  p {
    font-size: 12px;
  }
  p a {
    text-decoration: none;
  }
`;

const DivLogin = styled.div`
  margin-bottom: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  font-size: 12px;

  p a {
    text-decoration: none;
    color: #de3d6d;
    font-weight: bold;
  }
`;



 const Login = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const loginUser = async (email, password) => {
    try {

      // eslint-disable-next-line no-useless-escape
      const emailRegex = new RegExp( /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm");

      const isValidEmail = emailRegex.test(email);
      let res;
      if (email === "" || password === "") {
        return toast.error("Email or password cannot be empty");
      } 

        if (isValidEmail) {
          res = await login({email, password})
          console.log(res)
     
      localStorage.setItem("Email", res.record.email);
      localStorage.setItem("token", res.token);
      localStorage.setItem("id", res.record.id);

      toast.success(res.msg);
   
        navigate("/card")
  
    }
  } catch (error) {
      toast.error(error);
    }
  };
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    // <ToastContainer>
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-padding">
          <div className="login-box">
            <div className="login-heading">
              <Logo/>
            </div>
            <DivLogin>
              <h2>Login</h2>
            </DivLogin>
            <form onSubmit={handleSubmit}>
              <div className="">
                <InputField
                  type="input"
                  class="input"
                  label="Email"
                  placeholder="Enter your email or username"
                  name="email"
                  value={email}
                  change={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <InputField
                  type="password"
                  class="input"
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  change={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <DivPara>
                <p>
                  <Link to="/forgetpassword">Forgot password?</Link>
                </p>
              </DivPara>

              <div className="">
                <SubmitButton text="Login" onClick={handleSubmit} />
              </div>
            </form>

            <BtnContainer>
              <p>
                Don't have an account? <Link to="/signup">Create Account</Link>
              </p>
            </BtnContainer>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    // </ToastContainer>
  );
};

export default Login