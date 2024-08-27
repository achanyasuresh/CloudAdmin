import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here (e.g., validate credentials)

    // Navigate to the home page after successful login
    navigate('/home');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
