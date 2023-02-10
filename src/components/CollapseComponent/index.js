import React, { useState } from "react";
import "./style.css";
import chevronDown from "../../assets/chevronDown.png";
import chevronUp from "../../assets/chevronUp.png";

//CHANGER CHEVRON PAR DES IMAGES => INTERDICTION UTILISATION BIBLIOTHEQUE

const renderInColumn = (details) => {
  console.log(details);
  return (
    <>
      {details.map((item) => (
        <p className="item">{item}</p>
      ))}
    </>
  );
};

function Collapse(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <p>{props.title}</p>
        <button type="button" className="collapsible">
          {isActive ? (
            <img src={chevronUp} alt="Chevron Up" />
          ) : (
            <img src={chevronDown} alt="Chevron Down" />
          )}
        </button>
      </div>
      {isActive && (
        <div className={`details ${props.sized ? "" : "fixed"}`}>
          {Array.isArray(props.details)
            ? renderInColumn(props.details)
            : props.details}
        </div>
      )}
    </div>
  );
}

export default Collapse;
