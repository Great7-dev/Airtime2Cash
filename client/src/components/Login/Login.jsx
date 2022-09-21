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


const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
 const Login = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const loginUser = async (email, password) => {
    try {
      console.log(`email: ${email}, password: ${password}`);

      // eslint-disable-next-line no-useless-escape
      const emailRegex = new RegExp( /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm");
      const isValidEmail = emailRegex.test(email);
      let res;
      if (email === "" || password === "") {
        return toast.error("Email or password cannot be empty");
      } else {
        if (isValidEmail) {
          res = await client.post("/login", {
            email: email,
            // username: email,
            password: password,
          });
        } else {
          res = await client.post("/login", {
            // email: email,
            username: email,
            password: password,
          });
        }
      }
      
      if(res.data.status === "success"){
         navigate("/card")
      }
      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("id", res.data.record.id);
       console.log(res);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    // <ToastContainer>
    <div className="login">
      <div className="login-card">
        <div className="login-card-padding">
          <div className="login-box">
            <div className="login-heading">
              <Logo />
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
                  <Link to="/forgot-password">Forgot password?</Link>
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