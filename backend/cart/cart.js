const express = require('express');
const { getItems, addItems } = require('./items');
const cartRouter = express.Router();

cartRouter.post('/getitems', async (req, res) => {
    try {
        const { id } = req.body;
        const result = await getItems(id);
        res.status(201).json(result);
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
});

cartRouter.post('/additems', async (req, res) => {
    try {
        const { id, name, tag, price } = req.body;
        const result = await addItems(id, name, tag, price);
        res.status(201).json(result);
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
});

module.exports = cartRouter