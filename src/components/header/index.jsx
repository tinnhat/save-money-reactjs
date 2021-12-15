import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
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
              <Link to="/" class="list-item-link text-white">
                ABOUT
              </Link>
            </li>
            <li class="navbar__list-item">
              <Link to="/" class="list-item-link text-white">
                HOW IT WORKS
              </Link>
            </li>
            <li class="navbar__list-item">
              <Link to="/" class="list-item-link text-white">
                CONTACT
              </Link>
            </li>
          </ul>
          <div class="login-box">
            <Link to="/register" class="login-box__register text-green">
              Register Now
            </Link>
            <Link to="/login" class="btn btn-login bkg-green">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
