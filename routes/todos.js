const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  updateMoveTodo
} = require("../handlers/todos");

// prefix - /api/users/:id/todos
router
.route("/")
.post(createTodo)
.put(updateMoveTodo);

// prefix - /api/users/:id/todos/:todo_id
router
  .route("/:todo_id")
  .get(getTodo)
  .delete(deleteTodo)
  .put(updateTodo);

module.exports = router;