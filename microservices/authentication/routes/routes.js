const express = require('express');
const app = express.Router();
const authController = require('../controllers/authcontroller');

app.post('/register', authController.register);

app.post('/login', authController.login);

module.exports = router;