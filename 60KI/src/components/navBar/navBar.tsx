import "../../css/style.css";
import "./navBar.css";
import logo from "../../assets/chair.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo centralize">
        <img src={logo} alt="Descrição da imagem" height="0rem" />
        <p>60kI</p>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>
    </div>
  );
};

export default Navbar;