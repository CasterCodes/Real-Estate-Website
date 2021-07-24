import React from "react";

import {
  Container,
  Avatar,
  AvatarContent,
  Title,
  Bio,
  BioBottom,
  BioTop,
  Image,
  Social,
  SocialContent,
  Button,
  SocialHeader,
} from "./styles/profile";

const Profile = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Profile.Avatar = ({ children, ...restProps }) => {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Profile.AvatarContent = ({ children, ...restProps }) => {
  return <AvatarContent {...restProps}>{children}</AvatarContent>;
};
Profile.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Profile.Bio = ({ children, ...restProps }) => {
  return <Bio {...restProps}>{children}</Bio>;
};
Profile.BioTop = ({ children, ...restProps }) => {
  return <BioTop {...restProps}>{children}</BioTop>;
};
Profile.BioBottom = ({ children, ...restProps }) => {
  return <BioBottom {...restProps}>{children}</BioBottom>;
};
Profile.Image = ({ source, ...restProps }) => {
  return <Image src={`/images/agents/${source}`} {...restProps} />;
};
Profile.Social = ({ children, ...restProps }) => {
  return <Social {...restProps}>{children}</Social>;
};
Profile.SocialHeader = ({ children, ...restProps }) => {
  return <SocialHeader {...restProps}>{children}</SocialHeader>;
};
Profile.SocialContent = ({ children, ...restProps }) => {
  return <SocialContent {...restProps}>{children}</SocialContent>;
};
Profile.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default Profile;
