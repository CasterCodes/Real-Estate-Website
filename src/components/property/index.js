import React from "react";

import {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  Span,
  Icon,
  Text,
  Title,
  Location,
  Content,
  Left,
  Right,
  Gallery,
  ImageContainer,
  Image,
  Info,
  InfoContent,
  InfoHeader,
  InfoItem,
  InfoTitle,
  Contact,
  ContactContainer,
  ContactContent,
  ContactList,
  ContactItem,
  ContactHeader,
  Subtitle,
  AgentImage,
  ListItem,
  Featured,
  FeaturedHeader,
  FeaturedContent,
  FeaturedItem,
  ItemLeft,
  ItemRight,
  Anchor,
  FeaturedInfo,
} from "./styles/property";

const Property = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Property.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};
Property.HeaderLeft = ({ children, ...restProps }) => {
  return <HeaderLeft {...restProps}>{children}</HeaderLeft>;
};
Property.HeaderRight = ({ children, ...restProps }) => {
  return <HeaderRight {...restProps}>{children}</HeaderRight>;
};
Property.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Property.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Property.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>;
};
Property.Icon = ({ children, name, info, ...restProps }) => {
  return (
    <Icon className={name} info={info} {...restProps}>
      {children}
    </Icon>
  );
};
Property.Location = ({ children, ...restProps }) => {
  return <Location {...restProps}>{children}</Location>;
};

Property.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
Property.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};
Property.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};
Property.Gallery = ({ children, ...restProps }) => {
  return <Gallery {...restProps}>{children}</Gallery>;
};
Property.ImageContainer = ({ children, ...restProps }) => {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
Property.Image = ({ children, source, ...restProps }) => {
  return <Image src={`/images/houses/${source}`} {...restProps} />;
};
Property.Info = function PropertyInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Property.InfoHeader = function PropertyInfoHeader({ children, ...restProps }) {
  return <InfoHeader {...restProps}>{children}</InfoHeader>;
};
Property.Icon = function PropertyIcon({ children, name, info, ...restProps }) {
  return (
    <Icon className={name} info={info} {...restProps}>
      {children}
    </Icon>
  );
};
Property.InfoContent = function PropertyInfoContent({
  children,
  block,
  contentShown,
  ...restProps
}) {
  return (
    <InfoContent contentShown={contentShown} block={block} {...restProps}>
      {children}
    </InfoContent>
  );
};
Property.InfoItem = ({ children, ...restProps }) => {
  return <InfoItem {...restProps}>{children}</InfoItem>;
};
Property.InfoTitle = ({ children, ...restProps }) => {
  return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

Property.Contact = ({ children, ...restProps }) => {
  return <Contact {...restProps}>{children}</Contact>;
};

Property.ContactContent = ({ children, ...restProps }) => {
  return <ContactContent {...restProps}>{children}</ContactContent>;
};
Property.ContactContainer = ({ children, ...restProps }) => {
  return <ContactContainer {...restProps}>{children}</ContactContainer>;
};
Property.ContactList = ({ children, ...restProps }) => {
  return <ContactList {...restProps}>{children}</ContactList>;
};
Property.ContactItem = ({ children, ...restProps }) => {
  return <ContactItem {...restProps}>{children}</ContactItem>;
};

Property.ContactHeader = ({ children, ...restProps }) => {
  return <ContactHeader {...restProps}>{children}</ContactHeader>;
};

Property.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Property.AgentImage = ({ children, source, ...restProps }) => {
  return <AgentImage src={`/images/agents/${source}`} {...restProps} />;
};

Property.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};
Property.Featured = ({ children, ...restProps }) => {
  return <Featured {...restProps}>{children}</Featured>;
};
Property.FeaturedHeader = ({ children, ...restProps }) => {
  return <FeaturedHeader {...restProps}>{children}</FeaturedHeader>;
};
Property.FeaturedContent = ({ children, ...restProps }) => {
  return <FeaturedContent {...restProps}>{children}</FeaturedContent>;
};
Property.FeaturedItem = ({ children, ...restProps }) => {
  return <FeaturedItem {...restProps}>{children}</FeaturedItem>;
};
Property.ItemLeft = ({ children, ...restProps }) => {
  return <ItemLeft {...restProps}>{children}</ItemLeft>;
};
Property.ItemRight = ({ children, ...restProps }) => {
  return <ItemRight {...restProps}>{children}</ItemRight>;
};
Property.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Property.FeaturedInfo = ({ children, ...restProps }) => {
  return <FeaturedInfo {...restProps}>{children}</FeaturedInfo>;
};

export default Property;
