const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async ({ id }) => {
  const author = await Author.find({ _id: id, is_deleted: false });

  if (!author) throw new NotFoundError("Author not found");

  return author;
};

module.exports = showAuthor;
