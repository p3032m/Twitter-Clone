import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/authContext'; // Import the useAuth hook
import image from '../images/twitter logo.png';
import { useNavigate } from 'react-router-dom';



function SignInModal({ onClose }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Access login function from AuthContext

  const navigate=useNavigate();
  const handleSignIn = async () => {
    try {
      const response = await login(usernameOrEmail.toLowerCase(), password); // Convert email to lowercase
      console.log('Login successful:', response);
      setError(''); // Clear any previous errors
      console.log('Login successful:', response);
      setTimeout(() => {
        console.log(' ');
      }, 2000); 
      navigate('/');
      // Handle successful login, e.g., redirect or close modal
      onClose(); // Close modal after successful login

    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Invalid credentials. Please try again.');
      } else {
        setError('Sign-in failed. Please try again later.');
      }
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-lg p-6 w-80 relative text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">X</button>
        <img src={image} alt="Logo" className="w-20 mx-auto mb-4" />
        <h2 className="text-2xl mb-4 inline-flex items-center justify-center font-medium">
          Sign in to X
        </h2>
        <input
          type="text"
          placeholder="Username or Email"
          className="border rounded w-full py-2 px-3 mb-4 text-black"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full py-2 px-3 mb-4 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button onClick={handleSignIn} className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignInModal;