import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import LoginForm from "./form";
import Footer from "../../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import storageKeys from "../../constant/storage-keys";
import { useNavigate } from "react-router-dom";

Login.propTypes = {
  onSubmit: PropTypes.func,
};

function Login(props) {
  const navigate = useNavigate();
  const url = "http://localhost:5000/user/login";
  const handleOnSubmit = (value) => {
    console.log("login submit", value);
    axios
      .post(url, value)
      .then((res) => {
        console.log(res.data.accesstoken);
        console.log("data tra ve", res.data);
        localStorage.setItem(storageKeys.TOKEN, res.data.accesstoken);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };
  return (
    <div>
      <Header />
      <LoginForm onSubmit={handleOnSubmit}></LoginForm>
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

export default Login;
