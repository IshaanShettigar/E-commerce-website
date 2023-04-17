const pool = require('../config');

async function addItem(itemId, quantity) {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT quantity FROM cart WHERE item_id = $1', [itemId]);
        let existingQuantity = 0;
        if (result.rows.length > 0) {
            existingQuantity = result.rows[0].quantity;
        }
        const newQuantity = existingQuantity + quantity;
        if (newQuantity > 0) {
            await client.query('DELETE FROM cart WHERE item_id = $1', [itemId]);
            await client.query('INSERT INTO cart (item_id, quantity) VALUES ($1, $2)', [itemId, newQuantity]);
        } else {
        await client.query('DELETE FROM cart WHERE item_id = $1', [itemId]);
        }
        await client.query('COMMIT');
        return 'Item added to cart';
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
}

async function updateItem(itemId, quantity) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        if (quantity > 0) {
        await client.query('INSERT INTO cart (item_id, quantity) VALUES ($1, $2) ON CONFLICT (item_id) DO UPDATE SET quantity = $2', [itemId, quantity]);
        } else {
        await client.query('DELETE FROM cart WHERE item_id = $1', [itemId]);
        }

        await client.query('COMMIT');
        return 'Cart updated';
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
}

async function removeItem(itemId) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query('DELETE FROM cart WHERE item_id = $1', [itemId]);
        await client.query('COMMIT');
        return 'Item removed from cart';
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
}

async function getCart() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM cart');
        return result.rows;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
}

async function getTotal() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT SUM(price * quantity) AS total FROM cart INNER JOIN items ON cart.item_id = items.id');
        return result.rows[0].total;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
}


module.exports = 
{ 
    addItem, 
    updateItem, 
    removeItem, 
    getCart, 
    getTotal 
};