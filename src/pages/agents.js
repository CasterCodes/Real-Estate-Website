import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderContainer,
  AgentItemContainer,
  FooterContainer,
} from "../containers";
import { getAgentList } from "../redux/actions/agentsAction";
import { Section } from "../components";

const Agents = () => {
  const dispatch = useDispatch();

  const agents = useSelector((state) => state.agentList);

  const { agents: agentsList } = agents;

  useEffect(() => {
    dispatch(getAgentList());
  }, [dispatch]);
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Our Agents</Section.Title>
            <Section.Text>List of our most trusted agents</Section.Text>
          </Section.Header>
          <Section.Content>
            {agentsList.map((agent) => (
              <AgentItemContainer agent={agent} />
            ))}
          </Section.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Agents;
