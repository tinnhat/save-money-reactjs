import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/logo.png";
import "./header.scss";
// import "../../main.scss";
Header.propTypes = {};

function Header(props) {
  return (
    <header class="header header-pink">
      <div class="container">
        <div class="navbar">
          <a class="navbar-logo" href="./index.html">
            <img src={logo} alt="" class="navbar-logo__img" />
            <p class="navbar-logo__text text-green">Save Money</p>
          </a>
          <ul class="navbar__list">
            <li class="navbar__list-item">
              <a href="#" class="list-item-link text-white">
                ABOUT
              </a>
            </li>
            <li class="navbar__list-item">
              <a href="#" class="list-item-link text-white">
                HOW IT WORKS
              </a>
            </li>
            <li class="navbar__list-item">
              <a href="#" class="list-item-link text-white">
                CONTACT
              </a>
            </li>
          </ul>
          <div class="login-box">
            <a href="./register.html" class="login-box__register text-green">
              Register Now
            </a>
            <a href="./login.html" class="btn btn-login bkg-green">
              LOGIN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
