const pool = require('../config');
const jwt = require('jsonwebtoken');

async function registerUser(username, password) {
  try {
    const userExistsQuery = {
      text: 'SELECT * FROM users WHERE username = $1',
      values: [username],
    };
    const userExistsResult = await pool.query(userExistsQuery);
    if (userExistsResult.rows.length > 0) {
      throw new Error('User already exists');
    }
    const createUserQuery = {
      text: 'INSERT INTO users(username, password) VALUES($1, $2)',
      values: [username, password],
    };
    await pool.query(createUserQuery);
    console.log('User created successfully')
    return { message: 'User created successfully' };
  } catch (err) {
    console.error(err);
    throw new Error('Internal server error');
  }
}

async function loginUser(username, password) {
  try {
    const userExistsQuery = {
      text: 'SELECT * FROM users WHERE username = $1',
      values: [username],
    };
    const userExistsResult = await pool.query(userExistsQuery);
    if (userExistsResult.rows.length === 0) {
      throw new Error('Invalid credentials');
    }

    const dbPassword = userExistsResult.rows[0].password;

    if (password !== dbPassword) {
      throw new Error('Invalid credentials');
    }
    else {
      console.log('Password match');
    }

    const token = await jwt.sign({ id: userExistsResult.rows[0].id }, process.env.JWT_SECRET);
    return { token };
  } catch (err) {
    console.error(err);
    throw new Error('Internal server error');
  }
}

module.exports = { registerUser, loginUser };
