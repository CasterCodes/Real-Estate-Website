import { GET_MESSAGES } from "../constants/messageConstants";

export const messagesReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { messages: action.payload };
    default:
      return state;
  }
};
