const express = require("express");
const { postLoan, getLoans, getLoan } = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/loans", isLoggedIn, postLoan);
router.get("/loans", isLoggedIn, getLoans);
router.get("/loans/:id", isLoggedIn, getLoan);

module.exports = router;
