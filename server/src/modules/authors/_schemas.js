const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

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
    sort: buildSortSchema(["full_name", "id"]),
    page: pageSchema,
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
