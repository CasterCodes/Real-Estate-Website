import styled from "styled-components/macro";

import { FormGroup, SubmitInput } from "../../form/styles/form";

export const Container = styled.div``;

export const Icon = styled.i``;

export const Button = styled.button``;

export const Span = styled.span`
  ${({ special }) =>
    special === "true" &&
    `
  width: 40px;
  height: 40px;
  background-color: var(--bs-blue);
  color: var(--bs-white);
  border-radius: 50%;
  box-shadow: var(--primary-box-shadow);
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;

export const Title = styled.h2``;

export const Text = styled.p``;

export const Item = styled.div``;

export const ItemHeader = styled.div`
  display: flex;
  background-color: var(--bs-white);
  padding: 10px;
  position: relative;
  align-items: center;
  border: 1px solid var(--bs-light);
  box-shadow: var(--primary-box-shadow);
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  margin: 4px 0px;
  ${Text} {
    font-size: 1.1rem;
    margin-left: 16px;
    &:nth-child(1) {
      font-weight: bold;
      margin-left: 0px;
    }
    &:nth-child(2) {
      @media only screen and (max-width: 600px) {
        margin: 10px 0px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderAction = styled.div`
  position: absolute;
  right: 10px;
  ${Icon} {
    display: inline-block;
    margin-left: 20px;
    color: var(--bs-secondary);
    cursor: pointer;
  }
  ${Span} {
    margin-left: 20px;
    color: var(--bs-secondary);
  }
`;

export const ItemBody = styled.div`
  background-color: var(--bs-white);
  padding: 20px 45px;
  border-radius: 4px;
  margin-top: 8px;
  display: block !important;
  animation: showMessageContent 0.5s;
  @keyframes showMessageContent {
    from {
      margin-top: -20px;
    }
    to {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export const BodyContainer = styled.div``;

export const BodyTitle = styled.div`
  margin-bottom: 20px;
  ${Title} {
    margin-bottom: 20px;
  }

  ${Text} {
    display: flex;
    align-items: center;
    margin: 8px 0px;
    font-weight: bold;
    color: var(--bs-gray-dark);
    ${Span} {
      &:nth-child(3) {
        color: var(--bs-dark);
        font-weight: normal;
        margin-left: 2px;
        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }
`;

export const BodyContent = styled.div`
  margin-bottom: 20px;
  ${Text} {
    color: var(--bs-secondary);
    line-height: 1.5rem;
  }
`;

export const BodyFooter = styled.div``;

export const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  ${Button} {
    ${Icon} {
      margin-right: 9px;
      font-size: 1rem;
    }
    color: var(--bs-dark);
    padding: 16px 24px;
    border: 1px solid var(--bs-light);
    outline: none;
    cursor: pointer;
    background-color: transparent;
    display: inline-block;
    transition: color var(--primary-transition-time);
    border-radius: 4px;
    &:first-child {
      margin-right: 8px;
    }
    &:hover {
      border: 1px solid var(--bs-secondary);
    }
  }
`;

export const FooterContent = styled.div`
  padding: 45px;
  margin-top: 20px;
  border: 2px solid var(--bs-light);
  display: block;
  animation: showReplyForm 1s;
  @keyframes showReplyForm {
    from {
      margin-top: -20px;
      opacity: 0;
    }
    to {
      margin-top: 20px;
      opacity: 1;
    }
  }
`;
export const Flex = styled.div`
  ${FormGroup} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${SubmitInput} {
      width: 45%;
      margin-right: 20px;
    }
    ${Button} {
      width: 45%;
      display: block;
      outline: none;
      border-radius: 2px;
      border: none;
      padding: 12px 8px;
      color: var(--bs-gray-dark);
      cursor: pointer;
      font-size: 1.2rem;
      background-color: var(--bs-white);
      opacity: 1;
      box-shadow: var(--primary-box-shadow);
    }
  }
`;
