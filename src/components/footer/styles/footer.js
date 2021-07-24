import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #1e224a;
  color: var(--bs-white);
`;
export const InnerContainer = styled.div`
  width: 85%;
  margin: 0px auto;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 0px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  width: 25%;
  padding-right: 24px;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Title = styled.h2`
  color: var(--bs-white);
  font-weight: bold;
  font-size: 2rem;
  padding: 24px 0px;
`;
export const Subtitle = styled.h2`
  color: var(--bs-white);
  font-weight: bold;
  font-size: 1rem;
  padding: 24px 0px;
  ${({ min }) =>
    min === "true" &&
    `
  color: white;
  font-size: 1rem;
  padding:0px;
  `}
`;
export const Text = styled.p`
  ${({ blur }) =>
    blur &&
    `
      color: var(--bs-gray);
`}
  margin: 8px 0px;
`;
export const List = styled.ul``;
export const ListItem = styled.li`
  padding: 4px 0px;
  display: flex;
  align-items: center;
`;
export const Anchor = styled(Link)`
  ${({ app }) =>
    app === "true" &&
    `
    display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
  border: 1px solid var(--bs-blue);
  padding: 24px 16px;
  border-radius: 2px;
`}
  color: var(--bs-light);
  font-size: 0.9rem;
  transition: color var(--primary-transition-time);
  &:hover {
    color: var(--bs-blue);
  }
`;

export const Icon = styled.i`
  margin-right: 8px;
  ${({ app }) =>
    app &&
    `
  font-size: 3.5rem;
  color: var(--bs-blue);
  `}
  ${({ social }) =>
    social === "true" &&
    `
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: var(--bs-blue);
  border-radius: 50%;
  `}
`;
export const Bottom = styled.div`
  background-color: var(--bs-blue);
  padding: 16px 0px;
`;

export const Google = styled.div`
  margin-left: 20px;
`;
export const Apple = styled.div`
  margin-left: 28px;
`;
export const AppDiv = styled.div``;

export const ExternalAnchor = styled.a`
  color: var(--bs-light);
  font-size: 0.9rem;
  transition: color var(--primary-transition-time);
  &:hover {
    color: var(--bs-blue);
  }
`;
