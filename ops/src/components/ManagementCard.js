import React from "react";

import orlando from "../images/orlando.jpg";

export default function ManagementCard(props) {
  return (
    <div className="card-container">
      <img src={orlando} alt="card backround" className="card-img" />
      <section className="d-lg-flex justify-content-lg-around">
        <img
          src={props.manager.image}
          alt="management"
          className="align-self-lg-center management-img "
        />
        <section className="management-info">
          <section>
            <h1 className="management-name">{props.manager.name}</h1>
            <h2 className="management-title">{props.manager.title}</h2>
          </section>
          <section className="management-bio">
            <p>{props.manager.bio}</p>
          </section>
        </section>
      </section>
    </div>
  );
}
