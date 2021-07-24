import React, { useState } from "react";

import { Table, AdminListing, Form } from "../components";

const PropertyHead = () => {
  return (
    <Table.Head>
      <Table.Row>
        <Table.Data>Name</Table.Data>
        <Table.Data>Price (Ksh)</Table.Data>
        <Table.Data>Category</Table.Data>
        <Table.Data>Listed In</Table.Data>
        <Table.Data>County</Table.Data>
        <Table.Data>Town</Table.Data>
        <Table.Data>Action</Table.Data>
      </Table.Row>
    </Table.Head>
  );
};
const PropertyData = ({ property, setSelectId }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = (id) => {
    setSelected((prevState) => !prevState);
    setSelectId(id);
  };

  return (
    <Table.Row>
      <Table.Data>{property.title}</Table.Data>
      <Table.Data>{property.price}</Table.Data>
      <Table.Data>{property.category}</Table.Data>
      <Table.Data>{property.listedIn}</Table.Data>
      <Table.Data>{property.address.county}</Table.Data>
      <Table.Data>{property.address.city}</Table.Data>
      <Table.Data>
        <Table.Button onClick={() => handleSelect(property.id)}>
          {selected ? "Selected" : "Select"}
        </Table.Button>
      </Table.Data>
    </Table.Row>
  );
};

const AdminListingHeader = ({ selectId, handleDeleteAction }) => {
  return (
    <AdminListing.Header>
      <Form>
        <Form.Input type="text" placeholder="Search" />
      </Form>
      <AdminListing.Action>
        <AdminListing.Button
          onClick={() => handleDeleteAction(selectId)}
          bg="var(--bs-danger)">
          Delete
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/add-listing/${selectId}`}>
            Edit
          </AdminListing.Anchor>
        </AdminListing.Button>
        <AdminListing.Button bg="var(--bs-blue)">
          <AdminListing.Anchor to={selectId && `/property/${selectId}`}>
            View
          </AdminListing.Anchor>
        </AdminListing.Button>
      </AdminListing.Action>
    </AdminListing.Header>
  );
};

export { AdminListingHeader, PropertyHead, PropertyData };
