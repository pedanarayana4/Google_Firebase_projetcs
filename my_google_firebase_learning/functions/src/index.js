const express = require("express");
const app = express();
app.use("/hello", (req, res) => {
    res.send("hello " + req.query.name)
});
module.exports = { app: app };
