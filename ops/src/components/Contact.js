import React from "react";
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <div>
      <section className="sub-header">
        <h4>NEED MORE INFORMATION?</h4>
        <p>Send us a message!</p>
      </section>
      <section className="team-container">
        <ContactForm />
      </section>
      {/* <UnderConstruction /> */}
    </div>
  );
}
