import Swal from 'sweetalert2'
import axios from "axios";
 const localStorageId = localStorage.getItem('id') 
//console.log(id);
const token = localStorage.getItem('Token') 
console.log(token);

export const updateProfile = (data,id) =>{
id  =localStorageId
    console.log("url",process.env.REACT_APP_BASE_URL);
console.log(id);
    axios.patch(`${process.env.REACT_APP_BASE_URL}update/${id}`,data,{
      headers:{'authorization': `Bearer ${token}`}
    })
      .then(function (response) {
    if(response.status === 201){
        Swal.fire(
            'Good job!',
            'You have successfully updated your profile!',
            'success'
          )}
      })
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


    export   const  getUser = async (id) =>{
      id  =localStorageId
   try{ 
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}getuser/${id}`)
    console.log("ddd",data);
    return data
     }catch(error){

        return error
     }
     
   }

  
