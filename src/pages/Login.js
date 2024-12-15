import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Cek jika password minimal 8 karakter
    if (password.length < 8) {
      setError('Password harus minimal 8 karakter.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find(
      u => (u.email === email || u.username === username) && u.password === password
    );

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      setError('Username/Email atau password salah.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-section" data-aos="zoom-in">
        <div className="background-text">LOGIN</div>
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit} data-aos="zoom-in">
            <h2 className="auth-title"><span>Login</span></h2>
            {error && <p className="auth-error">{error}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"  // Menambahkan validasi minimal 8 karakter
            />
            <button type="submit" className="auth-btn">Login</button>
            <p className="auth-switch">
              Belum punya akun? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
