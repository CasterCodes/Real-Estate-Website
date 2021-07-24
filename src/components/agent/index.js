import React from "react";
import {
  Container,
  Header,
  Text,
  Title,
  Content,
  Left,
  Right,
  Info,
  InfoTop,
  InfoBottom,
  TopLeft,
  TopRight,
  Social,
  Icon,
  Anchor,
  List,
  ListItem,
  Image,
  About,
  Listing,
  ListingHeader,
  Category,
  Button,
  ListingContent,
  ExternalAnchor,
} from "./styles/agent";

const Agent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Agent.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Agent.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Agent.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Agent.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Agent.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};
Agent.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};
Agent.Info = ({ children, ...restProps }) => {
  return <Info {...restProps}>{children}</Info>;
};
Agent.InfoBottom = ({ children, ...restProps }) => {
  return <InfoBottom {...restProps}>{children}</InfoBottom>;
};
Agent.InfoTop = ({ children, ...restProps }) => {
  return <InfoTop {...restProps}>{children}</InfoTop>;
};
Agent.TopLeft = ({ children, ...restProps }) => {
  return <TopLeft {...restProps}>{children}</TopLeft>;
};
Agent.TopRight = ({ children, ...restProps }) => {
  return <TopRight {...restProps}>{children}</TopRight>;
};
Agent.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};
Agent.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};
Agent.Icon = ({ children, name, ...restProps }) => {
  return (
    <Icon {...restProps}>
      <i className={name}></i>
    </Icon>
  );
};
Agent.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Agent.ExternalAnchor = ({ children, to, ...restProps }) => {
  return (
    <ExternalAnchor href={to} target="_blank" {...restProps}>
      {children}
    </ExternalAnchor>
  );
};
Agent.Social = ({ children, ...restProps }) => {
  return <Social {...restProps}>{children}</Social>;
};

Agent.Image = ({ children, source, ...restProps }) => {
  return <Image src={`/images/agents/${source}`} {...restProps} />;
};
Agent.About = ({ children, source, ...restProps }) => {
  return <About {...restProps}>{children}</About>;
};

Agent.Listing = ({ children, source, ...restProps }) => {
  return <Listing {...restProps}>{children}</Listing>;
};
Agent.ListingHeader = ({ children, source, ...restProps }) => {
  return <ListingHeader {...restProps}>{children}</ListingHeader>;
};
Agent.ListingContent = ({ children, source, ...restProps }) => {
  return <ListingContent {...restProps}>{children}</ListingContent>;
};
Agent.Button = function AgentButton({
  children,
  active,
  source,
  ...restProps
}) {
  return (
    <Button active={active} {...restProps}>
      {children}
    </Button>
  );
};
Agent.Category = function AgentCategory({ children, source, ...restProps }) {
  return <Category {...restProps}>{children}</Category>;
};

export default Agent;
