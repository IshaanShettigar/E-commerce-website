const express = require('express');
const { registerUser, loginUser } = require('./users');
const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await registerUser(username, password);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser(username, password);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = authRouter;