var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

//GET /todos?completed=true&q=dog
app.get('/todos', function (req, res) {
  var queryParams = req.query;
  var where = {};
  
  if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'true') {
    where.completed = true;
  } else if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'false') {
    where.completed = false;
  }

  if (queryParams.hasOwnProperty('q') && queryParams.q.length > 0) {
    where.description = {
      $like: '%'+ queryParams.q +'%'
    };
  }

  db.todo.findAll({where: where}).then(function(todos) {
      res.json(todos);
  }, function(e) {
    res.sendStatus(500);
  });
  
  // Without sequelize  
  //var filteredTodos = todos;

  //if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'true') {
  //  filteredTodos = _.where(filteredTodos, {completed: true});
  //} else if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'false') {
  //  filteredTodos = _.where(filteredTodos, {completed: false});
  //}

  //if (queryParams.hasOwnProperty('q') && queryParams.q.length > 0) {
  //  filteredTodos = _.filter(filteredTodos, function(todo) {
  //    return todo.description.toLowerCase().indexOf(queryParams.q.toLowerCase()) >= 0;
  //  });
  //}

  //res.json(filteredTodos);
});

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  db.todo.findById(todoId).then(function(todo) {
    console.log(todo);
    console.log(typeof todo);
    //if (todo != null) {
    if (!!todo) {
      res.json(todo);
    } else {
      res.sendStatus(404);
    }
  }).catch(function(e) {
    res.sendStatus(500);
  });
  //var matchedTodo = _.findWhere(todos, {id: todoId});
  //if (typeof matchedTodo !== 'undefined') {
  //  res.json(matchedTodo);
  //} else {
  //  res.sendStatus(404);
  //}
});

//POST /todos
app.post('/todos', function (req, res) {
  var body = req.body;
  body = _.pick(body, 'completed', 'description');

  db.sequelize.sync(
    //{ force: true }
  ).then(function() {
    console.log('Everything is synced');

    db.todo.create(body).then(function(todo) {
      return res.json(todo.toJSON());
    }).catch(function(e) {
      return res.status(400).json(e);
    });

  //if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
  //  return res.status(400).send();
  //}
  //body.id = todoNextId++;
  //body.description = body.description.trim();
  //todos.push(body);
  //res.json(body);
  });
});

// DELETE /todos/:id
app.delete('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  if (matchedTodo) {
    todos = _.without(todos, matchedTodo);
    res.json(todos);
  } else {
    res.status(404).json({"error": "no todo found with that id"});
  }
});

// PUT /todos/:id
app.put('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  var body = req.body;
  body = _.pick(body, 'completed', 'description');
  var validAttributes = {};

  if (!matchedTodo) {
    return res.status(404).send();
  }

  if (body.hasOwnProperty('completed') && _.isBoolean(body.completed)) {
    validAttributes.completed = body.completed;
  } else if (body.hasOwnProperty('completed')) {
    return res.status(400).send();
  }

  if (body.hasOwnProperty('description') && _.isString(body.description) && body.description.trim().length > 0) {
    validAttributes.description = body.description.trim();
  } else if (body.hasOwnProperty('description')) {
    return res.status(400).send(); 
  }

  _.extend(matchedTodo, validAttributes);
  res.json(matchedTodo);

});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT + '!');
  })
});

