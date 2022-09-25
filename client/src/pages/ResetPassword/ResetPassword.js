import React, {useState} from "react";
import AirtimeToCash from "./img/AirtimeToCash.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPasswordStyle from "./ResetPassword.style";
import { useParams, useNavigate } from 'react-router-dom';
import { responseHandler } from "../../api/auth";

function ResetPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
const navigate = useNavigate()
  let { id } = useParams();
  const changePassword = async(password, cPassword)=>{
    try {
      if(password === "" || confirmPassword === ""){
        return toast.error("Password cannot be empty")
      }
    const response = await responseHandler(id,{
      password,confirmPassword
    })
if (response.status === 200){
  navigate("/login")
}
      toast.success(response.data.message)
      console.log(response)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    changePassword(password, confirmPassword)
    console.log(password, confirmPassword)
  }

  return (
    <ResetPasswordStyle>
      <div className="main-container">
        <div className="container">
          <div className="image-div">
            <img src={AirtimeToCash} alt="Airtime to cash" />
          </div>

          <h2 className='h2'>Reset Password</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="label">New Password</label>
              <input
                type="password"
                className="one"
                placeholder="New password"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="input-group">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="one"
                placeholder="Confirm Password"
                onChange={(e)=> setconfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>

            <button onClick={handleSubmit} className="button">Reset password</button>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </ResetPasswordStyle>
  );
}

export default ResetPassword;




