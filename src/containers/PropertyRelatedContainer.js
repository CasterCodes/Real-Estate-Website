import React from "react";
import { Property } from "../components";

const PropertyRelatedContainer = ({ featured }) => {
  return (
    <Property.Featured>
      <Property.FeaturedHeader>
        <Property.Title>Featured Properties</Property.Title>
      </Property.FeaturedHeader>
      <Property.FeaturedContent>
        {featured.map((property) => (
          <FeaturedItem key={property.id} property={property} />
        ))}
      </Property.FeaturedContent>
    </Property.Featured>
  );
};

const FeaturedItem = ({ property }) => {
  return (
    <Property.FeaturedItem>
      <Property.ItemLeft>
        <Property.Image source={property.images[1]} />
      </Property.ItemLeft>
      <Property.ItemRight>
        <Property.Subtitle>
          <Property.Anchor to={`/property/${property.id}`}>
            {property.title}
          </Property.Anchor>
        </Property.Subtitle>
        <Property.Text>
          <Property.Icon name="fas fa-map-marker-alt"></Property.Icon>{" "}
          {property.address.address}
        </Property.Text>
        <Property.FeaturedInfo>
          <Property.Text>
            {property.type === "rental" ? "Rent" : "Sale"}
          </Property.Text>
          <Property.Text>Ksh {property.price}</Property.Text>
        </Property.FeaturedInfo>
      </Property.ItemRight>
    </Property.FeaturedItem>
  );
};

export default PropertyRelatedContainer;
