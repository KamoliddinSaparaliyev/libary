const express = require("express");
const addBorrower = require("./add-borrower");
const httpValidator = require("../../shared/http-validator");
const {
  postBorrowerSchema,
  patchBorrowerSchema,
  deleteBorrowerSchmea,
  showBorrowerSchema,
  listBorrowerSchema,
} = require("./_schemas");
const showBorrower = require("./show-borrower");
const removeBorrower = require("./remove-borrower");
const listBorrowers = require("./list-borrowers");
const editBorrower = require("./edit-borrower");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBorrower = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBorrowerSchema);

    const result = await addBorrower(req.body);
    console.log(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchBorrower = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchBorrowerSchema);

    const result = await editBorrower({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBorrowers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listBorrowerSchema);
    const result = await listBorrowers(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBorrowerSchema);

    const result = await showBorrower(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBorrower = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBorrowerSchmea);

    const result = await removeBorrower(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBorrower,
  getBorrower,
  getBorrowers,
  patchBorrower,
  deleteBorrower,
};
