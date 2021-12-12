import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import RegisterForm from "./form";
import Footer from "../../components/footer";

Register.propTypes = {};

function Register(props) {
  return (
    <div>
      <Header />
      <RegisterForm></RegisterForm>
      <Footer />
    </div>
  );
}

export default Register;
