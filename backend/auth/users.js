const pool = require('../config');

async function registerUser(username, password) {
  try {
      const userExistsQuery = {
      text: 'SELECT * FROM users WHERE username = $1',
      values: [username],
    };
    const userExistsResult = await pool.query(userExistsQuery);
    if (userExistsResult.rows.length > 0) {
      console.log('User already exists');
      return ('0');
    }
    const createUserQuery = {
      text: 'INSERT INTO users(username, password) VALUES($1, $2)',
      values: [username, password],
    };
    await pool.query(createUserQuery);
    console.log('User created');
    return ('1');
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
      throw new Error('0');
    }
    const dbPassword = userExistsResult.rows[0].password;

    if (password !== dbPassword) {
      throw new Error('0');
    }
    else {
      console.log('Password match');
    }
    return "1";
  } catch (err) {
    console.error(err);
    throw new Error('Internal server error');
  }
}

module.exports = { registerUser, loginUser };