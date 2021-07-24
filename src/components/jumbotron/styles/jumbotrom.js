import styled from "styled-components/macro";

export const Container = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 65%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
  }
`;

export const Right = styled.div`
  background-color: rgba(231, 238, 241, 0.39);
  height: 100%;
  padding: 10px;
  margin: 60px 0px;
  width: 30%;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Title = styled.h2`
  color: var(--bs-white);
  font-size: 3em;
  letter-spacing: 2.5px;
  text-transform: capitalize;
  font-weight: bolder;
  @media only screen and (max-width: 768px) {
    letter-spacing: 2px;
  }
  @media only screen and (max-width: 600px) {
    letter-spacing: 1.8px;
  }
`;

export const Text = styled.p`
  color: var(--bs-white);
  text-align: center;
  margin-top: -10px;
  font-size: 1.2rem;
  width: 100%;
  margin-top: 4px;
`;
