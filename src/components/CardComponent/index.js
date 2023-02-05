import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-container">
      <img className="cover" src={props.image} alt={props.title} />
      <p className="titre">{props.title}</p>
    </div>
  );
}

export default Card;
