import React from "react";
import { Section } from "../components";

import {
  HeaderContainer,
  DashboardContainer,
  ProfileContainer,
} from "../containers";

const UserProfile = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="My Account">
            <ProfileContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default UserProfile;
