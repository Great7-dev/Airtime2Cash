import React from "react";
import axiosConfig from "./axios";

export const forgotPassword= (data) => {
  const url = "/forgotpassword";
  return axiosConfig.post(url, data);
};
