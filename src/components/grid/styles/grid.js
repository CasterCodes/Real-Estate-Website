import styled from "styled-components/macro";

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const Row = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
`;
