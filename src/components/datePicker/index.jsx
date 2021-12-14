import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
DatePickerCustom.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

function DatePickerCustom(props) {
  const { form, name } = props;
  const { control } = form;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <ReactDatePicker onChange={onChange} onBlur={onBlur} selected={value} />
      )}
    />
  );
}

export default DatePickerCustom;
