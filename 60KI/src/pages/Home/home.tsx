import HomeImg from "../../assets/homeimg.png";
import './home.css';
import '../../css/style.css';
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar/navBar";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="container-home centralize">
        <div className="col1">
        <div className="slogan">
          <h1>Seu assento ideal!</h1>
        </div>
        <div className="about centralize-horizontal">
        <Link to="/login"><button type="button">Saiba mais</button></Link>
        </div>
        </div>
        <div className="imgBox">
          <img
            src={HomeImg}
            alt="HomeImg"
            style={{ maxWidth: "100%", maxHeight: "90%" }}
            className="homeImg"
          />
        </div>
      </div>
    </>
  );
}
