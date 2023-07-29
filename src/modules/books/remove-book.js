const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

exports.removeBook = async ({ id }) => {
  const existing = await Book.findById(id);

  if (!existing) throw new NotFoundError("Book not found");

  return await Book.findByIdAndUpdate(id, { is_deleted: true });
};
