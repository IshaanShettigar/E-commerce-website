const { pool } = require("../config.js")

async function registerUser(username, password) {
    try {
        const userExistsQuery = `SELECT * FROM users WHERE username=${username}`;
        const userExistsResult = await pool.query(userExistsQuery);
        if (userExistsResult.rows.length > 0) {
            console.log("User already exists")
            return { message: "User already exists" }
        }

        const createUserQuery = `INSERT INTO users VALUES(${username},${password})`
        await pool.query(createUserQuery)
        console.log("User created successfully")
        return { message: "User created successfully" }

    } catch (err) {
        console.log(err);
        throw new Error("Internal Server Error")
    }
}

/* Yet to add JSON web token functionality */
async function loginUser(username, password) {
    try {
        const userExistsQuery = `SELECT * FROM users WHERE username=${username}`
        const userExistsResult = await pool.query(userExistsQuery);
        if (userExistsResult.rows.length === 0) {
            console.log("Invalid Login Attempt");
            return { message: "Invalid Login Credentials" }
        }
        const dbPassword = userExistsResult.rows[0].passowrd;
        if (password !== dbPassword) {
            console.log("Invalid Password used");
            return { message: "Invalid Password" }
        }
        else {
            console.log("Password match!")
            return { message: "Login Successful!" }
        }
    } catch (err) {
        console.log(err);
        throw new Error("Internal Server Error");
    }
}

module.exports = { registerUser, loginUser }