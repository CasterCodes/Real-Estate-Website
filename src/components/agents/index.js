import React from "react";
import {
  Container,
  Wrapper,
  Image,
  Text,
  Title,
  Top,
  Bottom,
  Anchor,
  Description,
  MoreInfo,
  CallInfo,
  Info,
  InfoDiv,
  Span,
} from "./styles/agents";

const Agents = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
Agents.Wrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Agents.Image = ({ children, ...restProps }) => {
  return <Image {...restProps} />;
};
Agents.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Agents.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Agents.Top = ({ children, ...restProps }) => {
  return <Top {...restProps}>{children}</Top>;
};
Agents.Bottom = ({ children, ...restProps }) => {
  return <Bottom {...restProps}>{children}</Bottom>;
};
Agents.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Agents.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>;
};
Agents.MoreInfo = ({ children, ...restProps }) => {
  return <MoreInfo {...restProps}>{children}</MoreInfo>;
};
Agents.CallInfo = ({ children, ...restProps }) => {
  return <CallInfo {...restProps}>{children}</CallInfo>;
};
Agents.Info = ({ children, ...restProps }) => {
  return <Info {...restProps}>{children}</Info>;
};
Agents.InfoDiv = ({ children, ...restProps }) => {
  return <InfoDiv {...restProps}>{children}</InfoDiv>;
};
Agents.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>;
};
Agents.Icon = () => {
  return <i className="far fa-envelope"></i>;
};
export default Agents;
