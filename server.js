var express = require('express');
var app = express();
var PORT = 3000;

app.get('/about', function(request, response) {
  response.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});
