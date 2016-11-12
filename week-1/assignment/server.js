var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./dishRouter');
var leaderRouter = require('./leaderRouter');
var promoRouter = require('./promoRouter');

var app = express();

app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
