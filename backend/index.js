const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./auth/auth');
const cartRouter = require('./cart/cart');
const catalogueRouter = require('./products/catalogue');
const path = require('path');

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/products/catalogue', catalogueRouter);

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/catalogue', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'catalogue.html'));
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
