import React from "react";

export default function ContactForm() {

  return (
    <div className='form-container'>
      <form className='form' name='Contact Info' method='post'>
      <input type="hidden" name="form-name" value="contact" />
      <label> Name *
        <input
          type="text"
          name="name"
        ></input>
        </label>
      <label>Email *
        <input
          type="email"
          name="email"
        ></input>
        </label>
      <label> Enter a Message
        <textarea
          type="text"
          name="message"
        ></textarea>
        </label>
        <button>SEND</button>
      </form>
    </div>
  );
}
