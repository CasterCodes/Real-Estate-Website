import { GET_MESSAGES } from "../constants/messageConstants";
import { messages } from "../../dev-data/messages";

export const getMessages = () => (dispatch) => {
  dispatch({ type: GET_MESSAGES, payload: messages });
};

export const deleteMessage = (id) => (dispatch) => {
  const filteredMessages = messages.filter((message) => message.id !== id);
  dispatch({ type: GET_MESSAGES, payload: filteredMessages });
};
