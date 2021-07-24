import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { AgentItemContainer } from "../containers";
import { getFeaturedAgents } from "../redux/actions/agentsAction";

const FeaturedAgentsContainer = () => {
  const dispatch = useDispatch();

  const agents = useSelector((state) => state.featuredAgents);

  const { featured: agentsList } = agents;

  useEffect(() => {
    dispatch(getFeaturedAgents());
  }, [dispatch]);

  return (
    <Section bgColor="--bs-fade-info">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Agents</Section.Title>
        </Section.Header>
        <Section.Content>
          {agentsList.map((agent) => (
            <AgentItemContainer key={agent.id} agent={agent} />
          ))}
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedAgentsContainer;
