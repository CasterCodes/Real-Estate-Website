import React from "react";
import {
  Side,
  Container,
  Cross,
  Icon,
  Header,
  Title,
  Text,
  Links,
  List,
  ListItem,
  Anchor,
} from "./styles/sidenav";

const SideNavigation = ({ children, shown, hidden, ...restProps }) => {
  return (
    <Side shown={shown} hidden={hidden} {...restProps}>
      {children}
    </Side>
  );
};

SideNavigation.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
SideNavigation.Cross = ({ children, ...restProps }) => {
  return <Cross {...restProps}>{children}</Cross>;
};
SideNavigation.Icon = ({ children, name, ...restProps }) => {
  return <Icon className={name} {...restProps} />;
};
SideNavigation.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
SideNavigation.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
SideNavigation.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
SideNavigation.Links = ({ children, ...restProps }) => {
  return <Links {...restProps}>{children}</Links>;
};
SideNavigation.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};
SideNavigation.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};
SideNavigation.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};

export default SideNavigation;
