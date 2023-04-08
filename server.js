const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Import routes
const authRoutes = require('./microservices/authentication/routes');
const catalogRoutes = require('./microservices/catalog/routes');
const cartRoutes = require('./microservices/cart/routes');
const orderRoutes = require('./microservices/order/routes');
const paymentRoutes = require('./microservices/payment/routes');
const userRoutes = require('./microservices/user/routes');

app.use('/api/authentication', authRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});