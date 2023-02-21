import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
  return (
    <Link className="lien-card" to={"/" + props.id}>
      <div className="card-container">
        <img className="cover" src={props.image} alt={props.title} />
        <p className="titre">{props.title}</p>
      </div>
    </Link>
  );
}

export default Card;
