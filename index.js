const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));
// Initialize server
app.listen(3000, () => {
    console.log("Running on port 3000.");
});

module.exports = app;