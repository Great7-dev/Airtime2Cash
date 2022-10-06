import React,{useState,useEffect} from "react";
import logo from "./images/Logo.svg";
import styled from "styled-components"
import { useForm } from "react-hook-form";
import {updateProfile,getUser} from "../../api/auth"
import {SaveBtnStyle,InputStyle,Container, AfterNavBar} from "./Styled.updateProfile.jsx"
import Navbar from "../../components/NavBar/NavBar";
import CardT from "./CardT";

//React Form
function Form() {
   const [user,setUser] =useState("")
  useEffect(() =>{
    const loadUser = async ()=> {
      const record =await getUser()
      setUser(record.record)
      console.log(record)
    }
    loadUser()
  },[])
  
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data) => {
        updateProfile(data)
      };
    
  return (
    <div>
      <Navbar/>
      <AfterNavBar>
        <Container>
        <div>
        <img src={logo} alt="The Logo of Airtime To Cash" />
        </div>
        <div>
        <h1>Basic Information</h1>
        </div>
     <div>
     <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <InputStyle defaultValue={user.firstname} type="text" placeholder="Enter Your First Name"  {...register("firstname", {minLength: 3, pattern: /^[A-Za-z]+$/i})}/>
            {errors.firstname?.type === 'minLength' && <P>The length must be more than 3</P>}
            {errors.firstname?.type === 'pattern' && <P>Your Input must be type text</P>}
            <label>Last Name</label>
            <InputStyle defaultValue={user.lastname} type="text" placeholder="Enter Your Last Name" {...register("lastname", {minLength: 3, pattern: /^[A-Za-z]+$/i})}/>
            {errors.lastname?.type === 'minLength' && <P>The length must be more than 3</P>}
            {errors.lastname?.type === 'pattern' && <P>Your Input must be type text</P>}
            <label>Phone Number</label>
            <InputStyle defaultValue={user.phonenumber}  type="number" placeholder="Enter Your Phone Number" {...register("phonenumber",{minLength: 11})}/>
            {errors.phonenumber?.type === 'minLength' && <P>The length of your Phone Number must be equal to 11</P>}
            <label>Email</label>
            <InputStyle defaultValue={user.email} type="email" placeholder="Enter Your Email" {...register("email")}/>
            {errors.email?.type === 'minLength' && <P>The length of your Phone Number must be equal to 11</P>}
             {/* <input type="file" /> */}
            <SaveBtnStyle type="submit">Save</SaveBtnStyle>
          </form>
     </div>  
        </Container>
      </AfterNavBar>
    </div>
  );
}

export default Form;



const P = styled.p`
color:red;
`