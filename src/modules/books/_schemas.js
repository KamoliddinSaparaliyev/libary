const Joi = require("joi");

module.exports.postBookSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    publisher: Joi.string().required(),
    author: Joi.string().required(),
    copies: Joi.number().required(),
    is_deleted: Joi.boolean().default(false),
  }),
};

module.exports.showBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listBookSchema = {
  query: Joi.object({
    sort: {
      by: Joi.string().valid("id", "copies").default("id"),
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

module.exports.patchBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    title: Joi.string(),
    publisher: Joi.string(),
    author: Joi.string(),
    copies: Joi.number(),
  }),
};

module.exports.deleteBookSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
