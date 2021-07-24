import React from "react";
import {
  Container,
  InnerContainer,
  Content,
  InnerContent,
  Title,
  Text,
  Anchor,
  Header,
  Footer,
} from "./styles/login";

const Login = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Login.Container = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Login.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Login.InnerContent = ({ children, ...restProps }) => {
  return <InnerContent {...restProps}>{children}</InnerContent>;
};
Login.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Login.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Login.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Login.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Login.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};

export default Login;
