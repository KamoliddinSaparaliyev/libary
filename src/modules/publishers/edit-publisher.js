const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

exports.editPublisher = async ({ id, ...changes }) => {
  const existing = await Publisher.findById(id);
  if (!existing) throw new NotFoundError("Publisher not found");

  const updated = Publisher.findByIdAndUpdate(id, { ...changes });
  return updated;
};
