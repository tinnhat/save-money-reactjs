import React from "react";
import PropTypes from "prop-types";
import "../../main.scss";

import Footer from "../../components/footer";
import Header from "./headerLanding";
import Social from "./social-info";
import Customer from "./customer";
import Dashboard from "./dashboard";
import Subcirbe from "./subcribe";
import HeaderLanding from "./headerLanding";

LandingPage.propTypes = {};

function LandingPage(props) {
  return (
    <div>
      <HeaderLanding></HeaderLanding>
      <Social></Social>
      <Customer></Customer>
      <Dashboard></Dashboard>
      <Subcirbe></Subcirbe>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
