import React from "react";
import {
  Container,
  Top,
  Content,
  Title,
  Header,
  Button,
  Anchor,
  Action,
} from "./styles/admin_listing";

const AdminListing = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

AdminListing.Top = ({ children, ...restProps }) => {
  return <Top {...restProps}>{children}</Top>;
};
AdminListing.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
AdminListing.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
AdminListing.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
AdminListing.Button = ({ children, bg, ...restProps }) => {
  return (
    <Button bg={bg} {...restProps}>
      {children}
    </Button>
  );
};

AdminListing.Anchor = ({ children, to, ...restProps }) => {
  return (
    <Anchor to={to} {...restProps}>
      {children}
    </Anchor>
  );
};

AdminListing.Action = ({ children, ...restProps }) => {
  return <Action {...restProps}>{children}</Action>;
};

export default AdminListing;
