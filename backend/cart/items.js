const pool = require('../config');
const jwt = require('jsonwebtoken');

async function addItems(id, name, tag, price) {
    try {
        const itemExistQuery = {
            text: 'SELECT * FROM cart WHERE id = $1',
            values: [id],
        };
        const itemExistResult = await pool.query(itemExistQuery);
        if (itemExistResult.rows.length > 0) {
            console.log('Item already exists');
            return { message: 'Item already exists'}
        }
        const addItemQuery = {
            text: 'INSERT INTO cart(id, name, tag, price) VALUES($1, $2, $3, $4)',
            values: [id, name, tag, price],
        };
        await pool.query(addItemQuery);
        console.log('Item added successfully');
        return { message: 'Item added successfully' };
    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    }
}

async function getItems(id) {
    try {
        const getItemQuery = {
            text: 'SELECT * FROM cart WHERE id = $1',
            values: [id],
        };
        const getItemResult = await pool.query(getItemQuery);
        if (getItemResult.rows.length === 0) {
            throw new Error('Invalid item');
        }
        return getItemResult.rows;
    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    }
}

module.exports = { addItems, getItems };