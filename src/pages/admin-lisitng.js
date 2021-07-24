import React from "react";
import {
  HeaderContainer,
  DashboardContainer,
  AdminAllLisitngContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";

const AdminListingList = () => {
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="All Listing">
            <AdminAllLisitngContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AdminListingList;
