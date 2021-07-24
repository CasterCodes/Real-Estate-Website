import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;
export const Title = styled.h2`
  ${({ special }) =>
    special === "true" &&
    `
     background-color:var(--bs-blue);
     color:white;
     padding:16px 8px;
     width:auto;
     max-width:24%;
     @media only screen and (max-width: 600px) {
      width:auto;
      max-width:60%;
    }
  `}
`;
export const Text = styled.p``;
export const Container = styled.div``;

export const Header = styled.div`
  padding: 50px 0px;
  ${Title} {
    line-height: 3rem;
    font-weight: bolder;
    font-size: 2rem;
    text-transform: capitalize;
  }
  ${Text} {
    color: var(--bs-blue);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 8px 0px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
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

export const Info = styled.div`
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  padding: 16px;
  border-radius: 2px;
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1.5px solid var(--bs-light);
  padding-bottom: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TopLeft = styled.div`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TopRight = styled.div`
  width: 45%;
  ${Text} {
    margin-top: 4px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const InfoBottom = styled.div`
  ${Title} {
    margin: 16px 0px;
    font-weight: bolder;
    font-size: 1rem;s
  }
  ${Text} {
    color: var(--bs-secondary);
  padding: 0.9rem;
  padding: 2px 0px;
  }
`;

export const List = styled.ul``;
export const Icon = styled.i``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  ${Text} {
    margin-left: 16px;
  }
  ${Icon} {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bs-gray);
    color: white;
    box-shadow: var(--primary-box-shadow);
  }
`;

export const Anchor = styled(Link)``;

export const ExternalAnchor = styled.a``;

export const Social = styled.div`
  background-color: var(--bs-blue);
  padding: 8px;
  width: 80%;
  margin: 20px 0px;
  border-radius: 3px;
  box-shadow: var(--primary-box-shadow);
  ${List} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${ListItem} {
      margin: 0px 0px;
      ${ExternalAnchor} {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        transition: background-color var(--primary-transition-time);
        box-shadow: var(--primary-box-shadow);

        &:hover {
          background-color: var(--bs-white);
        }
        ${Icon} {
          background-color: var(--bs-light);
          color: var(--bs-blue);
        }
      }
    }
  }
`;

export const Listing = styled.div`
  margin: 25px 0px;
`;
export const ListingHeader = styled.div`
  ${Title} {
    padding: 20px 0px;
  }
`;
export const Category = styled.div`
  background-color: var(--bs-white);
  border-radius: 2px;
  box-shadow: var(--primary-box-shadow);
  margin-bottom: 20px;
  display: flex;
`;
export const Button = styled.div`
  padding: 20px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 2px;
  background-color: transparent;
  margin-right: 8px;
  ${({ active }) =>
    active &&
    `
  background-color: var(--bs-blue);
  color: white;
  padding: 20px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 2px;

  `}
`;

export const ListingContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const About = styled.div``;
