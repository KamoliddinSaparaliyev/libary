const Joi = require("joi");

module.exports.postAuthorSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
  }),
};

module.exports.showAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listAuthorSchema = {
  query: Joi.object({
    sort: {
      by: Joi.string().valid("full_name", "id").default("full_name"),
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

module.exports.patchAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
  }),
};

module.exports.deleteAuthorSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
