import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "32%")};
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 49%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Top = styled.div``;
export const Bottom = styled.div``;
export const Image = styled.img`
  width: 100%;
  ${({ profile }) =>
    profile === "true" &&
    `
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: -14px;
  `}
`;
export const ImageContainer = styled.div``;
export const TopItem = styled.div`
  position: relative;
`;

export const TopItemContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  height: 100%;
`;
export const TopItemInfo = styled.div`
  position: inherit;
  bottom: 10px;
  display: flex;
  margin-left: 18px;
  align-items: center;
`;
export const BottomItem = styled.div`
  width: 90%;
  margin: 0px auto;
`;
export const PriceText = styled.h3`
  color: var(--bs-blue);
  margin-bottom: 2px;
  padding: 2px 0px;
`;
export const Text = styled.p`
  ${({ location }) =>
    location &&
    `
color: var(--bs-white);
margin-left: 10px;
font-weight: bold;
text-transform: capitalize;
`}
  ${({ description }) =>
    description &&
    `
      padding: 2px 0px;
      color: var(--bs-gray);
      font-size: 0.9rem;
      margin-bottom: 10px;
      line-height:1.5rem;
    `}
`;

export const Anchor = styled(Link)`
  color: var(--bs-gray-dark);
  transition: color var(--primary-transition-time);
`;
export const Title = styled.h2`
  margin-bottom: 2px;
  padding: 2px 0px;
  text-transform: capitalize;

  ${Anchor} {
    color: var(--bs-gray-dark);
    transition: color var(--primary-transition-time);
    &:hover {
      color: var(--bs-blue);
    }
  }
`;

export const ListingAgent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  margin-top: 50px;
  border-top: 1px solid var(--bs-light);
  position: relative;
`;
export const ListingAgentImage = styled.div``;
export const ListingAgentName = styled.h2`
  font-size: 1rem;
  margin-left: 16px;
  &:hover ${Anchor} {
    color: var(--bs-blue);
  }
`;
export const LisitngButton = styled.button`
  background-color: var(--bs-blue);
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 8px 8px;
  cursor: pointer;
  transition: border, background-color, color var(--primary-transition-time);
  position: absolute;

  &:hover {
    background-color: var(--bs-white);
    border: 1px solid var(--bs-blue);
    ${Anchor} {
      color: var(--bs-blue);
    }
  }

  ${Anchor} {
    color: var(--bs-white);
  }
`;
