import React from "react";

import {
  ChangePasswordContainer,
  DashboardContainer,
  HeaderContainer,
} from "../containers";
import { Section } from "../components";

const Password = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Change Your Password">
            <ChangePasswordContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default Password;
