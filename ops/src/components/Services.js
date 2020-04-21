import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

//Data for each service imported here
import { servicesData } from "../data/data";

export default function Services() {
  const [services] = useState(servicesData);

  return (
    <div>
      <section className="sub-header services-header-bg">
        <h4>WHAT WE DO</h4>
        <p>"Planned preperation prevents poor performance"</p>
        <div className="overlay"></div>
      </section>
      <div className="px-3 service-container">
        {services.map(i => {
          return <ServiceCard key={i.id} service={i} />; //Creating a card for each service
        })}
      </div>
    </div>
  );
}
