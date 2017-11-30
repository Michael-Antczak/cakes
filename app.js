var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build/')));
app.use(express.static(path.join(__dirname, 'client/public/')));

app.all('*', function(req, res, next) {
  
    var options = {
      root: __dirname + '/client/build/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };
  
    res.sendFile('index.html', options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent:');
      }
    });
  
  
  });

module.exports = app;
