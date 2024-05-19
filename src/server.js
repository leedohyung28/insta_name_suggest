const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const port = process.env.port;
const translateRotuer = require("./routes/translate");

app.use(cors());
app.use(express.json());
app.use("/translate", translateRotuer);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
