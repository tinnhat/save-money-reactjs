import React from "react";
import PropTypes from "prop-types";
import "./login.scss";
import card from "../../../assets/img/card1.png";
LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <div className="bkg-purple">
      <div className="container">
        <div className="login-content">
          <div className="login-content__img">
            <img src={card} alt="" className="login-img" />
            <h1 className="login-content__title">
              <span>It’s not about </span>how much money you make,
              <span>it’s how you much you</span>
              save it!
            </h1>
          </div>

          <form action="#">
            <p className="login__title">Sign In</p>
            <p className="login__desc">Sign in and start managing your bank!</p>
            <div className="login-form">
              <div className="info-input-box">
                <input
                  type="text"
                  placeholder="Enter email"
                  style={{ color: "#fff" }}
                  name="username"
                  className="input-box"
                  id="username"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  style={{ color: "#fff" }}
                  name="password"
                  className="input-box"
                  id="password"
                />
              </div>
              <div className="remember-box">
                <div className="checkbox">
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-2"
                    type="checkbox"
                  />
                  <label for="styled-checkbox-2">Remember me</label>
                </div>
                <a href="#" className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-sb-login" id="btn-login-submit">
                Login
              </button>
              <p className="sign-up-link">
                Don't have an account? <a href="./register.html">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
