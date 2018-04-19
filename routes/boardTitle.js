const express = require("express");

const router = express.Router({ mergeParams: true });

const {
  createBoardTitle,
  updateboardTilte,
  getBoardTitles
} = require("../handlers/boardTitle");

// prefix - /api/users/:id/board/:board_id
router
.route("/")
.get(getBoardTitles)
.post(createBoardTitle);
router
.route('/:board_id')
.put(updateboardTilte);

module.exports = router;