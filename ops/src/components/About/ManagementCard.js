import React from "react";

import orlando from "../../images/orlando.jpg";

export default function ManagementCard(props) {
  return (
    <div className="card-container">
      <div className="card-div">
        <img src={orlando} alt="card background" className="card-img" />
        <div className="management-img">
          <img
          src={props.manager.image}
          alt="management"
          />
        </div>
        <section className="management-info">
          <h1 className="management-name">{props.manager.name}</h1>
          <h2 className="management-title">{props.manager.title}</h2>
        </section>
      </div>
      <div className="overlay-bg">
        <h1 className="management-name">{props.manager.name}</h1>
        <p>{props.manager.bio}</p>
      </div>
    </div>
  );
}
