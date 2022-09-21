import React, { useState } from 'react'
import './ForgetPassword.css'
// import { forgotPassword } from '../../Api/auth'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const ForgetPassword = () => {
  const [email, setEmail] = useState({ email: '' })
  const navigate = useNavigate()
  
  const handleInput = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setEmail({...email, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/users/forgotpassword', {
        ...email
      })
      if (response.status === 200) {
        localStorage.setItem('Email', JSON.stringify(email))
        toast.success('Reset email sent!')
        setTimeout(() => {
          navigate('/checkmail')
        }, 4000)
      }
    } catch (error) {
      console.log("ERROR", error)
      // toast.error('Invalid Email. Please retry')
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  const goBack = () => {
    navigate('/login')
  }

  return (
    <>
      <ToastContainer />
    <div className="outer-parent">
      <div className="parentdiv"> 
      <form onSubmit={handleSubmit}>
        <div className='top'>
        <h3 className="title">Forgot password</h3>
        <p className="forget-paragraph">Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
          </div>

            <div className='label_title'> 
          <label>Email</label>
          </div>
          
            <div className='input_container'>
            <input type="email" className="form-control" placeholder="Enter your email" onChange={handleInput} name={'email'} value={email.email || ''} />
            </div>
          
          <div className='btn_container'>
        <button className = "btn btn-primary btn-bloc" onClick={handleSubmit}>
          Reset password
        </button>
        <button className="bck_btn" onClick={goBack}>
          Back to Login
        </button>
        </div>

        </form>
      </div>
      </div>
    </>
    )
  
}

export default ForgetPassword
