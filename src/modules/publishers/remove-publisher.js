const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

exports.removePublisher = async ({ id }) => {
  const existing = await Publisher.findById(id);

  if (!existing) throw new NotFoundError("Publisher not found");

  return await Publisher.findByIdAndUpdate(id, { is_deleted: true });
};
