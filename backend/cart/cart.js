const express = require('express');
const cartRouter = express.Router();
const { getCart, updateItem , addItem , removeItem , getTotal} = require('./items');

cartRouter.get('/', (req, res) => {
    const cart = getCart();
    res.status(200).json(cart);
});

cartRouter.post('/add', (req, res) => {
    try {
        const { itemId, quantity } = req.body;
        addItem(itemId, quantity);
        res.status(200).send('Item added to cart');
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
});

cartRouter.post('/update', (req, res) => {
    try{
        const { itemId, quantity } = req.body;
        updateItem(itemId, quantity);
        res.status(200).send('Cart updated');
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
});

cartRouter.post('/remove', (req, res) => {
    try{
        const { itemId } = req.body;
        removeItem(itemId);
        res.status(200).send('Item removed from cart');
    }catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
});

cartRouter.get('/total', (req, res) => {
  const total = getTotal();
  res.status(200).json({ total });
});
module.exports = cartRouter