const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  // Extract the JWT token from the request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  console.log('Token:', token);
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    
    // Attach the decoded token to the request object for use in route handlers
    req.userId = decodedToken.userId;
    next();
  });
};

module.exports = { authenticateToken };
