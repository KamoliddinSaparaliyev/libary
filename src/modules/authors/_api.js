const express = require("express");
const {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuthor,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const isSuper = require("../../shared/auth/is-super");

const router = express.Router();

router.post("/authors", isLoggedIn, postAuthor);
router.get("/authors", isLoggedIn, getAuthors);
router.get("/authors/:id", isLoggedIn, getAuthor);
router.patch("/authors/:id", isLoggedIn, patchAuthor);
router.delete("/authors/:id", isLoggedIn, deleteAuthor);

module.exports = router;
