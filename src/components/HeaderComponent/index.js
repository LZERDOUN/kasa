import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
};

export default Header;
