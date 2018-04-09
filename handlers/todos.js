const db = require("../models");

exports.createTodo = async function(req, res, next) {
  try {
    let todo = await db.Todo.create({
      text: req.body.text,
      position:req.body.position,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.todos.push(todo.id);
    await foundUser.save();
    let foundTodo = await db.Todo.findById(todo._id).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};

// GET - /api/users/:id/todo/:todo_id
exports.getTodo = async function(req, res, next) {
  try {
    let todo = await db.Todo.find(req.params.todo_id);
    return res.status(200).json(todo);
  } catch (err) {
    return next(err);
  }
};

// DELETE /api/users/:id/todo/:todo_id
exports.deleteTodo = async function(req, res, next) {
  try {
    let foundTodo = await db.Todo.findById(req.params.todo_id);
    await foundTodo.remove();

    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};
