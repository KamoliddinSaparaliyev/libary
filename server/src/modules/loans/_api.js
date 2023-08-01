const express = require("express");
const { postLoan, getLoans, getLoan, patchLoan } = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const updateLoanStatus = require("./update-loan-status");

const router = express.Router();

router.post("/loans", isLoggedIn, postLoan);
router.get("/loans", isLoggedIn, getLoans);
router.get("/loans/:id", isLoggedIn, getLoan);
router.patch("/loans/:id", isLoggedIn, patchLoan);

module.exports = router;
