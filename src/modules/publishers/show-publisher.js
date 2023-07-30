const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const showPublisher = async ({ id }) => {
  const publisher = await Publisher.findOne({ _id: id, is_deleted: false });

  if (!publisher) throw new NotFoundError("Publisher not found");

  return publisher;
};

module.exports = showPublisher;
