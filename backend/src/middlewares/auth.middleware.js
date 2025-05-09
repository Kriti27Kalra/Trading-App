const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

const authenticate = (req, res, next) => {
  // Get token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded; // Attach decoded user info to the request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticate;
