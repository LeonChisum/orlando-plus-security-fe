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
        <h2>
            Kind Words From our clients..
        </h2>
        <div className="testimonial-bubble">
          <div className="testimonial-quote">
            <blockquote>
                You are so organized, knowledgable and skilled at creating plans which balance the needs of both the facility and the clients. It was always reassuring to see your name listed by clients as their primary contact for event security. You guys make a solid professional team with years of valuable experience...
            <footer>
                <cite>
                    Beth Barrett <br/>
                    Covention Event Security, retired
                </cite>
            </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
