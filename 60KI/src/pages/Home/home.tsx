import HomeImg from "../../assets/homeimg.png";
import './home.css';
import '../../css/style.css';
export default function Home() {
  return (
    <>
      <div className="container-home centralize">
        <div className="col1">
        <div className="slogan">
          <h1>Seu assento ideal!</h1>
        </div>
        <div className="about centralize-horizontal">
          <a href="/pagina-de-destino">
  <button type="button">Saiba mais</button>
</a>
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
