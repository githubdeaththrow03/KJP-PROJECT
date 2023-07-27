import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [resetError, setResetError] = useState('');
  const history = useNavigate();
  const location = useLocation();

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      setResetError("Passwords don't match.");
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    const resetToken = searchParams.get('token');

    axios
      .post('http://localhost:4000/users/reset-password', { resetToken, password })
      .then((response) => {
        history.push('/login');
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetError('Failed to reset password. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      {resetError && <p>{resetError}</p>}
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {passwordError && <p>Please enter and confirm your new password.</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
