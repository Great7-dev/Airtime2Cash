import Swal from "sweetalert2";
// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const client2 = axios.create({
  baseURL: `${process.env.REACT_APP_ACCT_BASE_URL}`,
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
        Swal.fire(
          "Good job!",
          "You have successfully updated your profile!",
          "success"
        );
      }
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
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

export const handleAddBank = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await client2.post(`/account/createbankaccount`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserBanks = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await client.get(`/userrecords`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return await response.data.record.accounts;
  } catch (error) {
    console.log(error);
  }
};

// export const Mydata = async() => {
//     try {
//         const response = await client2.get(`/account/allTransactions?page=0&size=10`);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const result = async () => {
//     try {
//         const response = await axios.get(
//             `http://localhost:4000/account/allTransactions`
//             );

//     } catch (error) {
//         console.log(error)
//     }
// }

export const confirmAmount = async (data, id) => {
  //   console.log({ airtime: data });
  try {
    const response = await client2.patch(
      `/account/updatetransactionstatus/${id}`,
      { airtimeAmount: data },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const cancelTransactions = async (id) => {
  try {
    const response = await client2.patch(
      `/account/canceltransaction/${id}`,
      {
        headers: { authorization: `Bearer ${token}` },
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//  export const client = axios.create({
//   baseURL: `${process.env.REACT_APP_BASE_URL}`,
// });
