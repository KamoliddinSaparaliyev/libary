const express = require("express");
const addAdmin = require("./add-admin");
const httpValidator = require("../../shared/http-validator");
const {
  postAdminSchema,
  patchAdminSchema,
  deleteAdminSchmea,
  loginAdminSchema,
  showAdminSchema,
  listAdminsSchema,
} = require("./_schemas");
const showAdmin = require("./show-admin");
const { removeAdmin } = require("./remove-admin");
const listAdmins = require("./list-admins");
const { editAdmin } = require("./edit-admin");
const login = require("./login-admin");
const { ForbiddenError } = require("../../shared/errors");

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
    let result;
    const isAdminEditingOwnInfo = !req.params.id || req.params.id === "me";

    httpValidator({ body: req.body, params: req.params }, patchAdminSchema);

    if (req.admin.is_super && !isAdminEditingOwnInfo) {
      result = await editAdmin({ id: req.params.id, changes: req.body });
    } else if (isAdminEditingOwnInfo) {
      result = await editAdmin({ id: req.admin.id, changes: req.body });
    } else {
      throw new ForbiddenError("Ruxsat yo'q");
    }

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

    res.status(201).json({
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

    res.status(201).json({
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
  deleteAdmin,
  loginAdmin,
};