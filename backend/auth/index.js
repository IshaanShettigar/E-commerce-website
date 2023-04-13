const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const { PORT } = require("../config")
const authRouter = require("./auth");

app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})