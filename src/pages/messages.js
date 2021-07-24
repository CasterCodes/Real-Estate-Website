import React from "react";
import { Section } from "../components";

import {
  HeaderContainer,
  DashboardContainer,
  MessagesContainer,
  FooterContainer,
} from "../containers";

const Messages = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Inbox Messages">
            <MessagesContainer />
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Messages;
