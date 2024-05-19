const express = require("express");
const dotenv = require("dotenv");
const deepl = require("deepl-node");
const router = express.Router();
dotenv.config();

const authKey = process.env.deepl_authkey;
const translator = new deepl.Translator(authKey);

router.get("/", async (req, res) => {
  const name = req.query.name;
  translator
    .translateText(name, "ko", "en-US")
    .then((result) => {
      res.send(result.text);
    })
    .catch((error) => {
      console.error("Error translating text:", error);
      res.status(500).send("Error translating text");
    });
});

module.exports = router;
