const pool = require('../config');

async function getProducts() {
  const result = await pool.query('SELECT * FROM items');
  return result.rows;
}

async function getProductById(id) {
  const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  return result.rows[0];
}

module.exports = {
  getProducts,
  getProductById,
};
