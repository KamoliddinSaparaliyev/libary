const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async ({ id }) => {
  const author = await Author.findById(id);

  if (!author) throw new NotFoundError("Author not found");

  return author;
};

module.exports = showAuthor;
