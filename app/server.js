


require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
// const jwt = require("express-jwt");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`LORA invading on ${PORT}, in ${app.get("env")} mode`);
});