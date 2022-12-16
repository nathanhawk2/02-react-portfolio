const jwt = require('jsonwebtoken');

const secret = 'thebigsecret';
const expiration = '2h';

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) return req;

    try {
      const { data } = jwt.verify(token, scret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: ({ email, username, id }) => {
    const payload = { email, username, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};