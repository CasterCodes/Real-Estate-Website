import {
  GET_AGENTS,
  GET_FEATURED_AGENTS,
  GET_AGENT,
} from "../constants/agentsConstants";

export const featuredAgentsReducer = (state = { featured: [] }, action) => {
  switch (action.type) {
    case GET_FEATURED_AGENTS:
      return { featured: action.payload };
    default:
      return state;
  }
};
export const agentListReducer = (state = { agents: [] }, action) => {
  switch (action.type) {
    case GET_AGENTS:
      return { agents: action.payload };
    default:
      return state;
  }
};

export const agentReducer = (
  state = { agent: { social: {}, listings: [] } },
  action
) => {
  switch (action.type) {
    case GET_AGENT:
      return { ...state, agent: action.payload };
    default:
      return state;
  }
};
