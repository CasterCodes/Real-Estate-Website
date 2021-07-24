import React, { useEffect } from "react";
import {
  HeaderContainer,
  DashboardContainer,
  FooterContainer,
} from "../containers";
import { Section, AdminAgents, Table } from "../components";
import { getAgentList } from "../redux/actions/agentsAction";
import { useDispatch, useSelector } from "react-redux";

const AdminAgentsList = () => {
  const dispatch = useDispatch();

  const { agents } = useSelector((state) => state.agentList);

  useEffect(() => {
    dispatch(getAgentList());
  }, [dispatch]);
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="All Agents">
            <AdminAgents>
              <AdminAgents.Content>
                <Table>
                  <Table.Head>
                    <Table.Row>
                      <Table.Data>Name</Table.Data>
                      <Table.Data>Email</Table.Data>
                      <Table.Data>Phone</Table.Data>
                      <Table.Data>County</Table.Data>
                      <Table.Data>Town/state</Table.Data>
                      <Table.Data>Listing Count</Table.Data>
                      <Table.Data>Action</Table.Data>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    {agents.map((agent) => (
                      <Table.Row>
                        <Table.Data>{agent.name}</Table.Data>
                        <Table.Data>{agent.email}</Table.Data>
                        <Table.Data>{agent.phone}</Table.Data>
                        <Table.Data>{agent.county}</Table.Data>
                        <Table.Data>{agent.town}</Table.Data>
                        <Table.Data>{agent.listings.length}</Table.Data>
                        <Table.Data>
                          <Table.Anchor to={`agent/${agent.id}`}>
                            View
                          </Table.Anchor>
                        </Table.Data>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </AdminAgents.Content>
            </AdminAgents>
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default AdminAgentsList;
