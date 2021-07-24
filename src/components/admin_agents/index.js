import React from "react";

import { Container, Content } from "./styles/admin_agents";

const AdminAgents = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

AdminAgents.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

export default AdminAgents;
