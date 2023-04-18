const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const { PORT } = require("./config")
const authRouter = require("./auth/auth");
// const cartRouter = require("./cart/cart");

app.use(bodyParser.json());

app.use("/auth", authRouter);
// app.use("/cart", cartRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})