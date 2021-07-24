import React from "react";
import { Property, Form } from "../components";
const ContactAgentContainer = ({ property }) => {
  return (
    <Property.Contact>
      <Property.ContactHeader>
        <Property.ContactItem>
          <Property.AgentImage
            source={
              property.agent.image ? property.agent.image : property.agent.photo
            }
          />
        </Property.ContactItem>
        <Property.ContactItem>
          <Property.Subtitle>{property.agent.name}</Property.Subtitle>
          <Property.ContactList>
            <Property.ListItem>
              <Property.Icon name="fas fa-phone-alt"></Property.Icon>
              <Property.Text>+254720843306</Property.Text>
            </Property.ListItem>
          </Property.ContactList>
        </Property.ContactItem>
      </Property.ContactHeader>
      <Property.ContactContent>
        <Property.ContactContainer>
          <Form>
            <Form.FormGroup>
              <Form.Input type="text" placeholder="Name" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Input type="text" placeholder="Email" />
            </Form.FormGroup>

            <Form.FormGroup>
              <Form.Input type="text" placeholder="Phone Number" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.TextArea
                placeholder="I would love to know more about this property"
                name=""
                id=""
                cols="24"
                rows="8"></Form.TextArea>
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.SubmitInput type="submit" value="Send Message" />
            </Form.FormGroup>
          </Form>
        </Property.ContactContainer>
      </Property.ContactContent>
    </Property.Contact>
  );
};

export default ContactAgentContainer;
