import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBirthdayCake } from 'react-icons/fa';

const LoginSignup = () => {
  const [action, setAction] = useState('Login'); // Login | Sign Up
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Backend URL handling
  const configuredBackend = (process.env.REACT_APP_BACKEND_URL || '').trim();
  const defaultBackend = `${window.location.protocol}//${window.location.hostname}:5000`;
  const backendBase = (configuredBackend || defaultBackend).replace(/\/$/, '');
  const buildUrl = (endpoint) =>
    `${backendBase}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const handleButtonClick = (newAction) => {
    setAction(newAction);
    setError('');
    setMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Validation
    if (action === 'Sign Up') {
      if (
        !formData.full_name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError('Please fill all required fields.');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        setError('Email and password are required.');
        return;
      }
    }

    const url =
      action === 'Sign Up' ? buildUrl('/signup') : buildUrl('/login');

    const payload =
      action === 'Sign Up'
        ? {
            full_name: formData.full_name,
            email: formData.email,
            phone_number: formData.phone_number,
            dob: formData.dob,
            password: formData.password,
          }
        : {
            email: formData.email,
            password: formData.password,
          };

    setLoading(true);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error(`${action} failed`, {
          url,
          status: res.status,
          body,
        });
        setMessage('');
        setError(body.message || `${action} failed. Please try again.`);
        return;
      }

      setMessage(body.message || `${action} successful`);
      setError('');
    } catch (err) {
      const errorMessage = err?.message || 'Unknown network error';
      console.error('Network error:', errorMessage);
      setMessage('');
      setError(`Network error: unable to reach backend.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {action === 'Sign Up' && (
            <div className="input">
              <FaUser className="icon" />
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {action === 'Sign Up' && (
            <div className="input">
              <FaPhone className="icon" />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {action === 'Sign Up' && (
            <div className="input">
              <FaBirthdayCake className="icon" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {action === 'Sign Up' && (
            <div className="input">
              <FaLock className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        {action === 'Login' && (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            type="button"
            className="switch"
            onClick={() =>
              handleButtonClick(action === 'Login' ? 'Sign Up' : 'Login')
            }
          >
            {action === 'Login' ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>

          <button type="submit" className="submit primary" disabled={loading}>
            {loading ? 'Submitting…' : action}
          </button>
        </div>
      </form>

      {error && (
        <div className="error" style={{ color: 'crimson', marginTop: 12 }}>
          {error}
        </div>
      )}
      {message && (
        <div className="message" style={{ color: 'green', marginTop: 12 }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginSignup;