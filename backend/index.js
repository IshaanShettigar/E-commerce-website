const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./auth/auth');
// const cartRoutes = require('./cart');
// const checkoutRoutes = require('./checkout');
// const ordersRoutes = require('./orders');
// const productsRoutes = require('./products');
const { PORT } = require('./config');

app.use(bodyParser.json());

app.use('/auth', authRoutes);
// app.use('/cart', cartRoutes);
// app.use('/checkout', checkoutRoutes);
// app.use('/orders', ordersRoutes);
// app.use('/products', productsRoutes);

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
