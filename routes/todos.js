const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createTodo,
  getTodo,
  deleteTodo
} = require("../handlers/todos");

// prefix - /api/users/:id/todos
router.route("/").post(createTodo);

// prefix - /api/users/:id/todos/:todo_id
router
  .route("/:todo_id")
  .get(getTodo)
  .delete(deleteTodo);

module.exports = router;