var express 	= require('express');
    app 		= express();
    bodyParser 	= require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/hello-world', function (req, res) {
// 	res.send('Hello World!');
// });

app.get('/api/data', function(req, res) {

	res.send(lists)
})

var lists = [{
  name: 'personal', tasks: ['sleep', 'eat']
}, {
  name: 'school', tasks: ['homework', 'study for the test']
}, {
  name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face']
}];

app.put('/api/task/:listIndex', function(req, res) {
	var listIndex = req.params.listIndex;
	lists[listIndex].tasks.push(req.body.text);
	res.send(req.body.text)
})


var portNum = 3000
app.listen(portNum, function () {
  console.log('Trello clone app listening on port: ', portNum);
});