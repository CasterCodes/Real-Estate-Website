import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components";
import { ListingItemContainer } from "./index";
import { getFeaturedList } from "../redux/actions/propertiesAction";

const FeaturedListingContainer = () => {
  const dispatch = useDispatch();

  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;

  useEffect(() => {
    dispatch(getFeaturedList());
  }, [dispatch]);

  return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Listing</Section.Title>
        </Section.Header>
        <Section.Content>
          {featuredProperties.map((featured) => (
            <ListingItemContainer key={featured.id} featured={featured} />
          ))}
        </Section.Content>
        <Section.Footer>
          <Section.Button>More Listing</Section.Button>
        </Section.Footer>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedListingContainer;
