const pool = require("../config.js")


async function addItem(id, name, tag, price) {
    try {
        const itemExistsQuery = `SELECT * FROM cart WHERE id=${id}`;
        const itemExistsResult = await pool.query(itemExistsQuery);

        if (itemExistsResult.rows.length > 0) {
            console.log("Item already exists")
            return { message: "Item already exists dawg" }
        }


        const addItemQuery = `INSERT INTO cart VALUES(${id},${name},${tag},${price})`;
        await pool.query(addItemQuery);
        console.log("Item added successfully")
        return { message: "Item added successfully" }
    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    }
}

async function getItem(id) {
    try {
        const getItemQuery = `SELECT * FROM cart WHERE id=${id}`;
        const getItemRes = await pool.query(getItemQuery);
        if (getItemResult.rows.length === 0) {
            throw new Error('Invalid item');
        }
        return getItemRes.rows;
    } catch (err) {
        console.log("Internal Server Error")
        throw new Error("Internal Server Error")
    }
}

module.exports = { addItem, getItem };