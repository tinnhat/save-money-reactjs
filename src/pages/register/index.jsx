import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import RegisterForm from "./form";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { register } from "../../feature/userSlice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Register.propTypes = {
  onSubmit: PropTypes.func,
};

function Register(props) {
  const url = "http://localhost:5000/user/register";
  const handleRegisterFormSubmit = async (value) => {
    const newValue = {
      role: 0,
      ...value,
    };
    console.log("form submit", newValue);
    axios
      .post(url, newValue)
      .then((res) => {
        console.log(res.data.msg);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.data);
        toast.error("Something wrongs");
      });
  };
  return (
    <div>
      <Header />
      <RegisterForm onSubmit={handleRegisterFormSubmit}></RegisterForm>
      <Footer />
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
    </div>
  );
}

export default Register;
