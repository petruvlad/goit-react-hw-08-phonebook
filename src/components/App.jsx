import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './Login';
import ContactsPage from './Contacts';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = userData => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navigation />
        {user ? (
          <UserMenu userEmail={user.email} onLogout={handleLogout} />
        ) : null}
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
       
          <Route
            path="/contacts"
            element={user ? <ContactsPage userEmail={user.email} /> : null}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
