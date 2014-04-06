var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.sendfile('public/index.html');
});


var server = app.listen(3000, function() {
      console.log('Listening on port %d', server.address().port);
      console.log(__dirname);
});

