import React from "react";
import PropTypes from "prop-types";
import "./account.scss";
AccountForm.propTypes = {};

function AccountForm(props) {
  return (
    <div class="container">
      <h1 class="account-title">Account Infomation</h1>
      <div class="account">
        <div class="account-left">
          <form action="">
            <label for="">Full Name</label>
            <input type="text" class="account-input" value="Nguyen Nhat Tin" />
            <br />
            <label for="">Gender</label>
            <input type="text" class="account-input" value="Male" />
            <label for="">Date of birth</label>
            <input type="text" class="account-input" value="1/1/2011" />
            <br />
            <label for="">Email</label>
            <input
              type="text"
              class="account-input"
              value="tinnhat0412@gmail.com"
            />
            <label for="">Phone</label>
            <input type="text" class="account-input" value="0834667431" />
            <br />
            <label for="">Address</label>
            <input
              type="text"
              class="account-input"
              value="123 Vo Van Ngan,Thu Duc,Ho Chi Minh"
            />
            <br />
            <label for="">Card Number</label>
            <input
              type="text"
              class="account-input"
              value="3456789032123"
              readonly=""
            />
            <br />
            <label for="">Issued by</label>
            <input
              type="text"
              class="account-input"
              value="VP Bank"
              readonly=""
            />
            <br />
            <label for="">Date for card</label>
            <input
              type="text"
              class="account-input"
              value="1/1/2021"
              readonly=""
            />
          </form>
        </div>
        <div class="account-right">
          <form action="">
            <label for="">Passport</label>
            <input type="text" class="account-input" value="Viet Nam" />
            <br />
            <label for="">Nationally</label>
            <input type="text" class="account-input" value="Viet Nam" />
            <br />
            <label for="">ID Card</label>
            <input type="text" class="account-input" value="1234637799063" />
            <br />
            <label for="">Banking Number</label>
            <input type="text" class="account-input" value="00000075789043" />
            <br />
            <label for="">Balanced</label>
            <input
              type="text"
              class="account-input"
              value="80.000.000 VNĐ"
              readonly=""
            />
            <br />
            <label for="">Password</label>
            <input
              type="password"
              class="account-input"
              value="tinnhat"
              readonly=""
            />
            <span class="pass-change">Change password</span>
            <br />
            <div class="changepass-box hide">
              <label for="">New password</label>
              <input type="password" class="account-input" />
              <br />
              <label for="">Retype</label>
              <input type="password" class="account-input" />
            </div>
          </form>
          <div class="account-box-submit">
            <button class="btn-change">Save Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountForm;
