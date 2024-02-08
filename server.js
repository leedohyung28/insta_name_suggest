const express = require('express');
var app = express();
const cors = require('cors');
var port = 8080;
app.use(cors());
app.use(express.json());

var client_id = 'mQOngzn0qYwWAz6rkyYB';
var client_secret = 'aTBM0q47qQ';
app.get('/translate', function (req, res) {
    var query = req.query.text;
    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    var request = require('request');
    var options = {
       url: api_url,
       form: {'source':'ko', 'target':'en', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
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
   console.log('http://127.0.0.1:8080/translate app listening on port 8080!');
 });