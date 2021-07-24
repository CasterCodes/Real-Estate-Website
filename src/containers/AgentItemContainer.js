import React from "react";
import { Agents } from "../components";

const AgentItemContainer = ({ agent }) => {
  return (
    <Agents>
      <Agents.Top>
        <Agents.Wrapper>
          <Agents.Image src={`/images/agents/${agent.photo}`} alt="image" />
        </Agents.Wrapper>
      </Agents.Top>
      <Agents.Bottom>
        <Agents.Wrapper>
          <Agents.Info>
            <Agents.InfoDiv>
              <Agents.Title>
                <Agents.Anchor to={`agent/${agent.id}`}>
                  {agent.name}
                </Agents.Anchor>
              </Agents.Title>
              <Agents.Text count>
                {agent.listings.length} Properties
              </Agents.Text>
            </Agents.InfoDiv>
            <Agents.InfoDiv icon>
              <Agents.Icon></Agents.Icon>
            </Agents.InfoDiv>
          </Agents.Info>
          <Agents.Description>
            <Agents.Text desc>{agent.about.substring(0, 65)}</Agents.Text>
          </Agents.Description>
          <Agents.CallInfo>
            <Agents.Span>Call : </Agents.Span> {agent.phone}
          </Agents.CallInfo>
          <Agents.MoreInfo>
            <Agents.Anchor to={`agent/${agent.id}`}>View Profile</Agents.Anchor>
          </Agents.MoreInfo>
        </Agents.Wrapper>
      </Agents.Bottom>
    </Agents>
  );
};

export default AgentItemContainer;
