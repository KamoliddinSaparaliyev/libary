const { ForbiddenError } = require("../errors");
const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isSuper = async (req, res, next) => {
  try {
    if (!req.admin.is_super) throw new ForbiddenError("Ruxsat yo'q");
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = isSuper;
