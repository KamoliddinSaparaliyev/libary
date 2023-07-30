const Joi = require("joi");

module.exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    due_date: Joi.date().iso().required(),
    borrower: Joi.string().required(),
  }),
};

module.exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listLoanSchema = {
  query: Joi.object({
    sort: {
      by: Joi.string().valid("out_date", "due_date").default("out_date"),
      order: Joi.string().valid("asc", "desc").default("asc"),
    },
    page: {
      limit: Joi.number().integer().min(1).default(10),
      offset: Joi.number().integer().min(0).default(0),
    },
    filters: {
      book: Joi.string().required(),
      borrower: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),
};

module.exports.patchLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
