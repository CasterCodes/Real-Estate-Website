import React from "react";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  LeftContent,
  LeftHeader,
  Button,
  Icon,
  Title,
  Anchor,
  List,
  ListItem,
  Close,
  SideNav,
  RightContent,
  RightHeader,
  Image,
  Span,
  Text,
  SublinkIcon,
  SubList,
} from "./styles/dashboard";

const Dashboard = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Dashboard.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
Dashboard.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Dashboard.Left = ({ children, show, pro, ...restProps }) => {
  return (
    <Left show={show} pro={pro} {...restProps}>
      {children}
    </Left>
  );
};
Dashboard.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};
Dashboard.LeftContent = ({ children, ...restProps }) => {
  return <LeftContent {...restProps}>{children}</LeftContent>;
};
Dashboard.RightContent = ({ children, ...restProps }) => {
  return <RightContent {...restProps}>{children}</RightContent>;
};
Dashboard.RightHeader = ({ children, ...restProps }) => {
  return <RightHeader {...restProps}>{children}</RightHeader>;
};
Dashboard.LeftHeader = ({ children, ...restProps }) => {
  return <LeftHeader {...restProps}>{children}</LeftHeader>;
};
Dashboard.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Dashboard.Icon = ({ children, name, more, ...restProps }) => {
  return <Icon className={name} more={more} {...restProps}></Icon>;
};
Dashboard.SublinkIcon = function DashboardSublinkIcon({
  children,
  name,

  ...restProps
}) {
  return <SublinkIcon className={name} {...restProps}></SublinkIcon>;
};
Dashboard.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Dashboard.Anchor = ({ children, to, ...restProps }) => {
  return (
    <Anchor to={to} {...restProps}>
      {children}
    </Anchor>
  );
};
Dashboard.List = function DashboardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Dashboard.SubList = function DashboardList({ children, ...restProps }) {
  return <SubList {...restProps}>{children}</SubList>;
};
Dashboard.ListItem = function DashboardListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
Dashboard.Close = ({ children, ...restProps }) => {
  return <Close {...restProps}>{children}</Close>;
};
Dashboard.SideNav = ({ children, ...restProps }) => {
  return <SideNav {...restProps}>{children}</SideNav>;
};
Dashboard.Image = ({ source, ...restProps }) => {
  return <Image src={`/images/agents/${source}`} {...restProps} />;
};

Dashboard.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>;
};

Dashboard.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Dashboard;
