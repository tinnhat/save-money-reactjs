import React from "react";
import PropTypes from "prop-types";
import "./register.scss";
import registerImg from "../../../assets/img/group-card.png";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import DatePickerCustom from "../../../components/datePicker";
import RadioGroupCustom from "../../../components/radioGroup";
import InputPasswordField from "../../../components/passwordInput";
import TextareaCustom from "../../../components/textarea";
import SelectCustom from "../../../components/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Moment from "react-moment";
import "moment-timezone";
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  let time = new Date();
  const schema = yup
    .object({
      userName: yup.string().required("Please enter email"),
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup
        .string()
        .matches(/^.*(?=.{6,})/, "Password must contain at least 6 symbols")
        .required("Please enter your password"),
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      fullName: yup.string().required("Please enter fullname"),
      gender: yup.string().required(),
      dateOfBirth: yup.date(),
      phoneNumber: yup.string().required("only number"),
      idCard: yup.string().required("only number"),
      cardNumber: yup.string().required("only number"),
      dateForCard: yup.date(),
      issuedBy: yup.string().required("Please enter issued"),
      passport: yup.string().required("only number"),
      nationality: yup.string().required(),
      address: yup.string().required("Please enter address"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      rePassword: "",
      fullName: "",
      gender: "",
      dateOfBirth: time,
      phoneNumber: "",
      idCard: "",
      cardNumber: "",
      dateForCard: time,
      issuedBy: "",
      passport: "",
      nationality: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    console.log("register: ", value);
  };
  return (
    <div className="bkg-purple">
      <div className="container">
        <div className="login-content">
          <div className="login-content__img">
            <img src={registerImg} alt="" className="register-img" />
            <h1 className="login-content__title">
              <span>Save money, </span>don???t you want to live A
              <span>more enjoyable life?</span>
            </h1>
          </div>
          <div className="register-box">
            <form action="#" onSubmit={form.handleSubmit(handleSubmit)}>
              <p className="login__title">Register</p>
              <p className="login__desc text-center">
                Register and start managing your bank!
              </p>
              <div className="flex-box">
                <InputField
                  name="userName"
                  label="Username"
                  form={form}
                  required
                />
                <InputField name="email" label="Email" form={form} required />
              </div>
              <div className="flex-box">
                <InputPasswordField
                  name="password"
                  label="Password"
                  form={form}
                  required
                />
                <InputPasswordField
                  name="rePassword"
                  label="Re-password"
                  form={form}
                  required
                />
              </div>
              <div className="flex-box">
                <InputField
                  name="fullName"
                  label="Full Name"
                  form={form}
                  required
                />
                <div className="gender-box">
                  <p>Gender:</p>
                  <RadioGroupCustom name="gender" form={form} />
                </div>
              </div>

              <div className="flex-box">
                <div className="date-box">
                  <p className="date-box-text">Date of birth:</p>
                  <DatePickerCustom name="dateOfBirth" form={form} />
                </div>
                <InputField
                  name="phoneNumber"
                  label="Phone Number"
                  form={form}
                  required
                />
              </div>

              <div className="flex-box">
                <InputField
                  name="idCard"
                  label="ID Card"
                  form={form}
                  required
                />
                <InputField
                  name="cardNumber"
                  label="Card Number"
                  form={form}
                  required
                />
              </div>
              <div className="flex-box">
                <InputField
                  name="issuedBy"
                  label="Issued by"
                  form={form}
                  required
                />
                <div className="date-box">
                  <p className="date-box-text ml-20">Date for card:</p>
                  <DatePickerCustom name="dateForCard" form={form} />
                </div>
              </div>
              <div className="flex-box">
                <InputField
                  name="passport"
                  label="Passport"
                  form={form}
                  required
                />
                <div className="flex-box">
                  <p className="nationlity">nationality</p>
                  {/* <!-- select --> */}
                  <SelectCustom name="nationality" form={form} />
                </div>
              </div>
              <TextareaCustom
                name="address"
                label="Address"
                form={form}
                required
              />
              <button
                type="submit"
                className="btn btn-sb-login mt-10"
                id="btn-login-submit"
              >
                Register
              </button>
              <p className="register-link">
                Already have account? <a href="./login.html">Login Now</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
