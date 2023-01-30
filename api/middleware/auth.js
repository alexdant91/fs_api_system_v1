const jwt = require('jsonwebtoken');
const { Config } = require('../data');

const authUser = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "Non sei autorizzato" });

  const user = jwt.verify(token, Config.SECRET_KEY);

  if (user) {
    req.user = user;
    return next();
  }

  return res.status(403).json({ message: "Non sei autorizzato" });
}

module.exports = {
  authUser,
}
