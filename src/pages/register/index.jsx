import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import RegisterForm from "./form";
import Footer from "../../components/footer";

Register.propTypes = {
  onSubmit: PropTypes.func,
};

function Register(props) {
  const handleRegisterFormSubmit = (value) => {
    console.log("form submit", value);
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
