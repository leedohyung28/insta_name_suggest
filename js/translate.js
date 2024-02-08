// const express = require('express');
// const cors = require('cors');
// const port = 3000;
// var app = express();
// app.use(cors())
// const client_id = 'mQOngzn0qYwWAz6rkyYB';
// const client_secret = 'aTBM0q47qQ';
// app.get('/translate', function (req, res) {
//     var query = req.query.text;
//     var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
//     var request = require('request');
//     var options = {
//        url: api_url,
//        form: {'source':'ko', 'target':'en', 'text':query},
//        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//     };
//    request.post(options, function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//        res.end(body);
//      } else {
//        res.status(response.statusCode).end();
//        console.log('error = ' + response.statusCode);
//      }
//    });
//  });
//  app.listen(port, function () {
//    console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
//  });