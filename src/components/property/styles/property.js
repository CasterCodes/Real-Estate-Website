import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Anchor = styled(Link)``;
export const Container = styled.div``;
export const Span = styled.span``;
export const HeaderLeft = styled.div``;
export const Icon = styled.i`
  ${({ info }) =>
    info &&
    `
  font-size: 0.9rem;
  padding: 4px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content:center;
  color: var(--bs-gray-dark);
  cursor: pointer;
  &:hover {
    background-color: #ebe9e9f8;
  }
  `}
`;
export const Title = styled.h2``;
export const HeaderRight = styled.div`
  ${Title} {
    font-size: 2rem;
    color: var(--bs-blue);
    font-weight: bold;
  }
  ${Span} {
    font-weight: bold;
    opacity: 1;
    display: inline-block;
    margin-right: 8px;
    font-size: 0.9rem;
  }
`;

export const Text = styled.p``;
export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  ${Icon} {
    color: rgba(0, 0, 0, 0.16);
  }
  ${Text} {
    margin-left: 8px;
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Left = styled.div`
  width: 68%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Right = styled.div`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Gallery = styled.div`
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  padding: 6px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  width: 49.5%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 3px;
  opacity: 0.9;
  cursor: pointer;
  box-shadow: var(--primary-box-shadow);
  transition: opacity var(--primary-transition-time);
  &:hover {
    opacity: 1;
  }
`;
export const Info = styled.div`
  margin: 20px 0px;
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  border-radius: 2px;
  position: relative;
`;
export const InfoHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoContent = styled.div`
  display: none;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
  max-width: 90%;
  height: 100%;
  transition: all var(--primary-transition-time);
  @keyframes showContent {
    from {
      margin-top: -20px;
      opacity: 0.9;
    }
    to {
      margin-top: 0px;
      opacity: 1;
    }
  }

  ${({ contentShown }) =>
    contentShown === true &&
    `
      display:flex;
      @media only screen and (max-width: 600px) {
        display:block;
      }
  `}
`;
export const InfoItem = styled.div`
  ${Text} {
    margin: 18px 0px;
  }

  ${Span} {
    font-weight: bold;
    opacity: 1;
    display: inline-block;
    margin-right: 8px;
    font-size: 0.9rem;
  }
`;
export const InfoTitle = styled.h2`
  font-size: 1rem;
  opacity: 0.9;
  font-weight: bold;
`;

export const Contact = styled.div`
  background-color: var(--bs-white);
  border-radius: 2px;
  margin-bottom: 8px;
`;

export const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: var(--bs-blue);
`;

export const ContactItem = styled.div`
  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const ContactList = styled.ul`
  margin-top: 6px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.787);
  ${Text} {
    margin-left: 4px;
  }
`;

export const ContactContent = styled.div`
  padding: 8px;
`;

export const ContactContainer = styled.div``;

export const Subtitle = styled.div`
  color: var(--bs-white);
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const AgentImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Featured = styled.div`
  margin-top: 32px;
`;
export const FeaturedHeader = styled.div`
  margin: 16px 0px;
`;
export const FeaturedContent = styled.div``;
export const FeaturedItem = styled.div`
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  @media only screen and (max-width: 600px) {
    flex-direction: colunm;
  }
`;
export const ItemLeft = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  ${Image} {
    width: 100%;
    border-radius: 4px;
  }
`;
export const FeaturedInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Text} {
    &:nth-child(1) {
      background-color: var(--bs-blue);
      color: var(--bs-white);
      padding: 4px;
      border-radius: 2px;
      font-size: 0.8rem;
    }
    &:nth-child(2) {
      font-weight: bolder;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: colunm;
  }
`;
export const ItemRight = styled.div`
  margin-left: 16px;
  ${Subtitle} {
    font-size: 1.1rem;
    text-transform: capitalize;
    margin-bottom: 8px;
    font-weight: bold;

    ${Anchor} {
      color: var(--bs-gray-dark);
      transition: color var(--primary-transition-time);
      &:hover {
        color: var(--bs-blue);
      }
    }
  }

  ${Text} {
    font-size: 0.8rem;
    margin-bottom: 8px;
    color: var(--bs-secondary);
  }
`;
