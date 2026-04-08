import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AccountSettings.css';

function AccountSettings() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user data passed from Login/Signup, or use defaults
  const userName = location.state?.name || 'Marry Doe';
  const userEmail = location.state?.email || 'Marry@Gmail.Com';

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <h1 className="settings-heading">Account Settings</h1>
      </div>

      {/* Profile */}
      <div className="settings-body">
        <div className="profile-row">
          <div className="avatar-wrapper">
            <img
              src="/profile.png"
              alt={userName}
              className="avatar-img"
            />
            <div className="camera-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </div>
          </div>
          <div className="profile-text">
            <h2 className="profile-name">{userName}</h2>
            <p className="profile-email">{userEmail}</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        <div className="dashed-divider"></div>
      </div>

      {/* Spacer fills remaining height */}
      <div className="settings-spacer"></div>

      {/* Bottom navigation */}
      <div className="bottom-nav">
        <button
          id="nav-home"
          className="nav-btn"
          onClick={() => navigate('/')}
          aria-label="Home"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        <button className="nav-btn" aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <span className="nav-counter">4 of 4</span>
        <button className="nav-btn" aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
