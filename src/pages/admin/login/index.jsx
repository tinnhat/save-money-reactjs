import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoginFormAdmin from "./form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import adminStorageKeys from "../../../constant/admin-storage-keys";
import AdminHomePage from "../components/homepage";
LoginAdmin.propTypes = {};

function LoginAdmin(props) {
  let navigate = useNavigate();

  const url = "http://localhost:5000/user/login";
  const handleOnSubmit = (value) => {
    console.log("login submit", value);
    axios
      .post(url, value)
      .then((res) => {
        console.log(res.data.accesstoken);
        console.log("data tra ve", res.data);

        //check role
        //role =1 (admin sẽ vào trang admin)
        localStorage.setItem(adminStorageKeys.TOKEN, res.data.accesstoken);
        navigate(0);
        //else sẽ báo lỗi
        // if( )
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };

  return (
    <>
      <LoginFormAdmin onSubmit={handleOnSubmit}></LoginFormAdmin>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default LoginAdmin;
