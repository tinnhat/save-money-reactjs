import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import LoginForm from "./form";
import Footer from "../../components/footer";

Login.propTypes = {};

function Login(props) {
  return (
    <div>
      <Header />
      <LoginForm></LoginForm>
      <Footer />
    </div>
  );
}

export default Login;
