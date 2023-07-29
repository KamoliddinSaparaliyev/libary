const express = require("express");
const {
  postBorrower,
  getBorrowers,
  getBorrower,
  patchBorrower,
  deleteBorrower,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const isSuper = require("../../shared/auth/is-super");

const router = express.Router();

router.post("/borrowers", isLoggedIn, postBorrower);
router.get("/borrowers", isLoggedIn, getBorrowers);
router.get("/borrowers/:id", isLoggedIn, getBorrower);
router.patch("/borrowers/:id", isLoggedIn, patchBorrower);
router.delete("/borrowers/:id", isLoggedIn, deleteBorrower);

module.exports = router;
