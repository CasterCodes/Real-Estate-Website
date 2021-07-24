import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: ${({ bgColor }) =>
    bgColor &&
    `
    var(${bgColor})
  `};
  min-height: 80vh;
  padding: 24px 0px;
`;

export const Header = styled.div`
  padding: 24px 0px;
`;

export const Title = styled.h2`
  font-weight: bolder;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 20px 0px;
`;

export const SubTitle = styled.h2`
  text-transform: capitalize;
  font-size: 1.2rem;
  margin: 16px 0px;
  ${({ size }) =>
    size === "1" &&
    `
      font-size: 2rem;
  `}
`;

export const Text = styled.p`
  color: var(--bs-gray);
  font-size: 0.9rem;
  width: 80%;
`;

export const Content = styled.div`
  min-height: 70vh;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  margin: 30px 0px;
  box-sizing: border-box;
  width: 100%;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Button = styled.button`
  box-sizing: border-box;
  padding: 16px 8px;
  border: none;
  color: white;
  position: absolute;
  background-color: var(--bs-blue);
  width: 25%;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 2px;
  text-transform: capitalize;
  cursor: pointer;
  margin: 4px 0px;
  transition: border, background-color, color var(--primary-transition-time);
  &:hover {
    background-color: var(--bs-white);
    color: var(--bs-blue);
    border: 1px solid var(--bs-blue);
  }
`;

export const InnerContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  height: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FlexItem = styled.div`
  height: 100%;

  ${({ width }) =>
    width &&
    ` 
        width:${width};
    `}

  ${({ bg }) =>
    bg === "true" &&
    `  
      padding:16px;
      background-color:var(--bs-fade-info);
      @media only screen and (max-width: 768px) {
        padding:0px;
        margin-top:16px;
        background-color:transparent;
      }
      @media only screen and (max-width: 600px) {
        padding:0px;
        margin-top:16px;
        background-color:transparent;
      }
  `}

  ${({ relative }) =>
    relative &&
    `
      position:relative;
  `}
  @media only screen and (max-width: 768px) {
    width: 90%;
    ${SubTitle} {
      text-align: center;
    }
    ${Text} {
      text-align: center;
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Shadow = styled.div`
  background-color: var(--bs-white);
`;
