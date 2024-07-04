import React, { useState } from 'react';
import axios from 'axios';
import image from '../images/twitter logo.png';

function SignUpModal({ onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleSignUp = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/signup/`, {
        name:username,
        email,
        password,
      });
      console.log('Signup successful:', response.data); // Log the response data for debugging
      // Handle successful signup (e.g., store token, redirect)
      onClose(); // Close the modal after successful signup
    } catch (error) {
      console.error('Signup failed:', error.response.data.error); // Log the error response for debugging
      setError(error.response.data.error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-lg p-6 w-80 relative text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">x</button>
        <img src={image} alt="Logo" className="w-20 mx-auto mb-4" />
        <h2 className="text-2xl mb-4 font-medium">Sign up to X</h2>
        <input type="text" placeholder="Username" className="border border-gray-700 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" className="border border-gray-700 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          className={`border rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white ${!passwordValid ? 'border-red-500' : 'border-gray-700'}`}
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={`border rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white ${password !== confirmPassword ? 'border-red-500' : 'border-gray-700'}`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!passwordValid && (
          <p className="text-red-500 text-sm mb-4">
            Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character.
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          onClick={handleSignUp}
          disabled={!passwordValid || !username || !email}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUpModal;
