import React, { Component } from 'react';
import axios from 'axios';
//import{Route, Redirect} from 'react-router';
//import {Link,useNavigate} from "react-router-dom";
import logoLogin from "../../assets/logoLogin.svg";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const client = axios.create({
    baseURL: "http://localhost:3005/users",
})

class Form extends Component {
   
    
    state = {
        email: '',
        password: '',
    }
    loginUser = async (email, password) => {
        try {
            const emailRegex = RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
            
            const isValidEmail = emailRegex.test(email);
            if (email === "" || password === "") {
                return toast.error("Please fill in all fields", {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else if (!isValidEmail) {
                return toast.error("Invalid Email", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            
            let res = await client.post("/login", {
                email: this.state.email,
                password: this.state.password
            });

            toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
            })
            
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("status", res.status);
            

        } catch (error) {
            toast.error(error.respose.data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            console.log(error.response.data.message);
        }
    };
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.loginUser(this.state.email, this.state.password);
        if(localStorage.getItem("status") ==="200"){
            console.log(localStorage.getItem("status"),"yayyyy");
            window.location.href = '/dashboard';
            
        }
        
        
            
        
    }

    render() {
        return (<div className="App" >
        <div className="inner">
            <div className="logo" >
                <img src={logoLogin}alt="" />
                <h4 className="spanOne" >   Airtime
                    <span className="spanTwo" >2Cash </span >

                        </h4> </div>

                        
                            <form onSubmit={this.handleSubmit} className="form-group">
                            <h3 align="left"> Login </h3>
                                
                                        <label for="InputEmail" className="class-text">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email/username" name="email" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/>

                                    
                                        <label for="InputPassword" className="class-text">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e)=>this.setState({password: e.target.value})} value={this.state.password}/>

                                    
                                    <a href="google.com" className="class-text">Forgot Password?</a>
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Login</button>
                                    <p className="dont-have-an-account">Don't have an account? <a href="google.com">Create Account</a></p>
                                
                            </form>
        </div>
        <ToastContainer/>

     </div> );
    
            }
}
export default Form;
