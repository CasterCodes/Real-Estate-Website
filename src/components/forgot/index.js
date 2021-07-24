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
} from "./styles/forgot";

const Forgot = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Forgot.Container = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Forgot.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Forgot.InnerContent = ({ children, ...restProps }) => {
  return <InnerContent {...restProps}>{children}</InnerContent>;
};
Forgot.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Forgot.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Forgot.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Forgot.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Forgot.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};

export default Forgot;
