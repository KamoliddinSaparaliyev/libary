const express = require("express");
const {
  postAdmin,
  getAdmins,
  getAdmin,
  patchAdmin,
  deleteAdmin,
  loginAdmin,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const isSuper = require("../../shared/auth/is-super");

const router = express.Router();

router.post("/admins", isLoggedIn, postAdmin);
router.get("/admins", isLoggedIn, getAdmins);
router.get("/admins/:id", isLoggedIn, getAdmin);
router.patch("/admins/:id", isLoggedIn, patchAdmin);
router.patch("/admins/me", isLoggedIn, patchAdmin);
router.post("/admins/login", loginAdmin);
router.delete("/admins/:id", isLoggedIn, isSuper, deleteAdmin);

module.exports = router;
