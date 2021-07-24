import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Anchor = styled(Link)`
  background-color: ${({ bg }) => bg};
`;

export const Title = styled.h2``;

export const Icon = styled.i``;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  ${Anchor} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
    padding: 65px;
    border-radius: 5px;
    flex-wrap: wrap;
    color: var(--bs-white);
    box-shadow: var(--primary-box-shadow);
    @media only screen and (max-width: 768px) {
      width: 100%;
      &:nth-child(2) {
        margin-top: 20px;
      }
    }
  }

  ${Title} {
    font-size: 3rem;
    font-weight: bold;
  }
  ${Icon} {
    font-size: 3.5rem;
    color: var(--bs-light);
    opacity: 0.7;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Bottom = styled.div`
  margin-top: 45px;
`;

export const Text = styled.p``;

export const AnchorDiv = styled.div``;

export const BottomHeader = styled.div``;

export const BottomContent = styled.div``;
