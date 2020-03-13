import React from "react";

import orlando from "../images/orlando.jpg";

export default function ManagementCard(props) {
  return (
    <div className="card-container">
      <img src={orlando} alt="card backround" className="card-img" />
      <img src={props.manager.image} alt="management" className="management-img" />
      <section>
        <h1 className="management-name">{props.manager.name}</h1>
        <h2 className="management-title">{props.manager.title}</h2>
      </section>
      <section>
        <p>{props.manager.bio}</p>
      </section>
    </div>
  );
}
