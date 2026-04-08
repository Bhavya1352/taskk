import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      {/* Decorative circles area */}
      <div className="welcome-decoration">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
        <div className="circle c5"></div>
        <div className="circle c6"></div>
        <div className="circle c7"></div>
        <div className="circle c8"></div>
        <div className="circle c9"></div>
        <div className="circle c10"></div>
        <div className="circle c11"></div>
        <div className="circle c12"></div>
        <div className="circle c13"></div>
        <div className="circle c14"></div>
      </div>

      {/* Bottom content */}
      <div className="welcome-bottom">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button
          id="btn-create-account"
          className="btn-primary"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>
        <button
          id="btn-login"
          className="btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
