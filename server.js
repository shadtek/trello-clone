var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Trello clone app listening on port 3000!');
});