const express = require("express");
const { ForbiddenError } = require("../../shared/errors");
const httpValidator = require("../../shared/http-validator");
const addAdmin = require("./add-admin");
const listAdmins = require("./list-admins");
const showAdmin = require("./show-admin");
const login = require("./login-admin");
const editAdmin = require("./edit-admin");
const removeAdmin = require("./remove-admin");
const {
  postAdminSchema,
  patchAdminSchema,
  deleteAdminSchmea,
  loginAdminSchema,
  showAdminSchema,
  listAdminsSchema,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAdminSchema);

    const result = await addAdmin(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.admin.id, body: req.body }, patchAdminSchema);
    const result = await editAdmin({ id: req.params.id, changes: req.body });
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const patchMe = async (req, res, next) => {
  try {
    const result = await editAdmin(
      { id: req.admin.id, changes: req.body },
      patchAdminSchema
    );

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAdmins = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listAdminsSchema);

    const result = await listAdmins(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAdminSchema);

    const result = await showAdmin(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAdminSchmea);

    const result = await removeAdmin(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginAdminSchema);

    const result = await login(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  postAdmin,
  getAdmin,
  getAdmins,
  patchAdmin,
  patchMe,
  deleteAdmin,
  loginAdmin,
};
