import React from "react";
import { Form, Button } from "semantic-ui-react";

export default function ContactForm() {
  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" error />
          <Form.Input fluid label="Email" placeholder="Email" />
          <Form.TextArea placeholder="Message..." error />
        </Form.Group>
        {/* <Form.TextArea placeholder="Message..." error /> */}
        <Form.Checkbox label="Send me an Email to Confirm" error />
        <Button inverted color='orange'>Submit</Button>
      </Form>
    </div>
  );
}
