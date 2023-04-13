const express = require("express");
const cartRouter = express.Router()
const { getItem, addItem } = require("./item.js");

// ask hari how this routing process works and why we need it in every microservice.
cartRouter.post("./getitem", async (req, res) => {
    try {
        const { id } = req.body;
        const res = await getItem(id);
        res.status(201).json(res);

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })

    }
})

cartRouter.post("./additem", async (req, res) => {
    try {
        const { id, name, tag, price } = req.body;
        const res = await addItem(id, name, tag, price);
        res.status(201).json(result);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })

    }
})

module.exports = { cartRouter }