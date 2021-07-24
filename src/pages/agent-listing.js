import React from "react";
import { Section } from "../components";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAgentListing,
  FooterContainer,
} from "../containers";

const AgentListing = () => {
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Listing">
            <AdminAgentListing />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AgentListing;
