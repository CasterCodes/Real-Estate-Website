import React from "react";
import {
  Container,
  Header,
  HeaderTitle,
  TitleLink,
  HeaderLinks,
  ListLinks,
  ListItem,
  ListAnchor,
  Button,
  Icon,
} from "./styles/headerwrapper";

const HeaderWrapper = ({ children, bg, fixed, ...restProps }) => {
  return (
    <Header {...restProps} bg={bg} fixed={fixed}>
      {children}
    </Header>
  );
};

HeaderWrapper.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

HeaderWrapper.Title = function HeaderWrapperTitle({
  children,
  bg,
  ...restProps
}) {
  return (
    <HeaderTitle {...restProps} bg={bg}>
      {children}
    </HeaderTitle>
  );
};
HeaderWrapper.Link = function HeaderWrapperLink({
  children,
  bg,
  fixed,
  ...restProps
}) {
  return (
    <TitleLink {...restProps} bg={bg} fixed={fixed}>
      {children}
    </TitleLink>
  );
};
HeaderWrapper.LinksContainer = ({ children, ...restProps }) => {
  return <HeaderLinks {...restProps}>{children}</HeaderLinks>;
};
HeaderWrapper.List = ({ children, side, ...restProps }) => {
  return (
    <ListLinks side={side} {...restProps}>
      {children}
    </ListLinks>
  );
};

HeaderWrapper.Item = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};

HeaderWrapper.Anchor = function HeaderWrapperAnchor({
  children,
  bg,
  fixed,
  ...restProps
}) {
  return (
    <ListAnchor bg={bg} fixed={fixed} {...restProps}>
      {children}
    </ListAnchor>
  );
};

HeaderWrapper.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

HeaderWrapper.Icon = ({ name, ...restProps }) => {
  return <Icon className={name} {...restProps} />;
};

export default HeaderWrapper;
