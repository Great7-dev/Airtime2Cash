import Swal from "sweetalert2";
// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const localStorageId = localStorage.getItem("id");

const token = localStorage.getItem("token");

export const updateProfile = (data, id) => {
  id = localStorageId;
  axios
    .patch(`${process.env.REACT_APP_BASE_URL}update/${id}`, data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(function (response) {
      if (response.status === 201) {
        toast.success("You have successfully updated your profile!");
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error("Something went wrong!");
    });
};

export const getUser = async (id) => {
  id = localStorageId;
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}getuser/${id}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    const res = await client.post("/login", {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const handleResend = async () => {
  const email = JSON.parse(localStorage.getItem("Email"));
  const response = await client.post("/forgotpassword", { ...email });
  if (response.status === 200) {
    toast.success("Verification link sent!");
  }
};

export const submitHandler = async (data) => {
  try {
    const response = await client.post("/forgotpassword", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const responseHandler = async (id, data) => {
  try {
    const response = await client.patch(`/change-password/${id}`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const signupHandler = async (data) => {
  try {
    const response = await client.post(`/create`, data);
    return response;
  } catch (error) {
    return error;
  }
};

//  export const client = axios.create({
//   baseURL: `${process.env.REACT_APP_BASE_URL}`,
// });
