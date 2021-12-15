import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import RegisterForm from "./form";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { register } from "../../feature/userSlice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
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
    axios.post(url, newValue).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Header />
      <RegisterForm onSubmit={handleRegisterFormSubmit}></RegisterForm>
      <Footer />
    </div>
  );
}

export default Register;
