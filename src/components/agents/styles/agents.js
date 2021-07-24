import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 30%;
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 48%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Top = styled.div``;
export const Bottom = styled.div``;
export const Wrapper = styled.div`
  width: 97%;
  margin: 0px auto;
`;
export const Image = styled.img`
  width: 100%;
  margin-top: 7px;
  border-radius: 2px;
`;
export const Info = styled.div`
  margin: 0px 16px;
  display: flex;
  justify-content: space-between;
  padding: 4px 0px;
`;
export const InfoDiv = styled.div`
  ${({ icon }) =>
    icon &&
    `
   background-color: var(--bs-blue);
   width: 45px;
   height: 45px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   cursor: pointer;
   color: var(--bs-white);
    &:hover {
        background-color: rgba(221, 248, 245, 0.705);
        color: var(--bs-primary);
    }
   `}
`;
export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.2rem;
`;
export const Text = styled.p`
  ${({ count }) =>
    count &&
    `
   color: var(--bs-primary);
   `}
  line-height:1.3rem;
`;
export const Anchor = styled(Link)`
  color: var(--bs-gray-dark);
  transition: color var(--primary-transition-time);
  &:hover {
    color: var(--bs-blue);
  }
`;
export const Description = styled.div`
  width: 95%;
  font-size: 0.9rem;
  color: var(--bs-secondary);
  padding: 10px 0px;
  margin: 0px 16px;
`;
export const CallInfo = styled.div`
  padding: 0px 16px;
  color: var(--bs-secondary);
`;
export const MoreInfo = styled.div`
  margin: 0px 16px;
  padding: 24px 0px;
  ${Anchor} {
    padding: 8px 16px;
    background-color: var(--bs-blue);
    color: var(--bs-white);
    border-radius: 2px;
    &:hover {
      background-color: var(--bs-white);
      color: var(--bs-blue);
      border: 1px solid var(--bs-blue);
    }
  }
`;
export const Span = styled.span`
  color: var(--bs-gray-dark);
  font-weight: bolder;
`;
