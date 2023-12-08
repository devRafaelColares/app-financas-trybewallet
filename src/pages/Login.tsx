import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const btnDisabled = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
    const isPasswordValid = userPassword.length >= 6;
    return !isEmailValid || !isPasswordValid;
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/carteira');
    dispatch(setEmail(userEmail));
  };

  return (
    <div>
      <form onSubmit={ handleLogin }>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            onChange={ (event) => setUserEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            onChange={ (event) => setUserPassword(event.target.value) }
          />
        </label>
        <button type="submit" disabled={ btnDisabled() }>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
