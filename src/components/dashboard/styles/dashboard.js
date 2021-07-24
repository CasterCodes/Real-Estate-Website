import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Icon = styled.i``;

export const Header = styled.div`
  background-color: var(--bs-blue);
  border-radius: 5px;
  color: var(--bs-white);
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 70px 0px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SublinkIcon = styled.i`
  position: absolute;
  right: 8px;
`;
export const Left = styled.div`
  background-color: var(--bs-white);
  border-radius: 5px;
  padding: 25px;
  width: 25%;
  box-shadow: var(--primary-box-shadow);
  @media only screen and (max-width: 768px) {
    width: 100%;
    ${({ pro }) =>
      pro &&
      `
    width: 70%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    height: 100%;
    overflow-y: scroll;
    margin-left: -2000px;
    overflow-x: hidden;
    animation: dashboardHide 2s;
    @keyframes dashboardHide {
      from {
        margin-left: 0px;
      }
      to {
        margin-left: -2000px;
      }
    }
    `}

    ${({ show }) =>
      show &&
      `
    width: 80%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    height: 100%;
    overflow-y: scroll;
    margin-left: 0px;
    overflow-x: hidden;
    animation: dashboardShow 1s;
    @keyframes dashboardShow {
      from {
        margin-left: -2000px;
      }
      to {
        margin-left: 0px;
      }
    }
    `}
  }
`;

export const Right = styled.div`
  width: 72%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2``;
export const Text = styled.p``;
export const Span = styled.span``;

export const Anchor = styled(Link)``;

export const Button = styled.div``;

export const SideNav = styled.div`
  ${Button} {
    border: none;
    padding: 8px 16px;
    background-color: var(--bs-white);
    border-radius: 4px;
    display: none;
    ${Icon} {
      font-size: 1rem;
      color: var(--bs-secondary);
    }
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
`;
export const Image = styled.img``;

export const Close = styled.div`
  margin: 20px 0px;
  border-bottom: 2px solid var(--bs-light);
  padding: 20px;
  position: relative;
  display: none;
  ${Icon} {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 1.5rem;
    color: var(--bs-secondary);
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  ${Image} {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    margin: 0px auto;
  }
  ${Text} {
    font-size: 1.5rem;
    margin: 20px 0px;
    ${Span} {
      font-weight: bold;
    }
  }
`;

export const LeftContent = styled.div``;

export const List = styled.ul``;
export const SubList = styled.ul``;

export const RightHeader = styled.div`
  margin-bottom: 25px;
`;

export const RightContent = styled.div``;

export const ListItem = styled.li`
  position: relative;
  ${SubList} {
    display: block;
    margin-left: 30px;
  }
  margin: 7px 0px;
  ${Anchor} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 10px;
    border-bottom: 1.5px solid var(--bs-light);
    font-weight: bold;
    position: relative;
    color: var(--bs-dark);
    transition: background-color, color var(--primary-transition-time);
    &:hover {
      background-color: var(--bs-blue);
      color: white;
    }
    ${Icon} {
      display: inline-block;
      margin-right: 20px;
    }
  }
`;
