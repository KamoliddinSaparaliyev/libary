const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async ({ id }) => {
  const book = await Book.findOne({ _id: id, is_deleted: false });

  if (!book) throw new NotFoundError("Book not found");

  return book;
};

module.exports = showBook;
