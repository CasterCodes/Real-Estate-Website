import React from "react";
import { Container } from "./styles/password";

const PasswordChange = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default PasswordChange;
