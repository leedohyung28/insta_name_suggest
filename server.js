const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();
const port = 8080;

const authKey = process.env.client_id;

app.use(cors());
app.use(express.json());

// app.get('/translate', function (req, res) {
//   var text = req.query.text;

  // var options = {
  //   method: 'POST',
  //   url: 'https://api-free.deepl.com/v2/translate',
  //   headers: {
  //     'Authorization': `DeepL-Auth-Key ${authKey}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     text: [text],
  //     target_lang: 'EN'
  //   })
  // };

//   request(options, function (error, response, body) {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Translation failed' });
//     } else {
//       var translatedText = JSON.parse(body).translations[0].text;
//       res.status(200).send(translatedText);
//     }
//   });
// });

// app.listen(port, function () {
//   console.log(`app listening on port ${port}!`);
// });

app.get('/translate', function (req, res) {
  var query = req.query.text;
  var api_url = 'https://api-free.deepl.com/v2/translate';
  var request = require('request');
  var options = {
    method: 'POST',
    url: 'https://api-free.deepl.com/v2/translate',
    headers: {
      'Authorization': `DeepL-Auth-Key ${authKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: [text],
      target_lang: 'EN'
    })
  };
  console.log(body)

 request.post(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var parsedBody = JSON.parse(body);
    var translatedText = parsedBody.message.result.translatedText; 
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    res.end(translatedText);
  } else {
    res.status(response.statusCode).end();
    console.log('error = ' + response.statusCode);
  }
 });
});
app.listen(port, function () {
 console.log('app listening on port 8080!');
});