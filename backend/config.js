require('dotenv').config();
const PORT = 3000
const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports = { pool, PORT };