const express = require('express');
const catalogueRouter = express.Router();
const { getProducts, getProductById } = require('./items');

catalogueRouter.get('/', async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get product by ID
catalogueRouter.get('/:id', async (req, res) => {
    try {
      const rawId = req.params.id;
      if (!Number.isInteger(Number(rawId))) {
        return res.status(400).json({ message: 'Invalid product ID' });
      }
  
      const productId = parseInt(rawId, 10);
      const product = await getProductById(productId);
  
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = catalogueRouter;
