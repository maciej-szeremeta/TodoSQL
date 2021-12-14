const express = require('express');
const { asyncHandler } = require('../utils/async');
const { TodoRecord } = require('../record/todo.record');

const todoRouter = express.Router();

todoRouter
  .get('/', async (req, res) => {
    res.render('todo/list-all', {
      tasks: await TodoRecord.findAll(),
    });
  })
  .get(
    '/:id',
    asyncHandler(async (req, res) => {
      const foundTodo = await TodoRecord.find(req.params.id);
      res.render('todo/one', {
        task: foundTodo,
      });
    })
  )
  .post(
    '/',
    asyncHandler(async (req, res) => {
      const firstTodoItem = new TodoRecord({
        title: req.body.title,
      });
      const id = await firstTodoItem.insert();
      res.status(201).render('todo/added', {
        title: req.body.title,
        id,
      });
    })
  )
  .put(
    '/:id',
    asyncHandler(async (req, res) => {
      const foundTodo = await TodoRecord.find(req.params.id);
      foundTodo.title = req.body.title;
      await foundTodo.update();
      res.render('todo/modified', {
        title: req.body.title,
        id: req.params.id,
      });
    })
  )
  .delete(
    '/:id',
    asyncHandler(async (req, res) => {
      const foundTodo = await TodoRecord.find(req.params.id);
      await foundTodo.delete();
      res.render('todo/deleted');
    })
  )
  .get('/form/add', (req, res) => {
    res.render('todo/forms/add');
  })
  .get('/form/edit/:id', async (req, res) => {
    const foundTodo = await TodoRecord.find(req.params.id);
    res.render('todo/forms/edit', {
      task: foundTodo,
    });
  });

module.exports = {
  todoRouter,
};
