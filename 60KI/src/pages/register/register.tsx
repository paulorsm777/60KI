import RegisterImg from "../../assets/homeimg.png";
import "./register.css";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../js/auth/RegisterForm";
import Navbar from "../../components/navBar/navBar";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (
    email: string,
    password: string,
    recoveryQuestion: string,
    recoveryAnswer: string
  ) => {
    // Lógica de autenticação (substitua pelo seu método de autenticação real)
    if (email === "teste@gmail.com" && password === "1234") {
      console.log("Registro bem-sucedido!");
      console.log("Email:", email);
      console.log("Senha:", password);
      console.log("Pergunta de recuperação:", recoveryQuestion);
      console.log("Resposta de recuperação:", recoveryAnswer);
      navigate("/dashboard");
    } else {
      window.alert("Preencha todos os campos!");
    }
  };

  return (
    <>
    <Navbar />
    <div className="container-register centralize">
      <div className="register-form centralize">
        <RegisterForm onRegister={handleRegister} />
      </div>
      <div className="space"></div>
      <div className="imgBox">
        <img src={RegisterImg} alt="RegisterImg" style={{ width: '90%' }} className="RegisterImg" />
      </div>
    </div>
    </>
  );
}
