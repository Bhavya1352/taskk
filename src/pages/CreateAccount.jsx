import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function InputField({ id, label, required, type = 'text', placeholder, value, onChange }) {
  return (
    <fieldset className="input-field">
      <legend className="input-label">
        {label}{required && <span className="asterisk">*</span>}
      </legend>
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

function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings', {
      state: {
        name: form.fullName || 'Marry Doe',
        email: form.email || 'Marry@Gmail.Com',
      },
    });
  };

  return (
    <div className="create-page">
      <div className="create-content">
        <h1 className="create-title">
          Create your<br />PopX account
        </h1>

        <form className="create-form" onSubmit={handleSubmit}>
          <InputField
            id="signup-name"
            label="Full Name"
            required
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={update('fullName')}
          />
          <InputField
            id="signup-phone"
            label="Phone number"
            required
            type="tel"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={update('phone')}
          />
          <InputField
            id="signup-email"
            label="Email address"
            required
            type="email"
            placeholder="Marry Doe"
            value={form.email}
            onChange={update('email')}
          />
          <InputField
            id="signup-password"
            label="Password "
            required
            type="password"
            placeholder="Marry Doe"
            value={form.password}
            onChange={update('password')}
          />
          <InputField
            id="signup-company"
            label="Company name"
            placeholder="Marry Doe"
            value={form.company}
            onChange={update('company')}
          />

          {/* Agency radio */}
          <div className="agency-section">
            <p className="agency-label">
              Are you an Agency?<span className="asterisk">*</span>
            </p>
            <div className="radio-group">
              <label className="radio-option" htmlFor="agency-yes">
                <input
                  type="radio"
                  id="agency-yes"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={update('isAgency')}
                />
                <span className="radio-circle"></span>
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-option" htmlFor="agency-no">
                <input
                  type="radio"
                  id="agency-no"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={update('isAgency')}
                />
                <span className="radio-circle"></span>
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>

          <button id="signup-submit" type="submit" className="create-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
