import React from "react";
import {
  FormInputLabel,
  FormInputContainer,
  GroupContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
