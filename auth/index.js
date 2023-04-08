const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./auth');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
