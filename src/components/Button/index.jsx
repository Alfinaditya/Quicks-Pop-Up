import React from "react";
import { Button as StyledButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
