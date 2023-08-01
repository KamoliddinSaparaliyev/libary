const express = require("express");
const addLoan = require("./add-loan");
const httpValidator = require("../../shared/http-validator");
const {
  postLoanSchema,
  showLoanSchema,
  listLoanSchema,
  patchLoanSchema,
} = require("./_schemas");
const showLoan = require("./show-loan");
const listLoans = require("./list-loans");
const editLoan = require("./edit-loan");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoan = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoanSchema);

    const result = await addLoan({ ...req.body, admin: req.admin.id });
    console.log(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getLoans = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listLoanSchema);
    const result = await listLoans(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showLoanSchema);

    const result = await showLoan(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const patchLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, patchLoanSchema);

    const result = await editLoan(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postLoan,
  getLoan,
  getLoans,
  patchLoan,
};
