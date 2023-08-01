const express = require("express");
const addPublisher = require("./add-publisher");
const httpValidator = require("../../shared/http-validator");
const {
  postPublisherSchema,
  patchPublisherSchema,
  deletePublisherSchmea,
  showPublisherSchema,
  listPublisherSchema,
} = require("./_schemas");
const showPublisher = require("./show-publisher");
const removePublisher = require("./remove-publisher");
const listPublishers = require("./list-publishers");
const editPublisher = require("./edit-publisher");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const postPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postPublisherSchema);

    const result = await addPublisher(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchPublisherSchema);

    const result = await editPublisher({
      id: req.params.id,
      changes: req.body,
    });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getPublishers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listPublisherSchema);
    const result = await listPublishers(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showPublisherSchema);

    const result = await showPublisher(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deletePublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletePublisherSchmea);

    const result = await removePublisher(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postPublisher,
  getPublisher,
  getPublishers,
  patchPublisher,
  deletePublisher,
};
