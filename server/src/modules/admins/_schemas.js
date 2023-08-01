const Joi = require("joi");

module.exports.postAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports.showAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.patchAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};
module.exports.patchAdminMeSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

module.exports.updatePasswordSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    password: Joi.string().required(),
  }),
};

module.exports.deleteAdminSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listAdminsSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: {
      by: Joi.string().valid("full_name", "username").default("username"),
      order: Joi.string().valid("asc", "desc").default("desc"),
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

module.exports.loginAdminSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
