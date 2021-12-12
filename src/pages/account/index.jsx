import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import AccountForm from "./form";
import Footer from "../../components/footer";

Account.propTypes = {};

function Account(props) {
  return (
    <div>
      <Header></Header>
      <AccountForm></AccountForm>
      <Footer></Footer>
    </div>
  );
}

export default Account;
