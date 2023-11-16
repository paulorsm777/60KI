import LoginImg from "../../assets/homeimg.png";
import "./register.css";
import '../../css/style.css'
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../js/auth/LoginForm";

export default function register() {
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
            <h1>Register</h1>
            <RegisterForm onLogin={handleLogin} />
        </div>
        <div className="imgBox">
          <img
            src={LoginImg}
            alt="HomeImg"
            style={{ maxWidth: "100%", maxHeight: "90%" }}
            className="LoginImg"
          />
        </div>
      </div>
    </>
  );
}