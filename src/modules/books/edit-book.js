const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const editBook = async ({ id, ...changes }) => {
  const existing = await Book.findOne({ _id: id, is_deleted: false });
  if (!existing) throw new NotFoundError("Book not found");

  const updated = Book.findByIdAndUpdate(id, { ...changes });
  return updated;
};

module.exports = editBook;
