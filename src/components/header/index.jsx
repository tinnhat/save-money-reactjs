import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
// import "../../main.scss";
Header.propTypes = {};

function Header(props) {
  return (
    <header className="header header-pink">
      <div className="container">
        <div className="navbar">
          <Link className="navbar-logo" to="/home">
            <img src={logo} alt="" className="navbar-logo__img" />
            <p className="navbar-logo__text text-green">Save Money</p>
          </Link>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                ABOUT
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                HOW IT WORKS
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="login-box">
            <Link to="/register" className="login-box__register text-green">
              Register Now
            </Link>
            <Link to="/login" className="btn btn-login bkg-green">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
