import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import Profile from './Profile';
import SignUpScreen from './SignUpScreen';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
       <Route path="/" element={<LandingScreen onLogin={setUser} />} />

        <Route path="/login" element={<LoginScreen onLogin={setUser} />} />
       <Route path="/signup" element={<SignUpScreen onSignup={setUser} />} />

        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
