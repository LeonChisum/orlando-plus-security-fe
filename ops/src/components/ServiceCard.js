import React from "react";
import SVGIcon from "../icons/SVG"

export default function ServiceCard(props) {
  const { title, info, icon } = props.service;
  console.log(icon)

  return (
    <div className="card mb-3" style={{width: '100%'}}>
      <div className="card-body d-flex justify-content-between">
        <SVGIcon name={icon} fill='#fa2' width={500} className="mr-2"/>
        <div className="d-flex flex-column">
        <h5 className="card-title service-header">{title}</h5>
        <p className="card-text service-description">{info}</p>
        </div>
      </div>
    </div>
  );
}
