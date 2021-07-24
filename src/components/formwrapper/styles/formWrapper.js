import styled from "styled-components/macro";

export const Wrapper = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: var(--bs-primary);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px 0px;
`;

export const Title = styled.h2`
  color: var(--bs-white);
  text-align: center;
  font-size: 1.2rem;
`;

export const Content = styled.div`
  position: relative;
  margin-top: 50px;
`;
