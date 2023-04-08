const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const cartRoutes = require('./cart');
const checkoutRoutes = require('./checkout');
const ordersRoutes = require('./orders');
const productsRoutes = require('./products');
const { PORT } = require('./config/config');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
