const Joi = require("joi");

exports.postBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    is_deleted: Joi.boolean().default(false),
  }),
};

exports.showBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.listBorrowerSchema = {
  query: Joi.object({
    sort: {
      by: Joi.string().valid("id", "full_name").default("id"),
      order: Joi.string().valid("asc", "desc").default("asc"),
    },
    page: {
      limit: Joi.number().integer().min(1).default(10),
      offset: Joi.number().integer().min(0).default(0),
    },
    filters: {
      book: Joi.string().required(),
      admin: Joi.string().required(),
    },
  }),
};

exports.patchBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  }),
};

exports.deleteBorrowerSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
