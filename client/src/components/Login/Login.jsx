import "./Login.css";
import Logo from "../utils/Logo/Logo";
import InputField from "../utils/Input/Input";
import SubmitButton from "../utils/SubmitButton/SubmitButton";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  baseURL: "http://127.0.0.1:3005/users/",
});
export const Login = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      console.log(`email: ${email}, password: ${password}`);
      const emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      );
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
      // else if (!isValidEmail) {
      //   return toast.error("Please provide a valid email", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // }
      // const res = await client.post("/login", {
      //   email: email,
      //   username: email,
      //   password: password,
      // });

      localStorage.setItem("Email", res.data.User.email);
      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("Firstname", res.data.User.firstname);
      localStorage.setItem("Lastname", res.data.User.lastname);
      localStorage.setItem("avatar", res.data.User.avatar);
      localStorage.setItem("phoneNumber", res.data.User.phoneNumber);
      // console.log(res.data.User);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
