const Joi = require("joi");

exports.postPublisherSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    is_deleted: Joi.boolean().default(false),
  }),
};

exports.showPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.listPublisherSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: {
      limit: Joi.number(),
      offset: Joi.number(),
    },
    sort: {
      by: Joi.string(),
      order: Joi.string(),
    },
    filters: {
      is_super: Joi.boolean(),
    },
  }),
};

exports.patchPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  }),
};

exports.deletePublisherSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
