import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Controller } from "react-hook-form";

InputPasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputPasswordField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;
  console.log(control);
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <TextField
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
          className="textfield"
          type="password"
          InputLabelProps={{ className: "textfield_label" }}
        />
      )}
    ></Controller>
  );
}

export default InputPasswordField;
