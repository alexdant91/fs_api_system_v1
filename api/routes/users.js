const express = require('express');
const app = express.Router();

const jwt = require('jsonwebtoken');
const { User, Config } = require('../data');

/**
 * @path /user/login
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = User.login(email, password);

  const token = jwt.sign(user, Config.SECRET_KEY);

  return res.status(200).json({ token, user });
});

module.exports = app;
