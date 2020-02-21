import React, { useState } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

// imported data
import { managementData } from "../data/data";
import ManagementCard from "./ManagementCard";

export default function About() {
  const [management, setManagment] = useState(managementData);

  return (
    <div className="team-background">
      <section className="sub-header">
        <h4>MEET THE TEAM</h4>
        <p>Together Everyone Achieves More</p>
      </section>
      <section className="team-container">
        <div className="card-wrapper">
          {management.map(i => {
            return <ManagementCard key={i.id} manager={i} />;
          })}
        </div>
      </section>
    </div>
  );
}
