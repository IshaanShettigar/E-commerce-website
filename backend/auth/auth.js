const express = require("express");
const { registerUser, loginUser } = require("./users.js")
const authRouter = express.Router();


authRouter.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body
        const result = await registerUser(username, password);
        // This sends the result as a json
        res.send(result);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal Server Error" })
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await loginUser(username, password);
        res.send(result);

    } catch (err) {
        console.log(err)
        res.status(401).json({ error: "Invalid Credentials" })
    }
})

module.exports = authRouter;