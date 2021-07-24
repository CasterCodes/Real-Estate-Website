import styled from "styled-components/macro";

import { FormGroup } from "../../form/styles/form";

export const Container = styled.div`
  padding: 40px;
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  border-radius: 4px;
`;

export const Title = styled.h2``;

export const Button = styled.button``;

export const Avatar = styled.div`
  ${Title} {
    margin: 20px 0px;
    font-size: 1rem;
  }

  ${Button} {
    padding: 24px 16px;
    margin-left: 35px;
    color: var(--bs-blue);
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Image = styled.img``;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;

  ${Image} {
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }
`;

export const Bio = styled.div`
  margin-top: 45px;
`;

export const BioTop = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  ${FormGroup} {
    width: 48%;
  }
`;

export const BioBottom = styled.div``;

export const Social = styled.div``;

export const SocialHeader = styled.div`
  margin: 20px 0px;
  ${Title} {
    font-size: 1rem;
  }
`;

export const SocialContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  ${FormGroup} {
    width: 48%;
  }
`;
