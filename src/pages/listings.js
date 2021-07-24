import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  ListingItemContainer,
  AdvancedSearchContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";
import { getPropertyList } from "../redux/actions/propertiesAction";

const Listing = () => {
  const dispatch = useDispatch();

  const listProperties = useSelector((state) => state.propertyList);

  const { properties } = listProperties;

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Flex>
            <Section.FlexItem width="30%" relative flexStart>
              <Section.Shadow>
                <AdvancedSearchContainer />
              </Section.Shadow>
            </Section.FlexItem>
            <Section.FlexItem width="65%">
              <Section.Title>Our Property List</Section.Title>
              <Section.Content>
                {properties.map((featured) => (
                  <ListingItemContainer
                    key={featured.id}
                    featured={featured}
                    width="49%"
                  />
                ))}
              </Section.Content>
              <Section.Footer>
                <Section.Button>More Listing</Section.Button>
              </Section.Footer>
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;
