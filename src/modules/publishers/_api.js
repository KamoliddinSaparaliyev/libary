const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
} = require("./_controllers");

const router = express.Router();

router.post("/publishers", isLoggedIn, postPublisher);
router.get("/publishers", isLoggedIn, getPublishers);
router.get("/publishers/:id", isLoggedIn, getPublisher);
router.patch("/publishers/:id", isLoggedIn, patchPublisher);
router.delete("/publishers/:id", isLoggedIn, deletePublisher);

module.exports = router;
