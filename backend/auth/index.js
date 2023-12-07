const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./auth/auth');

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

app.use('/auth', authRouter);

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
