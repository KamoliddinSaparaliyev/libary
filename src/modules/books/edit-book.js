const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

exports.editBook = async ({ id, ...changes }) => {
  const existing = await Book.findById(id);
  if (!existing) throw new NotFoundError("Book not found");

  const updated = Book.findByIdAndUpdate(id, { ...changes });
  return updated;
};
