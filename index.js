const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});
// Initialize server
app.listen(3000, () => {
    console.log("Running on port 3000.");
});

module.exports = app;