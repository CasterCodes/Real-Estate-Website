import styled from "styled-components/macro";

import { Link } from "react-router-dom";

const Side = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  background-color: #1e224a;
  color: var(--bs-white);
  z-index: 99;
  overflow: hidden;
  color: var(--bs-light);
  transition: margin-left var(--primary-transition-time);
  padding: 45px 0px;
  width: 0px;
  margin-left: -1000px;
  animation: hideSideNavigation 1s;
  @keyframes hideSideNavigation {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: -1000px;
    }
  }

  ${({ shown }) =>
    shown &&
    `
    animation: showSideNavigation 1s;
    margin-left: 0px;
    width: 70%;
    @keyframes showSideNavigation {
      from {
        margin-left: -1000px;
      }
      to {
       
        margin-left: 0px;
      }
    }
  `}
`;

const Container = styled.div`
  width: 90%;
  margin: 0px auto;
`;

const Cross = styled.div`
  padding: 10px 0px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Icon = styled.i`
  font-size: 1.5rem;
  color: var(--bs-white);
  cursor: pointer;
`;

const Header = styled.div`
  margin-top: 40px;
`;

const Title = styled.h2`
  padding: 4px 0px;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
`;

const Links = styled.div`
  margin-top: 40px;
`;

const List = styled.ul`
  &:nth-child(1) {
    border-top: 1px solid rgba(85, 81, 81, 0.287);
  }
`;

const ListItem = styled.li``;

const Anchor = styled(Link)`
  display: inline-block;
  padding: 8px 8px;
  color: var(--bs-white);
  width: 100%;
  text-transform: capitalize;
  transition: background-color, margin-left var(--primary-transition-time);
  margin-left: -10px;
  border-bottom: 1px solid rgba(85, 81, 81, 0.287);
  width: 100%;
  margin: 4px auto;
  &:hover {
    margin-left: 0px;
  }
`;

export {
  Side,
  Container,
  Cross,
  Icon,
  Header,
  Title,
  Text,
  Links,
  List,
  ListItem,
  Anchor,
};
