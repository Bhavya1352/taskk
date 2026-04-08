import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import AccountSettings from './pages/AccountSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="mobile-container">
          <div className="mobile-inner scrollbar-hide">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
