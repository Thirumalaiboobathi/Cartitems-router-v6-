import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Function to set the authentication token in local storage
const login = () => {
  localStorage.setItem("auth_token", "my_auth_token_here");
};

function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs">
      {/* Your tab content */}
      <button onClick={() => handleTabChange('login')}>Login</button>
      <button onClick={() => handleTabChange('register')}>Register</button>
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
      login(); // Set authentication token upon successful login
      navigate('/home');
    } else {
      setMessage('Invalid Username and Password');
      setMessageColor('red');
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      {/* Input fields for username and password */}
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
      {/* Login button */}
      <button
        onClick={handleFormSubmit}
        style={{
          display: 'block',
          margin: '20px auto', // Adjust the margin to center the button vertically
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          backgroundColor: 'blue',
          color: 'white'    
        }}
      >
        Login
      </button>
      {/* Forgot password link */}
      <p>
        Forgot password? <a href="#!">Reset here</a>
      </p>
      {/* Social media icons */}
      <div className="social-icons" style={{ textAlign: 'center' }}>
        {/* Add your social media icons */}
        <span style={{ margin: '5px', borderRadius: '50%', padding: '8px', backgroundColor: 'lightgray' }}>
          <i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i>
        </span>
        <span style={{ margin: '5px', borderRadius: '50%', padding: '8px', backgroundColor: 'lightgray' }}>
          <i className="fab fa-google" style={{ color: '#db4437' }}></i>
        </span>
        <span style={{ margin: '5px', borderRadius: '50%', padding: '8px', backgroundColor: 'lightgray' }}>
          <i className="fab fa-twitter" style={{ color: '#00acee' }}></i>
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
      {/* Render tabs */}
      <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      {/* Render the Login component */}
      {activeTab === 'login' && (
        <Login
          setMessage={setMessage}
          setMessageColor={setMessageColor}
        />
      )}
      {/* Display login status message */}
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default LoginPage;
