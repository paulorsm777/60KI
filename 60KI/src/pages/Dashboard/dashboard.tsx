import dashImg from "../../assets/Captura de tela 2023-12-14 204132.png";
import NavDash from "../../components/navBarDash/navBar"

export default function dashboard() {
  return (
    <>
    <NavDash/>
      <img src={dashImg} style={{ width: "100%", height: "auto" }} />
    </>
  );
}
