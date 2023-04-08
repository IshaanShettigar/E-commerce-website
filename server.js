const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('Hello World!');
    }
);
