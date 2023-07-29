const Joi = require("joi");

exports.postAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.showAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};
exports.patchAdminMeSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.updatePasswordSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    password: Joi.string().required(),
  }),
};

exports.deleteAdminSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.listAdminsSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: {
      by: Joi.string().valid("full_name", "username").default("username"),
      order: Joi.string().valid("ASC", "DESC").default("DESC"),
    },
    page: {
      limit: Joi.number().integer().min(1).default(10),
      offset: Joi.number().integer().min(0).default(0),
    },
    filters: {
      is_deleted: Joi.boolean().default(false),
      is_super: Joi.boolean().default(false),
    },
  }),
};

exports.loginAdminSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
