import styled from "styled-components/macro";

import { Link } from "react-router-dom";

const Button = styled.button``;

const Container = styled.tr`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;
const Data = styled.td``;

const Head = styled.thead`
  ${Data} {
    padding: 24px;
    text-align: left;
    background-color: var(--bs-blue);
    color: var(--bs-white);
  }
`;

const Anchor = styled(Link)`
  background-color: var(--bs-blue);
  padding: 8px 16px;
  color: white;
  font-size: 1rem;
  border-radius: 2px;
  cursor: pointer;
`;
const Body = styled.tbody`
  ${Data} {
    padding: 16px;
  }
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  ${Button} {
    padding: 8px 16px;
    border: none;
    outline: none;
    background-color: var(--bs-blue);
    color: white;
    font-size: 1rem;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export { Container, Head, Body, Row, Data, Button, Anchor };
