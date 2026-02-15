import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBirthdayCake } from 'react-icons/fa';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    dob: '',
    password: '',
    confirmPassword: '', // Add confirmPassword field
  });
  const [signupMessage, setSignupMessage] = useState('');
  const [signupError, setSignupError] = useState('');

  // Prefer explicit backend URL; fallback keeps local dev working.
  const backendBase = (process.env.REACT_APP_BACKEND_URL || 'http://backend-svc:5000').replace(/\/$/, '');

  const handleButtonClick = (newAction) => {
    setAction(newAction);
    setSignupMessage('');  // Clear message when switching actions
    setSignupError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match for signup
    if (action === "Sign Up" && formData.password !== formData.confirmPassword) {
      setSignupError('Passwords do not match!');
      setSignupMessage('');
      return;
    }

    const endpoint = action === 'Login' ? '/login' : '/signup';
    const url = `${backendBase}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // read response body for better error messages
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error('Signup failed', response.status, body);
        setSignupMessage('');
        setSignupError(body.message || `${action} failed. Please try again.`);
        return;
      }

      setSignupMessage(body.message || `${action} successful`);
      setSignupError('');
    } catch (error) {
      console.error('Network / fetch error:', { url, error });
      setSignupMessage('');
      setSignupError(`Network error: unable to reach backend at ${backendBase}. Check REACT_APP_BACKEND_URL, CORS, and backend logs.`);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          {action === "Sign Up" && (
            <div className='input'>
              <FaUser className='icon' />
              <input
                type='text'
                name='full_name'
                placeholder='Full Name'
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className='input'>
            <FaEnvelope className='icon' />
            <input
              type='email'
              name='email'
              placeholder='Email ID'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {action === "Sign Up" && (
            <div className='input'>
              <FaPhone className='icon' />
              <input
                type='tel'
                name='phone_number'
                placeholder='Phone Number'
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {action === "Sign Up" && (
            <div className='input'>
              <FaBirthdayCake className='icon' />
              <input
                type='date'
                name='dob'
                placeholder='Date of Birth'
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className='input'>
            <FaLock className='icon' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Add Confirm Password field */}
          {action === "Sign Up" && (
            <div className='input'>
              <FaLock className='icon' />
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className='submit-container'>
          <button
            type='button'
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => handleButtonClick("Sign Up")}
          >
            Sign Up
          </button>

          <button
            type='button'
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => handleButtonClick("Login")}
          >
            Login
          </button>

          {/* explicit submit */}
          <button type='submit' className='submit primary'>
            {action}
          </button>
        </div>
      </form>

      {signupMessage && (
        <div className="signup-message success">{signupMessage}</div>
      )}

      {signupError && (
        <div className="signup-message error">{signupError}</div>
      )}
    </div>
  );
};

export default LoginSignup;
