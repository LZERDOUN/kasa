import "./style.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="body">
      <p className="error-number">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="return-home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
