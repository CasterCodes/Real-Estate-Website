import React from "react";

import {
  Container,
  Item,
  ItemHeader,
  Text,
  HeaderAction,
  Icon,
  Span,
  ItemBody,
  BodyContainer,
  BodyTitle,
  Title,
  BodyContent,
  BodyFooter,
  FooterTitle,
  Button,
  FooterContent,
  Flex,
} from "./styles/inbox";

const Inbox = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Inbox.Item = function InboxItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Inbox.ItemHeader = function InboxItemHeader({ children, ...restProps }) {
  return <ItemHeader {...restProps}>{children}</ItemHeader>;
};
Inbox.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Inbox.HeaderAction = ({ children, ...restProps }) => {
  return <HeaderAction {...restProps}>{children}</HeaderAction>;
};
Inbox.Icon = ({ children, name, ...restProps }) => {
  return <Icon className={name} {...restProps} />;
};
Inbox.Span = ({ children, special, ...restProps }) => {
  return (
    <Span special={special} {...restProps}>
      {children}
    </Span>
  );
};
Inbox.ItemBody = function InboxItemBody({ children, ...restProps }) {
  return <ItemBody {...restProps}>{children}</ItemBody>;
};
Inbox.BodyContainer = ({ children, ...restProps }) => {
  return <BodyContainer {...restProps}>{children}</BodyContainer>;
};
Inbox.BodyTitle = ({ children, ...restProps }) => {
  return <BodyTitle {...restProps}>{children}</BodyTitle>;
};
Inbox.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Inbox.BodyContent = ({ children, ...restProps }) => {
  return <BodyContent {...restProps}>{children}</BodyContent>;
};
Inbox.BodyFooter = function InboxBodyFooter({ children, ...restProps }) {
  return <BodyFooter {...restProps}>{children}</BodyFooter>;
};
Inbox.FooterTitle = ({ children, ...restProps }) => {
  return <FooterTitle {...restProps}>{children}</FooterTitle>;
};
Inbox.Button = function InboxButton({ children, role, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Inbox.FooterContent = function InboxFooterContent({ children, ...restProps }) {
  return <FooterContent {...restProps}>{children}</FooterContent>;
};

Inbox.Flex = ({ children, ...restProps }) => {
  return <Flex {...restProps}>{children}</Flex>;
};

export default Inbox;
