import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

export default function ContactForm() {

  return (
    <div className='form-container'>
      <form className='form' name='Contact Info' method='post'>
      <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <textarea
          type="text"
          name="message"
          placeholder="Enter a Message..."
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
}
