const Joi = require("joi");

exports.postAuthorSchema = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

exports.showAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.listAuthorSchema = {
  query: Joi.object({
    sort: {
      by: Joi.string().valid("name").default("id"),
      order: Joi.string().valid("asc", "desc").default("desc"),
    },
    page: {
      limit: Joi.number().integer().min(1).default(10),
      offset: Joi.number().integer().min(0).default(0),
    },
    filters: {
      is_deleted: Joi.boolean(),
    },
  }),
};

exports.patchAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
  }),
};

exports.updatePasswordSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
  }),
};

exports.deleteAuthorSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
