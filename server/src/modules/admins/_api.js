const express = require("express");
const {
  postAdmin,
  getAdmins,
  getAdmin,
  patchAdmin,
  deleteAdmin,
  loginAdmin,
  patchMe,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const isSuper = require("../../shared/auth/is-super");

const router = express.Router();

router.post("/admins", postAdmin);
router.get("/admins", isLoggedIn, getAdmins);
router.get("/admins/:id", isLoggedIn, getAdmin);
router.patch("/admins/:id", isLoggedIn, isSuper, patchAdmin);
router.patch("/admins/me", isLoggedIn, patchMe);
router.delete("/admins/:id", isLoggedIn, isSuper, deleteAdmin);
router.post("/admins/login", loginAdmin);

module.exports = router;
