import styled from "styled-components/macro";
import { FormGroup } from "../../form/styles/form";

const Container = styled.div`
  padding: 40px;
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  border-radius: 4px;
`;

const Description = styled.div`
  margin-bottom: 45px;
  padding-bottom: 45px;
  border-bottom: 2px solid var(--bs-light);
`;

const DescriptionHeader = styled.div``;

const DescriptionContent = styled.div``;

const DescriptionContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  ${FormGroup} {
    width: 48%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const DescriptionContentBottom = styled.div``;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1rem;
`;

const Location = styled.div`
  margin-bottom: 45px;
  padding-bottom: 45px;
  border-bottom: 2px solid var(--bs-light);
`;

const LocationHeader = styled.div``;

const LocationContent = styled.div``;

const LocationContentTop = styled.div``;

const LocationContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  ${FormGroup} {
    width: 48%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Media = styled.div`
  margin-bottom: 45px;
  padding-bottom: 45px;
  border-bottom: 2px solid var(--bs-light);
`;

const MediaHeader = styled.div``;

const MediaContent = styled.div``;

const Details = styled.div`
  margin-bottom: 45px;
  padding-bottom: 45px;
  border-bottom: 2px solid var(--bs-light);
`;

const DetailsHeader = styled.div``;

const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  ${FormGroup} {
    width: 48%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 14px 7px;
  max-width: 70%;
  min-width: 50%;
  background-color: var(--bs-blue);
  border-radius: 4px;
  color: var(--bs-white);
`;

const Footer = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;

export {
  Container,
  Description,
  DescriptionHeader,
  DescriptionContent,
  DescriptionContentTop,
  DescriptionContentBottom,
  Location,
  LocationHeader,
  LocationContent,
  LocationContentBottom,
  LocationContentTop,
  Media,
  MediaHeader,
  MediaContent,
  Details,
  DetailsHeader,
  DetailsContent,
  Title,
  Button,
  Footer,
};
