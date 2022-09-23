import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Logo from '../utils/Logo/Logo';
import InputField from '../utils/Input/Input';
//import { Button } from '../utils/Button/Button';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Responsive } from './signUpStyle';
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
    
    const [user, setUser] = useState(initialValue);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await signupHandler({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                phonenumber: user.phonenumber,
                password: user.password,
                confirmpassword: user.confirmpassword
            })
            console.log("RESPONSE", response);
            if(response.status === 200){
                navigate("/login")
            }
            toast.success("User created successfully", {
                position: "top-center",
            });
            setUser(initialValue)

          {
            const E_error = response.data.Error;
            const M_error = response.data.msg;
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

        <Responsive>
        <div className="signup">

            <div className="signup-card">


                <div className="signup-box">

                    <div className="logo-heading">
                        <Logo />
                    </div>

                        <a href='/' className='bck_btn'>
                            <IoIosArrowRoundBack /> Go back
                        </a>
                        
                    <div className=" frame9">
                        <ToastContainer />
                        <span>Create an account</span>
                    </div>


                    <div className="frame10">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <InputField name="firstname" type="text" class="input" label="First Name"
                                    value={user?.firstname} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your first name" />
                            </div>
                            <div className="">
                                <InputField name="lastname" type="text" class="input" label="Last Name"
                                    value={user?.lastname} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your last name" />
                            </div>
                            <div className="">
                                <InputField name="username" type="text" class="input" label="User Name"
                                    value={user?.username} change={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your user name" />
                            </div>
                            <div className="">
                                <InputField name="email" type="email" class="input" label="Email"
                                    value={user?.email} change={handleChange}
                                    placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <InputField name="phonenumber" type="text" class="input" label="Phone Number"
                                    value={user?.phonenumber} change={handleChange}
                                    placeholder="Enter your Phone number" />
                            </div>
                            <div className="">
                                <InputField name="password" type="password" class="input" label="Password"
                                    value={user?.password} change={handleChange}
                                    pattern="(^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                                    placeholder="Enter your password" />
                            </div>
                            <div className="">
                                <InputField name="confirmpassword" type="password" class="input" label="Confirm Password"
                                    value={user?.confirmpassword} change={handleChange}
                                    placeholder="Confirm password" />
                            </div>

                            <div className="">
                    
                                <button  className="submit-btn" type='submit'>SignUp</button>
                            </div>

                        </form>
                        <div className='sign_container'>
                            Already have an account?<a href='/login' className='sign_in'> Sign in</a>
                        </div>
                    </div>

                </div>
            </div>


            </div>
            </Responsive>

    )
}