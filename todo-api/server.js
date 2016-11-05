var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet mom for lunch',
  complete: false
}, {
  id: 2,
  description: 'Go to market',
  complete: false
}, {
  id: 3,
  description: 'Feed the dog',
  complete: true
}];

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

//GET /todos
app.get('/todos', function (req, res) {
 res.json(todos);
});

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var todo;
  var found = false;
  for(var i = 0; i < todos.length && !found; i++) {
    if (todos[i].id === todoId) {
      found = true;
      todo = todos[i];
    } 
  }
  if (typeof todo !== 'undefined') {
    res.json(todo);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});
