import "./style.css";
import { useLocation } from "react-router-dom";

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
