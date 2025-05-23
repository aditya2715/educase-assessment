import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingScreen.css';

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h2>Welcome to PopX</h2>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <button className="primary-btn" onClick={() => navigate('/signup')}>Create Account</button>
      <br />
      <button className="secondary-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
}

export default LandingScreen;
