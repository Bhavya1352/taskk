import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function InputField({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <fieldset className="input-field">
      <legend className="input-label">{label}</legend>
      <input
        id={id}
        type={type}
        className="input-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </fieldset>
  );
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to account settings with user data
    navigate('/account-settings', {
      state: {
        name: email.split('@')[0] || 'Marry Doe',
        email: email || 'Marry@Gmail.Com',
      },
    });
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="login-title">
          Signin to your<br />PopX account
        </h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <InputField
            id="login-email"
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="login-password"
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="login-submit" type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
