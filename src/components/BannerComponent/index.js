import "./style.css";
import { useLocation } from "react-router-dom";

//RAPPEL : UTILISER PROP.TEXT POUR LE TEXTE AU NIVEAU DES FICHIERS HOME.JS ET ABOUT.JS

const Banner = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <div className="banner-home">
          <p className="opacity">Chez vous, partout et ailleurs</p>
        </div>
      ) : (
        <div className="banner-about">
          <p className="opacity"></p>
        </div>
      )}
    </>
  );
};

export default Banner;
