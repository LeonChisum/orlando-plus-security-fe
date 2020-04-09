import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

export default function ContactForm() {

  const clientObj = {
    name: "",
    email: "",
    message: ""
  }
  const [client, setClient] = useState(clientObj);

  const handleChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setClient(clientObj);
  };
  return (
    <div className='form-container'>
      <form className='form' name='Contact Info' action='POST' netlify>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={client.name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={client.email}
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          name="message"
          placeholder="Enter a Message..."
          value={client.message}
          onChange={handleChange}
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
}
