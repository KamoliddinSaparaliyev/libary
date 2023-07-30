const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const editPublisher = async ({ id, changes }) => {
  const existing = await Publisher.findOne({ _id: id, is_deleted: false });
  if (!existing) throw new NotFoundError("Publisher not found");

  const updated = Publisher.findByIdAndUpdate(id, changes, { new: true });
  return updated;
};
module.exports = editPublisher;
