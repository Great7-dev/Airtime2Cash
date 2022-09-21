import './Signup.css';
import Logo from '../utils/Logo/Logo';
import InputField from '../utils/Input/Input';
//import { Button } from '../utils/Button/Button';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState } from 'react';


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
        console.log(user);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.firstname ===""|| user.lastname ==="" || user.username ==="" || user.email==="" || user.phonenumber==="" || user.password==="" || user.confirmpassword==="") {
            toast.error("All fields are required", {
                position: "top-center",
            });
        }
        try {
            const res = await axios.post('http://localhost:5555/users/create', {
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                phonenumber: user.phonenumber,
                password: user.password,
                confirmpassword: user.confirmpassword
            });
            console.log("RESPONSE", res);
            toast.success("User created successfully", {
                position: "top-center",
            });


        } catch (error) {
            toast.error("All fields are required", {
                position: "top-center",
            });
        }

    }

    return (

        <responsive>
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
                                    value={user.firstname} onChange={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your first name" />
                            </div>
                            <div className="">
                                <InputField name="lastname" type="text" class="input" label="Last Name"
                                    value={user.lastname} onChange={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your last name" />
                            </div>
                            <div className="">
                                <InputField name="username" type="text" class="input" label="User Name"
                                    value={user.username} onChange={handleChange}
                                    pattern="^[A-Za-z0-9]{3,16}$" placeholder="Enter your user name" />
                            </div>
                            <div className="">
                                <InputField name="email" type="email" class="input" label="Email"
                                    value={user.email} onChange={handleChange}
                                    placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <InputField name="phonenumber" type="text" class="input" label="Phone Number"
                                    value={user.phonenumber} onChange={handleChange}
                                    placeholder="Enter your Phone number" />
                            </div>
                            <div className="">
                                <InputField name="password" type="password" class="input" label="Password"
                                    value={user.password} onChange={handleChange}
                                    pattern="(^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                                    placeholder="Enter your password" />
                            </div>
                            <div className="">
                                <InputField name="confirmpassword" type="password" class="input" label="Confirm Password"
                                    value={user.confirmpassword} onChange={handleChange}
                                    placeholder="Confirm password" />
                            </div>

                            <div className="">
                               
                                <button  type='submit'>SignUp</button>
                            </div>

                        </form>
                        <div className='sign_container'>
                            Already have an account?<a href='/' className='sign_in'> Sign in</a>
                        </div>
                    </div>


                </div>
            </div>


            </div>
            </responsive>

    )
}