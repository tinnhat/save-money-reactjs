import React from "react";
import PropTypes from "prop-types";
import "./sendMoney.scss";
SendMoneyForm.propTypes = {};

function SendMoneyForm(props) {
  return (
    <div className="banner-send">
      <div className="container">
        <div className="send-contact">
          <h1 className="send-contact__title">
            <span>
              Look after the pennies
              <span> and the pounds </span>
              <span> will look after </span>
              themselves
            </span>
          </h1>
          <div className="send-box">
            <p className="send-box__title">How much do you want ?</p>
            <form action="">
              <div>
                <label for="name"> Name </label>
                <input type="text" id="name" className="input-sendMoney" />
              </div>
              <div>
                <label for="money"> Amount </label>
                <input type="text" id="money" className="input-sendMoney" />
              </div>
              <p className="dropdown-title">How long for:</p>
              <div className="dropdown" id="lightdropdown">
                <div className="dropdown-select">
                  <span className="dropdown-selected">Option Save</span>
                  <i className="fa fa-angle-down dropdown-caret"></i>
                </div>
                <ul className="dropdown-list">
                  <li className="dropdown-item" data-value="1 Month">
                    1 Month
                  </li>
                  <li className="dropdown-item" data-value="3 Month">
                    3 Months
                  </li>
                  <li className="dropdown-item" data-value="6 Month">
                    6 Months
                  </li>
                  <li className="dropdown-item" data-value="12 Month">
                    12 Months
                  </li>
                  <li className="dropdown-item" data-value="Unlimited deposit">
                    Unlimited deposit
                  </li>
                </ul>
              </div>
              <input
                type="submit"
                name=""
                id=""
                className="btn-send"
                value="Confirm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoneyForm;
