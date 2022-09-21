import Swal from 'sweetalert2'
import axios from "axios";
import useNavigate from "react-router-dom"
const REACT_BASE_URL = process.env.REACT_APP_BASE_URL
export const updateProfile = (data,id='83da4b0f-374e-4f1d-9f97-0a5401631859') =>{
    console.log("url",process.env.REACT_APP_BASE_URL);
console.log(id);
    axios.patch(`${process.env.REACT_APP_BASE_URL}/update/${id}`,data)
      .then(function (response) {
    if(response.status === 201){
        Swal.fire(
            'Good job!',
            'You have successfully updated your profile!',
            'success'
          )}
      })
      setTimeout( ()=>{

      },300)
      .catch(function (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      });
    }


    export   const  getUser = async (id='83da4b0f-374e-4f1d-9f97-0a5401631859') =>{
   try{ 
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}user/${id}`)
    console.log("ddd",data);
    return data
     }catch(error){

        return error
     }
     
   }

  
