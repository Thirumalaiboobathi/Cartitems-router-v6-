import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ setMessage, setMessageColor }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    // Perform validation or additional checks here before registering the user
    // For simplicity, just setting a message and navigating to home for demonstration purposes
    setMessage('Registered Successfully');
    setMessageColor('green');
    navigate('/home'); // Navigate to home page after registration
  };

  return (
    <div className="form">
      <h2>Register</h2>
      {/* Input fields for registration */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {/* Registration button */}
      <button
        onClick={handleFormSubmit}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          backgroundColor: 'green',
          color: 'white'
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
