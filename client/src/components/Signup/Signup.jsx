import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../utils/Logo/Logo';
import InputField from '../utils/Input/Input';
//import { Button } from '../utils/Button/Button';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {  SignupWrapper, StyledButton, StyledForm, StyleInput } from './signUpStyle';
import {signupHandler} from "../../api/auth"; 

const initialValue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: ""
}

export const Signup = ({
    ...props
}) => {
    
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await signupHandler({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                phonenumber: user.phonenumber,
                password: user.password,
                confirmpassword: user.confirmpassword
            })
            console.log("RESPONSE", res);
            if(res.status === 200){
                Navigate("/login")
            }
            toast.success("User created successfully", {
                position: "top-center",
            });
            setUser(initialValue)

          {
            const E_error = res.data.Error;
            const M_error = res.data.msg;
            if (E_error) {
                toast.error(E_error, {
                    position: "bottom-center",
                });
            }
            toast.error(M_error, {
                position: "bottom-center",
            });
        }

    }

    return ( 
            <SignupWrapper>
        <div className="signup">
 
                
                        <Logo />
              

                        <a href='/' className='bck_btn'>
                            <IoIosArrowRoundBack className='Icon' /> Go back
                        </a>
                  
                        <span className='CreateLabel'>Create an account</span>
          


                        <StyledForm onSubmit={handleSubmit}>
                            <div className="">
                                <InputField name="firstname" type="text" className="input" label="First Name"
                                    value={user?.firstname} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your first name" />
                            </div>
                            <div className="">
                                <InputField name="lastname" type="text" className="input" label="Last Name"
                                    value={user?.lastname} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your last name" />
                            </div>
                            <div className="">
                                <InputField name="username" type="text" className="input" label="User Name"
                                    value={user?.username} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your user name" />
                            </div>
                            <div className="">
                                <InputField name="email" type="email" className="input" label="Email"
                                    value={user?.email} change={handleChange}
                                    placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <InputField name="phonenumber" type="text" className="input" label="Phone Number"
                                    value={user?.phonenumber} change={handleChange}
                                    placeholder="Enter your Phone number" />
                            </div>
                            <div className="">
                                <InputField name="password" type="password" className="input" label="Password"
                                    value={user?.password} change={handleChange}
                                    pattern="(^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                                    placeholder="Enter your password" />
                            </div>
                            <div className="">
                                <InputField name="confirmpassword" type="password" className="input" label="Confirm Password"
                                    value={user?.confirmpassword} change={handleChange}
                                    placeholder="Confirm password" />
                            </div>

                            <div className="">
                    
                                <StyledButton  className="submit-btn" type='submit'>SignUp</StyledButton>
                            </div>

                        </StyledForm>
                        <div className='SignUpFooter'>
                            <label>Already have an account?</label><a href='/login' className='sign_in'> Sign in</a>
                        </div>
                    </div>

        
       

            </SignupWrapper>


    )
}