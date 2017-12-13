const express = require('express');

const todosRouter = express.Router();

const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  todosRouter.use(bodyParser.json());

  const todosDB = app.todosDB;

  todosRouter.get('/', function (req, res) {
    delete req.query["_"];
    todosDB.find(req.query).exec(function (error, todos) {
      setTimeout(
        () => res.send({
          'status': 'ok',
          'data': todos
        }),
        2000);
    })
  });

  todosRouter.post('/', function (req, res) {
    // Look for the most recently created record
    todosDB.find({}).sort({ id: -1 }).limit(1).exec(function (err, todos) {

      if (todos.length != 0)
        req.body.todo.id = todos[0].id + 1;
      else
        req.body.todo.id = 1;

      // Insert the new record
      todosDB.insert(req.body.todo, function (err, newEvent) {
        res.status(201);
        res.send({ 'status': 'ok', 'data': [newEvent] });
      })
    });
  });

  todosRouter.get('/:id', function (req, res) {
    todosDB.find({ id: req.params.id }).exec(function (error, todos) {
      if (todos.length > 0)
        res.send({
          'status': 'ok',
          'data': todos[0]
        });
      else {
        res.status(404);
        res.send({
          'status': 'missing',
          'data': null
        });
      }
    });
  });

  todosRouter.put('/:id', function (req, res) {
    const todo = req.body.todo;

    todosDB.update({ id: req.params.id }, todo, {}, function () {
      res.send({ 'status': 'ok', 'data': [todo] });
    });
  });

  todosRouter.delete('/:id', function (req, res) {
    todosDB.remove({ id: req.params.id }, {}, function () {
      res.status(204).end();
    });
  });

  app.use('/api/todos', todosRouter);
};
