import "./style.css";
import { useLocation } from "react-router-dom";

//RAPPEL : UTILISER PROP.TEXT POUR LE TEXTE AU NIVEAU DES FICHIERS HOME.JS ET ABOUT.JS

const Banner = (props) => {
  const location = useLocation();
  return (
    <div
      className={`banner ${
        location.pathname === "/" ? "banner-home" : "banner-about"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Banner;
