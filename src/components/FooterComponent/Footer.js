import "./style.css";

import logo from "../../assets/logo-black-and-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="Logo Kasa Noir et Blanc" className="kasa-logo-bw" />
      <div className="copyright">
        <p>2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
