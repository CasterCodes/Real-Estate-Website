import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Header = styled.div`
  width: 100%;
  z-index: 99;
  position: sticky;
  ${({ bg }) =>
    bg !== "true" &&
    `
  background-color: var(--bs-white);
  `}
  ${({ fixed }) =>
    fixed &&
    `
  background-color: var(--bs-white);
  position: fixed;
  min-height: 80px;
  top: 0px;
  left: 0px;
  box-shadow: var(--primary-box-shadow);
  animation: header 0.5s;
  `}
  @keyframes header {
    from {
      margin-top: -10px;
      opacity: 0.9;
    }
    to {
      margin-top: 0px;
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    min-height: 80px;
    display: flex;
    align-items: center;
  }
`;
export const Container = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;
export const Icon = styled.i``;

export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: var(--bs-light);
  outline: none;
  ${Icon} {
    font-size: 1.2rem;
    color: var(--bs-secondary);
  }
  @media only screen and (max-width: 768px) {
    margin-right: -10px;
  }
  @media only screen and (max-width: 600px) {
    margin-right: -10px;
  }
`;

export const HeaderTitle = styled.div``;

export const TitleLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--bs-gray-dark);
  ${({ bg, fixed }) => {
    if (bg === "true" && fixed) {
      return `color: var(--bs-gray-dark)`;
    } else if (bg === "true") {
      return `
        color: var(--bs-white);
      `;
    }
  }}
`;
export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: ${({ links }) => (links ? "flex" : "block")};
  align-items: center;
  ${({ side }) =>
    side === "side" &&
    `
    display: none;
    `}
  @media only screen and (max-width: 600px) {
    display: none;
    ${({ side }) =>
      side === "side" &&
      `
    display: block;
    `}
  }
`;
export const ListItem = styled.li`
  padding: 20px 16px;
`;
export const ListAnchor = styled(Link)`
  padding: 12px 16px;
  border-radius: 2px;
  display: inline-block;
  color: var(--bs-white);
  font-size: 1rem;
  text-transform: capitalize;
  transition: background-color var(--primary-transition-time);
  &:hover {
    background-color: var(--bs-blue);
    color: var(--bs-white);
  }
  ${({ bg }) =>
    bg !== "true" &&
    `
    color: var(--bs-gray-dark);
    padding: 12px 16px;
`}
  ${({ fixed, special }) => {
    if (fixed) {
      return ` color: var(--bs-gray-dark);`;
    }

    if (fixed || special === "true") {
      return `color: var(--bs-white);`;
    }
  }}
  ${({ special }) =>
    special === "true" &&
    `
      background-color: var(--bs-blue);
      color: var(--bs-white);
      transition: background-color var(--primary-transition-time);
  `}
`;
