import React, { useState } from 'react';
import "../../pages/login/login.css";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='centralize submit-form'>
      <label>
        Email:
        <input className='data-input' type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Senha:
        <input className='data-input' type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button className='data-button' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
