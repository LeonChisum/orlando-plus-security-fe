import React, { useState } from "react";
import ManagementCard from "./ManagementCard";
import "../About/About.css"

// imported data
import { managementData } from "../../data/data";

export default function About() {
  const [management] = useState(managementData);

  return (
    <div className="team-background">
      <section className="sub-header">
        <h4>MEET THE TEAM</h4>
        <p>Together Everyone Achieves More</p>
      </section>
      <section className="team-container">
        <div className="card-wrapper">
          {management.map(i => {
            return <ManagementCard key={i.id} manager={i} />; //Creating a card for each excutive
          })}
        </div>
      </section>
      <section id="testimonial-section">
        <div>
          <h2>
            A Word From our clients..
          </h2>
        </div>
      </section>
    </div>
  );
}
