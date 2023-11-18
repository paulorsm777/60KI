import LoginImg from "../../assets/homeimg.png";
import "./login.css";
import '../../css/style.css'
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../js/auth/LoginForm";
import Home from "../Home/home";

export default function login() {
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    if (email === "usuario@exemplo.com" && password === "123") {
      console.log("Login bem-sucedido!");
      navigate("/");
    } else {
      console.log("Credenciais inválidas!");
    }
  };
  return (
    <>
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
