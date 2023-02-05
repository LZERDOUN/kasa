import "./style.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav>
        {location.pathname === "/" ? (
          <Link className="surligne" to="/">
            Accueil
          </Link>
        ) : (
          <Link to="/">Accueil</Link>
        )}
        {location.pathname === "/about" ? (
          <Link className="surligne" to="/about">
            A propos
          </Link>
        ) : (
          <Link to="/about">A propos</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
