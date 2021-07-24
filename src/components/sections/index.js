import React from "react";
import {
  Container,
  Header,
  Title,
  Footer,
  Button,
  Content,
  InnerContainer,
  SubTitle,
  Center,
  Text,
  Flex,
  FlexItem,
  Shadow,
} from "./styles/sections";

const Section = ({ children, bgColor, ...restProps }) => {
  return (
    <Container {...restProps} bgColor={bgColor}>
      {children}
    </Container>
  );
};
Section.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
Section.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Section.SubTitle = ({ children, size, ...restProps }) => {
  return (
    <SubTitle {...restProps} size={size}>
      {children}
    </SubTitle>
  );
};
Section.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Section.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Section.Center = ({ children, ...restProps }) => {
  return <Center {...restProps}>{children}</Center>;
};
Section.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};
Section.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Section.InnerContainer = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Section.Flex = ({ children, ...restProps }) => {
  return <Flex {...restProps}>{children}</Flex>;
};
Section.FlexItem = ({ children, bg, relative, flexStart, ...restProps }) => {
  return (
    <FlexItem bg={bg} relative={relative} flexStart={flexStart} {...restProps}>
      {children}
    </FlexItem>
  );
};
Section.Shadow = ({ children, bg, relative, flexStart, ...restProps }) => {
  return <Shadow {...restProps}>{children}</Shadow>;
};

export default Section;
