import styled from "styled-components/macro";

import { Link } from "react-router-dom";
import Form from "../../form";

const Container = styled.div`
  padding: 8px;
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  border-radius: 4px;
`;

const Top = styled.div``;

const Content = styled.div`
  overflow-x: auto;
`;

const Title = styled.h2`
  font-size: 1rem;
  width: 25%;
`;
const Anchor = styled(Link)``;

const Header = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 8px;

  ${Form} {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 16px 20px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  background-color: ${({ bg }) => bg};
  ${Anchor} {
    color: white;
  }
`;

const Action = styled.div``;

export { Container, Top, Content, Title, Header, Button, Anchor, Action };
