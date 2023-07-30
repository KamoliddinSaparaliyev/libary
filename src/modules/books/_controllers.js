const express = require("express");
const httpValidator = require("../../shared/http-validator");
const addBook = require("./add-book");
const showBook = require("./show-book");
const removeBook = require("./remove-book");
const listBooks = require("./list-books");
const editBook = require("./edit-book");
const {
  postBookSchema,
  patchBookSchema,
  deleteBookSchmea,
  showBookSchema,
  listBookSchema,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBookSchema);

    const result = await addBook(req.body);
    console.log(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchBookSchema);

    const result = await editBook({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBooks = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listBookSchema);
    const result = await listBooks(req.query);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBookSchema);

    const result = await showBook(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBookSchmea);

    const result = await removeBook(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBook,
  getBook,
  getBooks,
  patchBook,
  deleteBook,
};
