import React from "react";

import { Password, Form } from "../components";

const ChangePasswordContainer = () => {
  return (
    <Password>
      <Form>
        <Form.FormGroup>
          <Form.Label>Old Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>New Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.SubmitInput value="Change Password" />
        </Form.FormGroup>
      </Form>
    </Password>
  );
};

export default ChangePasswordContainer;
