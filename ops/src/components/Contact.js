import React from "react";
import ContactForm from "./ContactForm"
import UnderConstruction from './UnderConstruction'

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
