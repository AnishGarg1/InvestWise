const express = require("express");
const app = express();
const database = require("./config/database");
const dotenv = require("dotenv");

dotenv.config(); // importing all env variable

// Connecting to Database
database.dbConnect();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})