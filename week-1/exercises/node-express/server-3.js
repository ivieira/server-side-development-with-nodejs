var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  next();
});

app.get('/dishes', function (req, res, next) {
  res.end('Will send all the dishes to you!');
});

app.post('/dishes', function (req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: '
    + req.body.description);
});

app.delete('/dishes', function (req, res, next) {
  res.end('Deleting all dishes');
});

app.get('/dishes/:id', function (req, res, next) {
  res.end('Will send details of the dish: ' + req.params.id
    + ' to you!');
});

app.put('/dishes/:id', function (req, res, next) {
  res.write('Updating the dish: ' + req.params.id + '\n');
  res.end('Will update the dish: ' + req.body.name
    + ' with details: ' + req.body.description);
});

app.delete('/dishes/:id', function (req, res, next) {
  res.end('Deleting dish: ' + req.params.id);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
