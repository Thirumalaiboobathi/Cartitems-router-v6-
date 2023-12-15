import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs">
     
    </div>
  );
}

function Login({ setMessage, setMessageColor }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    if (username === 'root' && password === '12345678') {
      setMessage('Logged In Successfully');
      setMessageColor('green');
      navigate('/home');
    } else {
      setMessage('Invalid Username and Password');
      setMessageColor('red');
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleFormSubmit}
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        Login
      </button>
      <p>
        Forgot password? <a href="#!">Reset here</a>
      </p>
      <div className="social-icons" style={{ textAlign: 'center' }}>
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
        <span>
          <i className="fab fa-google"></i>
        </span>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
        {/* Add more social media icons as needed */}
      </div>
    </div>
  );
}

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="container">
      <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === 'login' && (
        <Login
          setMessage={setMessage}
          setMessageColor={setMessageColor}
        />
      )}
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default LoginPage;
