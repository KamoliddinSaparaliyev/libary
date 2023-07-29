const express = require("express");
const addLoan = require("./add-loan");
const httpValidator = require("../../shared/http-validator");
const {
  postLoanSchema,
  showLoanSchema,
  listLoanSchema,
} = require("./_schemas");
const showLoan = require("./show-loan");
const listLoans = require("./list-loans");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoan = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoanSchema);

    const result = await addLoan(req.body);
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

    res.status(201).json({
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
};
