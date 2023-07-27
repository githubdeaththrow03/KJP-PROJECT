import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './ForgotPass.css';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();

    setEmailError(false);
    setUsernameError(false);

    if (!email && !username) {
      setEmailError(true);
      setUsernameError(true);
    } else {
      axios
        .post('http://localhost:4000/users/forgot-password', { username, email })
        .then((response) => {
          // Check if the response indicates success or not found
          if (response.data.success) {
            setIsEmailSent(true);
          } else {
            setEmailError('Cannot find your account. Please verify your email and username.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsEmailSent(false);
        });
    }
  };

  useEffect(() => {
    document.title = '2KLC | Change Password';
  }, []);

  return (
    <div>
      <Navbar />
      <div className="forgot-password-container">
        <h2 className="forgot-password-title">Forgot Your Password?</h2>
        {isEmailSent ? (
          <p className="email-sent-message">
            We sent you an email with instructions on resetting your password.
          </p>
        ) : (
          <>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className={`input-field ${emailError ? 'error' : ''}`}
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">Please enter your email address</p>}
            </div>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className={`input-field ${usernameError ? 'error' : ''}`}
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="error-message">Please enter your username</p>}
            </div>
            <button className="reset-password-button" onClick={handleForgotPassword}>
              Reset Password
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
