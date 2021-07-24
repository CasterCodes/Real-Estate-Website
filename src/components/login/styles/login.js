import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background-color: var(--bs-light);
  padding: 45px 0px;
  min-height: 100vh;
`;
export const InnerContainer = styled.div`
  margin: 0px auto;
  width: 85%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;
export const Content = styled.div`
  width: 50%;
  margin: 0px auto;
  min-height: 50vh;
  padding: 45px;
  background-color: var(--bs-white);
  border-radius: 5px;
  box-shadow: var(--primary-box-shadow);
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  margin-bottom: 25px;
`;
export const Title = styled.h2`
  font-size: 3em;
  font-weight: 800;
  color: var(--bs-blue);
`;
export const InnerContent = styled.div``;
export const Anchor = styled(Link)`
  transition: color var(--primary-transition-time);
  &:hover {
    color: var(--bs-blue);
  }
`;
export const Text = styled.p``;
export const Footer = styled.div`
  margin-top: 20px;
  ${Text} {
    margin-top: 10px;
  }
`;
