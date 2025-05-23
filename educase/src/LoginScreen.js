import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

function LoginScreen({ onLogin }) {  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onLogin === 'function') {  
      onLogin({ email, password });
    } else {
      console.error('onLogin prop is not a function');
    }

    navigate('/profile');
  };

  return (
    <div className="login-screen">
      <h2>Sign in to your</h2>
      <h3>PopX account</h3>
      <p className="tagline">Lorem ipsum dolor sit amet,</p>
      <p className="tagline">consectetur adipiscing elit,</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />

        <button className="primary-btn1" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;
