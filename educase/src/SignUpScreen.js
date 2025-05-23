import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpScreen.css';

function SignUpScreen({ onSignup }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    onSignup({
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    });

   
    navigate('/profile');
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <h2>Create your</h2>
        <h3>PopX account</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          <label>Phone number*</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            required
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />

          <label>Email address*</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label>Company name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />

          <div>
            <p>Are you an Agency?*</p>
            <div className="radio-inline">
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={e => setIsAgency(e.target.value)}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={e => setIsAgency(e.target.value)}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>

          <button className="primary-btn" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
