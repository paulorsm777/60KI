import LoginImg from "../../assets/homeimg.png";
import "./login.css";
import '../../css/style.css'
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../js/auth/LoginForm";
import Navbar from "../../components/navBar/navBar";

export default function login() {
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    if (email === "teste@gmail.com" && password === "1234") {
      console.log("Login bem-sucedido!");
      navigate("/dashboard");
    } else {
      window.alert("Credenciais inválidas!");

    }
  };
  return (
    <>
     <Navbar />
      <div className="container-login centralize">
        <div className="login-from centralize">
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
        <div className="space"></div>
        <div className="imgBox">
          <img
            src={LoginImg}
            alt="HomeImg"
            style={{ width: '90%' }}
            className="LoginImg"
          />
        </div>
      </div>
    </>
  );
}
