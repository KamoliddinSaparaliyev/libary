const express = require("express");
const addAuthor = require("./add-author");
const httpValidator = require("../../shared/http-validator");
const {
  postAuthorSchema,
  patchAuthorSchema,
  deleteAuthorSchmea,
  showAuthorSchema,
  listAuthorSchema,
} = require("./_schemas");
const showAuthor = require("./show-author");
const { removeAuthor } = require("./remove-author");
const listAuthors = require("./list-authors");
const { editAuthor } = require("./edit-author");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAuthorSchema);

    const result = await addAuthor(req.body);
    console.log(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchAuthorSchema);

    const result = await editAuthor({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAuthors = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listAuthorSchema);
    const result = await listAuthors(req.query);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAuthorSchema);

    const result = await showAuthor(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAuthorSchmea);

    const result = await removeAuthor(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAuthor,
  getAuthor,
  getAuthors,
  patchAuthor,
  deleteAuthor,
};
