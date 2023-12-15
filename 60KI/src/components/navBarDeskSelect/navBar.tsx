import { Link } from 'react-router-dom';
import "../../css/style.css";
import "./navBar.css";
import logo from "../../assets/chair.png";

export default function Navbar() {

  return (
    <div className="navbar">
      <Link to="/" className="logo centralize">
        <img src={logo} alt="Descrição da imagem" height="40rem" />
        <p>60kI</p>
      </Link>
      <div className="nav-links">
        <Link to="/deskSelect">Atender</Link>
        <Link to="/register">Configurações</Link>
      </div>
    </div>
  );
};
