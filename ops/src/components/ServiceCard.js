import React from "react";
import SVGIcon from "../icons/SVG"

export default function ServiceCard(props) {
  const { title, info, icon } = props.service;

  return (
    <div className="card mb-3 service-card" >
      <div className="card-body d-flex flex-column align-items-center">
        <SVGIcon name={icon} fill='#d4af37' width={70} className="mr-2"/>
        <br />
        <div className="d-flex flex-column align-items-center">
        <h5 className="card-title service-header">{title}</h5>
        <p className="card-text service-description">{info}</p>
        </div>
      </div>
    </div>
  );
}
