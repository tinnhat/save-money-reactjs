import React from "react";
import PropTypes from "prop-types";
import UserTable from "./user";
import HeaderAdmin from "../components/header";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
AllUsers.propTypes = {};

function AllUsers(props) {
  const navigate = useNavigate();
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
    navigate(0);
  };
  return (
    <>
      <HeaderAdmin />
      <UserTable onSubmit={handleRegisterFormSubmit} />
      <SideNav />
      <FooterAdmin />
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

export default AllUsers;
