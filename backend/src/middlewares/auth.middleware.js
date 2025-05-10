const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator'); 

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode JWT token
    req.user = decoded; // Save decoded user information into request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware to check if email is already taken during registration
const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.body;
     const user = await User.findByEmail(email);

    if (user) {
      return res.status(409).json({ message: 'Email already exists. Please use a different one.' });
    }

    next(); // Continue to the next middleware (registration)
  } catch (err) {
    return res.status(500).json({ message: 'Error checking email.' });
  }
};

// Middleware to validate request data (optional for enhanced validation)
const validateRegistration = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

// Middleware to check if passwords match
const checkPasswordMatch = (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  next(); // Continue to the next middleware (registration)
};

module.exports = {
  isAuthenticated,
  checkEmailExists,
  validateRegistration,
  checkPasswordMatch
};
