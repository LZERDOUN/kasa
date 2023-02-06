import "./style.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav>
        <Link className={location.pathname === "/" ? "surligne" : ""} to="/">
          Accueil
        </Link>
        <Link
          className={location.pathname === "/about" ? "surligne" : ""}
          to="/about"
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
};

export default Header;
