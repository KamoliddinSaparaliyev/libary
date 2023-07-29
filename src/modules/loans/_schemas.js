const Joi = require("joi");

exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    out_date: Joi.date().iso().required(),
    due_date: Joi.date()
      .iso()
      .required()
      .custom((value, helpers) => {
        const twoMonthsFromOutDate = new Date(helpers.prefs.context.out_date);
        twoMonthsFromOutDate.setMonth(twoMonthsFromOutDate.getMonth() + 2);

        if (new Date(value) > twoMonthsFromOutDate) {
          return helpers.error("any.invalid");
        }

        return value;
      }),
    admin: Joi.string().required(),
    borrower: Joi.string().required(),
  }),
};

exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.listLoanSchema = {
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
      admin: Joi.string().required(),
    },
  }),
};

exports.patchLoanSchema = {
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

exports.deleteLoanSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
