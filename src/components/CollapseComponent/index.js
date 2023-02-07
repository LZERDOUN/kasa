import React, { useState } from "react";
import "./style.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Collapse(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <p>{props.title}</p>
        <button type="button" className="collapsible">
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isActive && <div className="details">{props.details}</div>}
    </div>
  );
}

export default Collapse;
