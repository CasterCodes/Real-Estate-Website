import React from "react";
import {
  Container,
  ListingAgent,
  ListingAgentImage,
  ListingAgentName,
  Top,
  TopItem,
  TopItemInfo,
  Bottom,
  BottomItem,
  Image,
  Anchor,
  Text,
  Title,
  ImageContainer,
  PriceText,
  LisitngButton,
  TopItemContainer,
} from "./styles/listing";

const Listing = ({ children, width, ...restProps }) => {
  return (
    <Container {...restProps} width={width}>
      {children}
    </Container>
  );
};
Listing.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Listing.Top = ({ children, ...restProps }) => {
  return <Top {...restProps}>{children}</Top>;
};
Listing.Bottom = ({ children, ...restProps }) => {
  return <Bottom {...restProps}>{children}</Bottom>;
};
Listing.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Listing.TopItem = ({ children, ...restProps }) => {
  return <TopItem {...restProps}>{children}</TopItem>;
};
Listing.BottomItem = ({ children, ...restProps }) => {
  return <BottomItem {...restProps}>{children}</BottomItem>;
};
Listing.Anchor = ({ children, ...restProps }) => {
  return <Anchor {...restProps}>{children}</Anchor>;
};
Listing.Image = ({ source, ...restProps }) => {
  return <Image src={`/images/houses/${source}`} {...restProps} />;
};
Listing.ImageContainer = ({ children, ...restProps }) => {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
Listing.Price = ({ children, ...restProps }) => {
  return <PriceText {...restProps}>{children}</PriceText>;
};
Listing.TopItemInfo = ({ children, ...restProps }) => {
  return <TopItemInfo {...restProps}>{children}</TopItemInfo>;
};
Listing.AgentName = ({ children, ...restProps }) => {
  return <ListingAgentName {...restProps}>{children}</ListingAgentName>;
};
Listing.AgentContainer = ({ children, ...restProps }) => {
  return <ListingAgent {...restProps}>{children}</ListingAgent>;
};
Listing.AgentImageContainer = ({ children, ...restProps }) => {
  return <ListingAgentImage {...restProps}>{children}</ListingAgentImage>;
};
Listing.Button = ({ children, ...restProps }) => {
  return <LisitngButton {...restProps}>{children}</LisitngButton>;
};
Listing.TopItemContainer = ({ children, ...restProps }) => {
  return <TopItemContainer {...restProps}>{children}</TopItemContainer>;
};
Listing.Icon = () => {
  return (
    <i
      className="fas fa-map-marker-alt"
      aria-hidden="true"
      style={{ color: "white" }}></i>
  );
};

export default Listing;
