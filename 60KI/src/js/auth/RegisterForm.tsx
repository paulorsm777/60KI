import React, { useState } from "react";
import "../../pages/register/register.css";

interface RegisterFormProps {
  onRegister: (email: string, password: string, recoveryQuestion: string, recoveryAnswer: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [recoveryAnswer, setRecoveryAnswer] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuestion(parseInt(e.target.value, 10));
  };

  const handleRecoveryAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecoveryAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedQuestionText = getRecoveryQuestions()[selectedQuestion];
    onRegister(email, password, selectedQuestionText, recoveryAnswer);
  };

  const getRecoveryQuestions = () => [
    "Qual é o nome do seu animal de estimação?",
    "Qual é o nome da sua cidade natal?",
    "Qual é o nome do seu melhor amigo de infância?"
  ];

  return (
    <form onSubmit={handleSubmit} className="centralize submit-form">
    <h1>Register</h1>
      <div className="inputBox">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="data-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          aria-label="Email"
        />
      </div>
      <div className="inputBox">
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          className="data-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          aria-label="Senha"
        />
      </div>
      <div className="inputBox">
        <label htmlFor="recoveryQuestion">Pergunta de recuperação:</label>
        <select
          id="recoveryQuestion"
          className="data-input"
          value={selectedQuestion}
          onChange={handleQuestionChange}
          aria-label="Pergunta de recuperação"
        >
          {getRecoveryQuestions().map((question, index) => (
            <option key={index} value={index} className="questionBox">
              {question}
            </option>
          ))}
        </select>
      </div>
      <div className="inputBox">
        <label htmlFor="recoveryAnswer">Resposta de recuperação:</label>
        <input
          id="recoveryAnswer"
          className="data-input"
          type="text"
          value={recoveryAnswer}
          onChange={handleRecoveryAnswerChange}
          aria-label="Resposta de recuperação"
        />
      </div>
      <button className="data-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
