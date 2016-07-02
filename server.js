var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/hello-world', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Trello clone app listening on port 3000!');
});