const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async ({ id }) => {
  const book = await Book.findById(id)
    .populate("author", "name")
    .populate("publisher", "name address phone");

  if (!book) throw new NotFoundError("Book not found");

  return book;
};

module.exports = showBook;
