// import {useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

// const client2 = axios.create({
//     baseURL: `${process.env.REACT_APP_ACCT_BASE_URL}`,
// });

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
        console.log(response);
        return toast.success("You have successfully updated your profile!");
      }
    })
    .catch(function (error) {
      console.log(error);
      return toast.error("Something went wrong!");
    });
};

export const getUser = async (id) => {
  id = localStorageId;
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}getuser/${id}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    const isValidEmail = emailRegex.test(data.email);

    if (data.email === "" || data.password === "") {
      return toast.error("Email or password cannot be empty");
    }
    if (isValidEmail) {
      const res = await client.post("/login", {
        email: data.email,
        password: data.password,
      });
      return res.data;
    } else {
      console.log(data.email);
      const res = await client.post("/login", {
        username: data.email,
        password: data.password,
      });
      console.log(res);
      return res.data;
    }
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

export const postSellAirtime = async (data) => {
  try {
    const response = await client2.post(`/account/sellairtime`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(response);
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

export const getThistory = async (id) => {
  id = localStorageId;
  try {
    const { data } = await client2.get(`account/transaction-history/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getwithdrwalhistory = async (id) => {
  id = localStorageId;
  try {
    const { data } = await client2.get(`cash/getAllUserWithdrawals/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};
export const withdrawBalance = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await client2.post(`/cash/withdraw/`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await client.get(`/userrecords`, {
      headers: { authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteSingleInfo = async (id) => {
  try {
    const response = await client2.delete(`/account/deletebankaccount/${id}`);

    return response;
  } catch (error) {
    return error;
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
// })
