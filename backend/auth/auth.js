const authRouter = require('express').Router();
const { registerUser, loginUser } = require('./users');

authRouter.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await registerUser(username, password);
    res.status(201).send({ success: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: '0' });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser(username, password);

    if (result) {
      res.status(200).send({ success :result });
    } else {
      res.status(401).json({ success: '0' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: '0' });
  }
});

module.exports = authRouter;