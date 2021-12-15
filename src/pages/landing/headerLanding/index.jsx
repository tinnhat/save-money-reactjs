import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import logo from "../../../assets/img/logo.png";
import imgHeader from "../../../assets/img/header-card.png";
import iconHeaderImg from "../../../assets/img/image-528.png";
import { NavLink, Route, Link } from "react-router-dom";
HeaderLanding.propTypes = {};

function HeaderLanding(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="" className="navbar-logo__img" />
            <p className="navbar-logo__text">Save Money</p>
          </Link>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <a href="#" className="list-item-link">
                ABOUT
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="#" className="list-item-link">
                HOW IT WORKS
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="#" className="list-item-link">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="login-box">
            <Link to="/user/register" className="login-box__register">
              Register Now
            </Link>
            <Link to="/login" className="btn btn-login">
              LOGIN
            </Link>
          </div>
        </div>
        <div className="header-content">
          <div className="header-banner">
            <div className="box-content">
              <h2 className="box-title">
                Banking <span>more</span> smart
              </h2>
              <p className="box-text">
                <span>Meet the only spend management</span>platform and
                corporate card.
              </p>
              <a href="./sendMoney.html" className="btn">
                Save Now
              </a>
            </div>
            <img src={imgHeader} alt="" className="header-banner-img" />
          </div>
          <div className="header__info">
            <div className="header__info-box-hot">
              <p className="header__info-box-hot--text">
                Hot 🔥 <span>deals for you</span>
              </p>
              <p className="header__info-box-hot--text-des">
                Online shopping for retail sales
                <span>direct to consumers</span>
              </p>
            </div>
            <div className="header-info-item">
              <div className="box-item">
                <img src={iconHeaderImg} alt="" className="box-item--img" />
                <h4 className="box-item--title">1.5% cashback</h4>
                <p className="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div className="box-item">
                <img src={iconHeaderImg} alt="" className="box-item--img" />
                <h4 className="box-item--title">30-day terms</h4>
                <p className="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div className="box-item">
                <img src={iconHeaderImg} alt="" className="box-item--img" />
                <h4 className="box-item--title">Save Money</h4>
                <p className="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLanding;
