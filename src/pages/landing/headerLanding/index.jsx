import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import logo from "../../../assets/img/logo.png";
import imgHeader from "../../../assets/img/header-card.png";
import iconHeaderImg from "../../../assets/img/image-528.png";

HeaderLanding.propTypes = {};

function HeaderLanding(props) {
  return (
    <header class="header">
      <div class="container">
        <div class="navbar">
          <a class="navbar-logo" href="./index.html">
            <img src={logo} alt="" class="navbar-logo__img" />
            <p class="navbar-logo__text">Save Money</p>
          </a>
          <ul class="navbar__list">
            <li class="navbar__list-item">
              <a href="#" class="list-item-link">
                ABOUT
              </a>
            </li>
            <li class="navbar__list-item">
              <a href="#" class="list-item-link">
                HOW IT WORKS
              </a>
            </li>
            <li class="navbar__list-item">
              <a href="#" class="list-item-link">
                CONTACT
              </a>
            </li>
          </ul>
          <div class="login-box">
            <a href="./register.html" class="login-box__register">
              Register Now
            </a>
            <a href="./login.html" class="btn btn-login">
              LOGIN
            </a>
          </div>
        </div>
        <div class="header-content">
          <div class="header-banner">
            <div class="box-content">
              <h2 class="box-title">
                Banking <span>more</span> smart
              </h2>
              <p class="box-text">
                <span>Meet the only spend management</span>platform and
                corporate card.
              </p>
              <a href="./sendMoney.html" class="btn">
                Save Now
              </a>
            </div>
            <img src={imgHeader} alt="" class="header-banner-img" />
          </div>
          <div class="header__info">
            <div class="header__info-box-hot">
              <p class="header__info-box-hot--text">
                Hot 🔥 <span>deals for you</span>
              </p>
              <p class="header__info-box-hot--text-des">
                Online shopping for retail sales
                <span>direct to consumers</span>
              </p>
            </div>
            <div class="header-info-item">
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">1.5% cashback</h4>
                <p class="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">30-day terms</h4>
                <p class="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">Save Money</h4>
                <p class="header__info-box-hot--text-des">
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
