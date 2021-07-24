import React from "react";

import { Wrapper, Header, Title, Content } from "./styles/formWrapper";

const FormWrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

FormWrapper.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
FormWrapper.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

FormWrapper.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

export default FormWrapper;
