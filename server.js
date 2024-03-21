import * as deepl from 'deepl-node'

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const authKey = process.env.client_id;
const translator = new deepl.Translator(authKey);

app.use(cors());
app.use(express.json());

app.get('/translate', async (req, res) => {
  const text = req.query.text;
  try {
      const translationResult = await translator.translateText(text, null, 'en'); // Translate to English
      const translatedText = translationResult.text;

      res.send(translatedText);
  } catch (error) {
      console.error('Error translating text:', error);
      res.status(500).send('Error translating text');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});