import {
  GET_AGENTS,
  GET_FEATURED_AGENTS,
  GET_AGENT,
} from "../constants/agentsConstants";

import agents from "../../dev-data/agents";

export const getFeaturedAgents = () => (dispatch) => {
  const featuredAgents = agents
    .filter((agent) => agent.featured === true)
    .slice(0, 3);
  dispatch({ type: GET_FEATURED_AGENTS, payload: featuredAgents });
};

export const getAgentList = () => (dispatch) => {
  dispatch({ type: GET_AGENTS, payload: agents });
};

export const getAgent = (id) => (dispatch) => {
  const singleAgent = agents.find((agent) => agent.id === +id);

  dispatch({ type: GET_AGENT, payload: singleAgent });
};
