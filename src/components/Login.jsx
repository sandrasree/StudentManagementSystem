import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const defaultAdminEmail = "admin@innomatics.com";
  const defaultAdminPassword = "inno123";

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (
      (email === storedEmail && password === storedPassword) || 
      (email === defaultAdminEmail && password === defaultAdminPassword)
    ) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid Email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="auth-container">
        <h2>Student Management System<hr/>Welcome To Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter the Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
  
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );  
};

export default Login;
