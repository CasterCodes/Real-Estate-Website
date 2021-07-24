import React, { useEffect, useState } from "react";
import { Table, AdminListing } from "../components";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";
import {
  AdminListingHeader,
  PropertyData,
  PropertyHead,
} from "../partials/admin_listing_partial";

const AdminAllListingContainer = () => {
  const [selectId, setSelectId] = useState(null);

  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.propertyList);

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);

  const handleDeleteAction = (id) => console.log(id);
  return (
    <AdminListing>
      <AdminListing.Top>
        <AdminListingHeader
          selectId={selectId}
          handleDeleteAction={handleDeleteAction}
        />
      </AdminListing.Top>
      <AdminListing.Content>
        <Table>
          <PropertyHead />
          <Table.Body>
            {properties.map((property) => (
              <PropertyData property={property} setSelectId={setSelectId} />
            ))}
          </Table.Body>
        </Table>
      </AdminListing.Content>
    </AdminListing>
  );
};

export default AdminAllListingContainer;
