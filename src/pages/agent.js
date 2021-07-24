import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgent } from "../redux/actions/agentsAction";
import { Section, Agent } from "../components";
import {
  HeaderContainer,
  ListingItemContainer,
  ContactAgentContainer,
  PropertyRelatedContainer,
  FooterContainer,
} from "../containers";
import { getFeaturedList } from "../redux/actions/propertiesAction";

const Agentt = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { agent } = useSelector((state) => state.agent);

  const featuredList = useSelector((state) => state.featuredProperty);

  const { featured: featuredProperties } = featuredList;

  // create a property agent to pass to ContactAgentContainer

  const contactAgent = { agent };

  const categories = Object.entries(
    agent.listings
      .map((listings) => listings.category)
      .reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
  );
  const [categoryName, setCategoryName] = useState("All");

  const [categoryCount, setCategoryCount] = useState(0);

  const [properties, setProperties] = useState([]);

  console.log(properties);

  useEffect(() => {
    dispatch(getAgent(id));
    setCategoryCount(agent.listings.length);
    setProperties(agent.listings);
    dispatch(getFeaturedList());
  }, [id, dispatch, agent]);
  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Agent Details</Section.Title>
            <Section.Text>{agent.name}</Section.Text>
          </Section.Header>
          <Agent.Content>
            <Agent.Left>
              <Agent.Info>
                <Agent.InfoTop>
                  <Agent.TopLeft>
                    <Agent.Image source={agent.photo} />
                  </Agent.TopLeft>
                  <Agent.TopRight>
                    <Agent.Title>{agent.name}</Agent.Title>
                    <Agent.Text>Sales Agent</Agent.Text>
                    <Agent.List>
                      <Agent.ListItem>
                        <Agent.Icon name="fas fa-phone-alt" />
                        <Agent.Text>{agent.phone}</Agent.Text>
                      </Agent.ListItem>
                      <Agent.ListItem>
                        <Agent.Icon name="fab fa-whatsapp" />
                        <Agent.Text>{agent.phone}</Agent.Text>
                      </Agent.ListItem>
                      <Agent.ListItem>
                        <Agent.Icon name="far fa-envelope" />
                        <Agent.Text>{agent.email}</Agent.Text>
                      </Agent.ListItem>
                    </Agent.List>
                    <Agent.Social>
                      <Agent.List>
                        <Agent.ListItem>
                          {" "}
                          <Agent.ExternalAnchor to={agent.social.facebook}>
                            <Agent.Icon name="fab fa-facebook-f" />
                          </Agent.ExternalAnchor>
                        </Agent.ListItem>
                        <Agent.ListItem>
                          <Agent.ExternalAnchor to={agent.social.twitter}>
                            <Agent.Icon name="fab fa-twitter" />
                          </Agent.ExternalAnchor>
                        </Agent.ListItem>
                        <Agent.ListItem>
                          <Agent.ExternalAnchor to={agent.social.linkedin}>
                            <Agent.Icon name="fab fa-linkedin" />
                          </Agent.ExternalAnchor>
                        </Agent.ListItem>
                        <Agent.ListItem>
                          <Agent.ExternalAnchor to={agent.social.instagram}>
                            <Agent.Icon name="fab fa-instagram" />
                          </Agent.ExternalAnchor>
                        </Agent.ListItem>
                      </Agent.List>
                    </Agent.Social>
                  </Agent.TopRight>
                </Agent.InfoTop>
                <Agent.InfoBottom>
                  <Agent.Title>About Me</Agent.Title>
                  <Agent.About>
                    <Agent.Text>{agent.about}</Agent.Text>
                  </Agent.About>
                </Agent.InfoBottom>
              </Agent.Info>
              <Agent.Listing>
                <Agent.ListingHeader>
                  <Agent.Title>My Listing</Agent.Title>
                  <CategoryBtns
                    categories={categories}
                    count={agent.listings.length}
                    setCategoryName={setCategoryName}
                    properties={properties}
                    agent={agent}
                    setProperties={setProperties}
                    setCategoryCount={setCategoryCount}
                  />
                </Agent.ListingHeader>
                <Agent.Title special="true">{`${categoryName} (${categoryCount})`}</Agent.Title>
                <Agent.ListingContent>
                  {properties.map((featured) => (
                    <ListingItemContainer
                      key={agent.id}
                      featured={featured}
                      width="49%"
                    />
                  ))}
                </Agent.ListingContent>
              </Agent.Listing>
            </Agent.Left>
            <Agent.Right>
              <ContactAgentContainer property={contactAgent} />
              <PropertyRelatedContainer featured={featuredProperties} />
            </Agent.Right>
          </Agent.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

const CategoryBtns = ({
  categories,
  count,
  setCategoryName,
  setCategoryCount,
  properties,
  setProperties,
  agent,
}) => {
  const handleAll = (count) => {
    setCategoryCount(count);
    setCategoryName("All");
    setProperties(agent.listings);
  };

  const handleCategories = (name, count) => {
    const filteredProperties = agent.listings.filter(
      (property) => property.category === name
    );

    setCategoryName(name);

    setCategoryCount(count);

    setProperties(filteredProperties);
  };
  return (
    <Agent.Category>
      <Agent.Button onClick={() => handleAll(count)}>All</Agent.Button>
      {categories.map((category) => (
        <Agent.Button
          key={category[0]}
          onClick={() => handleCategories(category[0], category[1])}>
          {category[0]}
        </Agent.Button>
      ))}
    </Agent.Category>
  );
};

export default Agentt;
