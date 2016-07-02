var express 	= require('express');
    app 		= express();
    bodyParser 	= require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/hello-world', function (req, res) {
	res.send('Hello World!');
});

app.post('/api/task', function(req, res) {
	req.body;
	console.log(req.body)

	res.send(req.body)
})

var portNum = 3000
app.listen(portNum, function () {
  console.log('Trello clone app listening on port: ', portNum);
});