import React from "react";
import { Button as StyledButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton whileTap={{ scale: 0.9 }} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
